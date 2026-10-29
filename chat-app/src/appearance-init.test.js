import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('./appearance-init.js', import.meta.url), 'utf8');
function setup({ stored = null, dark = false, blocked = false } = {}) {
  const root = { dataset: {}, style: {} };
  const events = new EventTarget();
  const media = new EventTarget(); media.matches = dark;
  const storage = new Map(stored === null ? [] : [['jayll-color-mode', stored]]);
  let themeColor;
  const window = { matchMedia: () => media, addEventListener: events.addEventListener.bind(events), dispatchEvent: events.dispatchEvent.bind(events) };
  runInNewContext(source, { window, Event, document: { documentElement: root, querySelector: () => ({ setAttribute: (_, value) => { themeColor = value; } }) }, localStorage: {
    getItem: key => { if (blocked) throw Error('Storage denied'); return storage.get(key) ?? null; },
    setItem: (key, value) => { if (blocked) throw Error('Storage denied'); storage.set(key, value); },
  } });
  return { root, media, window, storage, themeColor: () => themeColor,
    system: dark => { media.matches = dark; media.dispatchEvent(new Event('change')); },
    remote: value => { const event = new Event('storage'); event.key = 'jayll-color-mode'; event.newValue = value; events.dispatchEvent(event); },
  };
}

test('resolves system appearance before React mounts and sets native colors', () => {
  for (const dark of [false, true]) {
    const app = setup({ dark });
    assert.equal(app.root.dataset.colorMode, dark ? 'dark' : 'light');
    assert.equal(app.root.dataset.colorPreference, 'system');
    assert.equal(app.root.style.colorScheme, dark ? 'dark' : 'light');
    assert.equal(app.themeColor(), dark ? '#000000' : '#ffffff');
  }
});
test('saved explicit choice wins over system and remains stable on system changes', () => {
  const app = setup({ stored: 'light', dark: true });
  assert.equal(app.root.dataset.colorMode, 'light');
  app.system(false); app.system(true);
  assert.equal(app.root.dataset.colorMode, 'light');
});
test('system follows live changes and invalid stored preferences use system', () => {
  const app = setup({ stored: 'invalid' });
  app.system(true); assert.equal(app.root.dataset.colorMode, 'dark');
  app.system(false); assert.equal(app.root.dataset.colorMode, 'light');
});
test('a new choice persists and returning to system resolves the current preference', () => {
  const app = setup({ dark: true });
  app.window.PortfolioAppearance.setPreference('light');
  assert.equal(app.storage.get('jayll-color-mode'), 'light');
  app.window.PortfolioAppearance.setPreference('system');
  assert.equal(app.root.dataset.colorMode, 'dark');
});
test('storage denial keeps controls functional for the current session', () => {
  const app = setup({ blocked: true });
  app.window.PortfolioAppearance.setPreference('dark');
  assert.equal(app.root.dataset.colorMode, 'dark');
  assert.equal(app.window.PortfolioAppearance.getPreference(), 'dark');
});
test('cross-tab preference changes and removal synchronize appearance', () => {
  const app = setup({ dark: false });
  app.remote('dark'); assert.equal(app.root.dataset.colorMode, 'dark');
  app.remote(null); assert.equal(app.root.dataset.colorMode, 'light');
  assert.equal(app.window.PortfolioAppearance.getPreference(), 'system');
});
