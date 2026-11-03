import { spawn } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import assert from 'node:assert/strict';

const output = process.argv[2];
if (!output) throw new Error('Provide a screenshot output directory.');
mkdirSync(output, { recursive: true });
const profile = mkdtempSync(join(tmpdir(), 'skills-qa-'));
const browser = spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', [
  '--headless=new', '--remote-debugging-port=0', '--user-data-dir=' + profile,
  '--no-first-run', '--no-default-browser-check', 'about:blank'
], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
let socket;
try {
  const endpoint = await new Promise((resolve, reject) => {
    let log = '';
    browser.stderr.on('data', data => {
      log += data;
      const match = log.match(/DevTools listening on (ws:\/\/\S+)/);
      if (match) resolve(match[1]);
    });
    browser.on('error', reject);
  });
  socket = new WebSocket(endpoint);
  await new Promise(resolve => socket.onopen = resolve);
  let next = 0;
  const pending = new Map();
  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    if (!pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    message.error ? reject(new Error(message.error.message)) : resolve(message.result);
  };
  const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const id = ++next;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params, sessionId }));
  });
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  const command = (method, params) => send(method, params, sessionId);
  const evaluate = async expression => {
    const result = await command('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  const waitFor = selector => evaluate('new Promise((resolve, reject) => { let tries = 0; const timer = setInterval(() => { if (document.querySelector(' + JSON.stringify(selector) + ')) { clearInterval(timer); resolve(true); } else if (++tries > 100) { clearInterval(timer); reject("Missing selector"); } }, 50); })');
  const screenshot = async name => {
    const result = await command('Page.captureScreenshot', { format: 'png' });
    writeFileSync(join(output, name + '.png'), Buffer.from(result.data, 'base64'));
  };
  await command('Page.enable');
  await command('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await command('Page.navigate', { url: 'http://127.0.0.1:5000/#skills' });
  await waitFor('.skills-entry');
  assert.equal(await evaluate('document.querySelectorAll(".skills-entry").length'), 12);
  for (const theme of ['dark', 'light']) {
    await evaluate('document.querySelectorAll(".appearance-options button").forEach(button => { if (button.textContent.trim().toLowerCase() === ' + JSON.stringify(theme) + ') button.click(); });');
    assert.equal(await evaluate('document.documentElement.dataset.colorMode'), theme);
    for (const [width, height] of [[375,812], [768,1024], [1440,900]]) {
      await command('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
      assert.equal(await evaluate('document.documentElement.scrollWidth <= innerWidth'), true);
      const columns = await evaluate('getComputedStyle(document.querySelector(".skills-entry")).gridTemplateColumns.split(" ").length');
      assert.equal(columns, width < 1000 ? 1 : 2);
      await screenshot(theme + '-' + width);
    }
  }
  const search = async value => {
    await evaluate('(() => { const input = document.querySelector("input[type=search]"); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set.call(input, ' + JSON.stringify(value) + '); input.dispatchEvent(new Event("input", { bubbles: true })); })()');
    await new Promise(resolve => setTimeout(resolve, 100));
  };
  await search('Pondie');
  assert.equal(await evaluate('document.querySelectorAll(".skills-entry").length'), 1);
  await evaluate('document.querySelector(".skills-project-link").focus()');
  await command('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await command('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await waitFor('.project-title-line');
  assert.equal(await evaluate('location.hash'), '#project/pondie-tab');
  await evaluate('location.hash = "#skills"');
  await waitFor('.skills-entry');
  await search('no-such-technology');
  await waitFor('.skills-empty');
  assert.equal(await evaluate('document.querySelector(".skills-summary").textContent'), '0 skills · 0 areas');
  await screenshot('empty-results');
  await search('');
  assert.equal(await evaluate('document.querySelectorAll(".skills-entry").length'), 12);
  await evaluate('document.querySelector(".skills-project-link").focus()');
  assert.equal(await evaluate('document.activeElement.matches(":focus-visible")'), true);
  await screenshot('reference-focus');
  console.log('PASS: 12 skills, 6 theme/viewport combinations, responsive columns, no horizontal overflow, search, empty results, keyboard project navigation and visible focus.');
  await send('Browser.close');
} finally {
  socket?.close();
  if (browser.exitCode === null) browser.kill();
  await new Promise(resolve => setTimeout(resolve, 300));
  try { rmSync(profile, { recursive: true, force: true }); } catch { /* Browser teardown may still hold files. */ }
}
