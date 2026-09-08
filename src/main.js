import './style.css';
import { projects, prompts, resume } from './content.js';

const $ = selector => document.querySelector(selector);
const escape = text => String(text ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const dialog = $('#portfolio-dialog');
const panel = $('#panel-content');
let lab, nearby, exploring = false, loading, restoreFocus;
let reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
let quality = 'high';
let soundContext, oscillator, soundGain, soundOn = false;

function notify(message) {
  $('#toast').textContent = message;
  $('#toast').hidden = false;
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => { $('#toast').hidden = true; }, 3200);
}
function projectList(list = projects) {
  return `<div class="project-list">${list.map((project, index) => `<button class="project-row" data-open="${project.id}"><span class="project-index">0${index + 1}</span><span><small>${escape(project.category)}</small><strong>${escape(project.name)}</strong><p>${escape(project.description)}</p><span class="tag-line">${project.tags.map(escape).join(' / ')}</span></span><span class="project-arrow">↗</span></button>`).join('')}</div>`;
}
function projectDetail(project) {
  return `<p class="eyebrow">${escape(project.category)}</p><h2 id="panel-title">${escape(project.name)}</h2><div class="project-visual" aria-hidden="true"><div class="diagram-node">${project.id === 'calendar' ? '01<br>REQUEST' : '01<br>DOCUMENT'}</div><span class="diagram-link"></span><div class="diagram-node central-node">${project.id === 'calendar' ? 'AGENT<br>SYSTEM' : 'AI<br>PIPELINE'}</div><span class="diagram-link"></span><div class="diagram-node">${project.id === 'calendar' ? '02<br>CALENDAR' : '02<br>OUTPUT'}</div></div><p class="diagram-caption">${escape(project.motif)} · CONCEPTUAL OVERVIEW</p><p class="project-description">${escape(project.description)}</p><div class="tags">${project.tags.map(tag => `<span>${escape(tag)}</span>`).join('')}</div><a class="primary-button external-button" href="${escape(project.url)}" target="_blank" rel="noopener noreferrer">${escape(project.linkLabel)} <span>↗</span></a>`;
}
function profile() {
  return `<p class="eyebrow">THE PERSON BEHIND THE LAB</p><h2 id="panel-title">${escape(resume.basics.name)}</h2><p class="profile-label">${escape(resume.basics.label)}</p><p class="project-description">${escape(resume.basics.summary)}</p><div class="profile-links"><a class="primary-button" href="/resume/resume.pdf" download>Download résumé ↓</a><a class="text-button" href="mailto:${escape(resume.basics.email)}">Get in touch ↗</a></div><h3>Experience</h3>${resume.experience.map(job => `<article class="profile-entry"><small>${escape(job.startDate)} — ${escape(job.endDate)}</small><h4>${escape(job.position)} · ${escape(job.company)}</h4><p>${escape(job.summary)}</p></article>`).join('')}<h3>Toolkit</h3><div class="tags">${resume.skills.map(skill => `<span>${escape(skill)}</span>`).join('')}</div><h3>Education</h3>${resume.education.map(edu => `<article class="profile-entry"><h4>${escape(edu.institution)}</h4><p>${escape(edu.studyType)} · ${escape(edu.area)}<br>${escape(edu.startDate)} — ${escape(edu.endDate)}<br>${escape(edu.score)}</p></article>`).join('')}<h3>Certificates</h3><ul class="certificates">${resume.certificates.map(cert => `<li>${escape(cert)}</li>`).join('')}</ul><a class="text-button" href="${escape(resume.basics.url)}" target="_blank" rel="noopener noreferrer">GitHub profile from résumé ↗</a>`;
}
function gallery() {
  return `<p class="eyebrow">GENERATIVE GALLERY / ${prompts.length} EXPERIMENTS</p><h2 id="panel-title">A different<br>kind of imagination.</h2><p class="panel-intro">Visual explorations in generative AI. Find an image, copy its prompt, make it your own.</p><label class="search-label" for="prompt-search">Search experiments</label><input id="prompt-search" class="search-input" type="search" placeholder="Search by title or collection…" autocomplete="off"><div class="gallery-filters" aria-label="Filter collection"><button data-filter="all" aria-pressed="true">All experiments</button><button data-filter="Avatar" aria-pressed="false">Avatar</button><button data-filter="Couples" aria-pressed="false">Couples</button></div><p id="gallery-count" class="eyebrow" role="status"></p><div id="gallery-grid" class="gallery-grid"></div><a class="text-button" href="/prompts/">Open full prompt collection ↗</a>`;
}
let collection = 'all';
function filterGallery() {
  const query = $('#prompt-search').value.toLowerCase().trim();
  const list = prompts.filter(p => (collection === 'all' || p.collection === collection) && `${p.title} ${p.collection} ${p.text}`.toLowerCase().includes(query));
  $('#gallery-count').textContent = `${list.length} experiment${list.length === 1 ? '' : 's'}`;
  $('#gallery-grid').innerHTML = list.length ? list.map(p => `<article class="gallery-item"><img src="/prompts/${escape(p.imageUrl)}" alt="${escape(p.title)}" loading="lazy" width="400" height="480"><div><small>${p.collection}</small><h3>${escape(p.title)}</h3><button class="copy-button" data-copy="${escape(p.id)}" ${!p.text.trim() ? 'disabled' : ''}>${!p.text.trim() ? 'Prompt unavailable' : 'Copy prompt ↗'}</button></div></article>`).join('') : '<p class="empty-state">No experiments found. Try another title or collection.</p>';
}
function settings() {
  return `<p class="eyebrow">MAKE YOURSELF AT HOME</p><h2 id="panel-title">Your experience.</h2><label class="setting-row"><span><strong>Reduce motion</strong><small>Quiet the ambient animations.</small></span><input id="reduce-motion" type="checkbox" ${reduced ? 'checked' : ''}></label><label class="setting-row"><span><strong>Graphics quality</strong><small>Use light rendering on slower devices.</small></span><select id="quality"><option value="high" ${quality === 'high' ? 'selected' : ''}>High</option><option value="low" ${quality === 'low' ? 'selected' : ''}>Light</option></select></label><p class="panel-intro">Move with WASD or arrow keys. Drag the scene to look around. Hold Shift to run. Press E near a workstation to inspect it.</p><button id="reset-position" class="text-button">Return to reception →</button>`;
}
function showPanel(id) {
  const project = projects.find(item => item.id === id);
  if (!['projects', 'documents', 'core', 'gallery', 'profile', 'terminal', 'settings'].includes(id) && !project) return;
  lab?.pause(true);
  $('#interact').hidden = true;
  if (!dialog.open) restoreFocus = document.activeElement;
  $('#panel-back').hidden = !project;
  $('#panel-section').textContent = id === 'settings' ? 'LAB SETTINGS' : 'RESEARCH ARCHIVE';
  dialog.classList.toggle('gallery-panel', id === 'gallery');
  if (project) panel.innerHTML = projectDetail(project);
  else if (id === 'profile') panel.innerHTML = profile();
  else if (id === 'gallery') { collection = 'all'; panel.innerHTML = gallery(); filterGallery(); }
  else if (id === 'settings') panel.innerHTML = settings();
  else if (id === 'terminal') panel.innerHTML = `<p class="eyebrow">A PREVIOUS EXPERIMENT</p><h2 id="panel-title">The legacy terminal.</h2><p class="project-description">Before the laboratory, there was a command line. Explore the original portfolio, change its theme, and discover a few hidden commands.</p><a href="/legacy/" class="primary-button">Open terminal ↗</a>`;
  else panel.innerHTML = `<p class="eyebrow">${id === 'documents' ? 'DOCUMENT INTELLIGENCE' : 'SELECTED ENGINEERING WORK'}</p><h2 id="panel-title">${id === 'documents' ? 'From documents<br>to understanding.' : 'Systems built<br>with purpose.'}</h2><p class="panel-intro">A collection of applied AI work. Explore the thinking behind each system.</p>${projectList(id === 'documents' ? projects.filter(p => p.id !== 'calendar') : projects)}`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  $('#close-panel').focus();
}
function route() {
  const id = location.hash.slice(1);
  if (id && id !== 'main') showPanel(id);
  else if (dialog.open) dialog.close();
}
function openPanel(id) {
  if (location.hash === `#${id}`) showPanel(id);
  else location.hash = id;
}
function closePanel() {
  history.replaceState(null, '', location.pathname + location.search);
  dialog.close();
}
dialog.addEventListener('close', () => { lab?.pause(!exploring); updateNearby(nearby); restoreFocus?.focus(); });
dialog.addEventListener('cancel', event => { event.preventDefault(); closePanel(); });
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closePanel();
  }
});
$('#close-panel').addEventListener('click', closePanel);
$('#panel-back').addEventListener('click', () => openPanel('projects'));
$('#settings-button').addEventListener('click', () => openPanel('settings'));
window.addEventListener('hashchange', route);
document.addEventListener('click', async event => {
  const open = event.target.closest('[data-open]');
  if (open) openPanel(open.dataset.open);
  const filter = event.target.closest('[data-filter]');
  if (filter) {
    collection = filter.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button === filter)));
    filterGallery();
  }
  const copy = event.target.closest('[data-copy]');
  if (copy && !copy.disabled) {
    const item = prompts.find(p => p.id === copy.dataset.copy);
    copy.disabled = true;
    copy.textContent = 'Loading prompt…';
    try {
      const text = item.text;
      if (!text.trim()) throw new Error('This prompt is empty.');
      await navigator.clipboard.writeText(text);
      notify('Prompt copied. Ready to create.');
    } catch (error) { notify(error.message || 'Could not copy. Open the full collection to try again.'); }
    finally { copy.disabled = false; copy.textContent = 'Copy prompt ↗'; }
  }
  if (event.target.closest('#reset-position')) { lab?.reset(); closePanel(); }
});
document.addEventListener('input', event => { if (event.target.id === 'prompt-search') filterGallery(); });
document.addEventListener('change', event => {
  if (event.target.id === 'reduce-motion') { reduced = event.target.checked; lab?.setReducedMotion(reduced); document.body.classList.toggle('reduced-motion', reduced); }
  if (event.target.id === 'quality') { quality = event.target.value; lab?.setQuality(quality); }
});
function updateNearby(station) {
  nearby = station;
  $('#interact').hidden = !station || !exploring || dialog.open;
  if (station) $('#interact-label').textContent = station.label;
}
$('#interact').addEventListener('click', () => { if (nearby) openPanel(nearby.id); });
document.addEventListener('keydown', event => {
  if (event.code === 'KeyE' && exploring && !dialog.open && nearby && !event.repeat) openPanel(nearby.id);
});
async function loadLab() {
  if (lab) return lab;
  if (loading) return loading;
  loading = (async () => {
    try {
      const { createLab } = await import('./lab/world.js');
      lab = await createLab({ canvas: $('#lab-canvas'), onNearby: updateNearby, onZone: zone => { $('#current-zone').textContent = zone; }, onReady: () => {} });
      lab.setReducedMotion(reduced);
      lab.setQuality(quality);
      $('#load-status').innerHTML = '<span class="status-dot"></span> Lab ready <span class="load-divider">/</span> WASD + mouse to explore';
      document.body.classList.add('lab-ready');
      return lab;
    } catch (error) {
      console.error('Laboratory initialization failed:', error);
      $('#load-status').textContent = '3D could not start. Your projects and résumé are still available.';
      loading = null;
      return null;
    }
  })();
  return loading;
}
$('#enter-lab').addEventListener('click', async () => {
  const button = $('#enter-lab');
  button.disabled = true;
  button.textContent = 'Entering…';
  const world = await loadLab();
  button.disabled = false;
  button.innerHTML = 'Enter the lab <span>↗</span>';
  if (!world) return;
  exploring = true;
  document.body.classList.add('exploring');
  $('#welcome').hidden = true;
  $('#scene-caption').hidden = true;
  $('#explore-hud').hidden = false;
  $('#controls-hint').hidden = false;
  world.enter();
  world.pause(dialog.open);
});
function leaveLab() {
  exploring = false;
  lab?.returnToEntrance();
  document.body.classList.remove('exploring');
  $('#welcome').hidden = false;
  $('#scene-caption').hidden = false;
  $('#explore-hud').hidden = true;
  $('#controls-hint').hidden = true;
  $('#interact').hidden = true;
  $('#enter-lab').focus();
}
$('#exit-lab').addEventListener('click', leaveLab);
$('.brand').addEventListener('click', () => { if (exploring) leaveLab(); });
$('#sound-button').addEventListener('click', async () => {
  try {
    if (!soundContext) {
      soundContext = new AudioContext();
      oscillator = soundContext.createOscillator();
      soundGain = soundContext.createGain();
      oscillator.frequency.value = 55;
      soundGain.gain.value = 0;
      oscillator.connect(soundGain).connect(soundContext.destination);
      oscillator.start();
    }
    await soundContext.resume();
    soundOn = !soundOn;
    soundGain.gain.setTargetAtTime(soundOn ? 0.018 : 0, soundContext.currentTime, 0.3);
    $('#sound-button').textContent = soundOn ? '◉ Sound on' : '◌ Sound off';
    $('#sound-button').setAttribute('aria-pressed', String(soundOn));
  } catch { notify('Audio is unavailable in this browser.'); }
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) soundContext?.suspend();
  else if (soundOn) soundContext?.resume().catch(() => {});
});
$('#lab-canvas').addEventListener('webglcontextlost', event => {
  event.preventDefault();
  lab?.pause(true);
  $('#load-status').textContent = '3D paused. Reload to restart, or browse the projects.';
  notify('The 3D view was interrupted. Projects and résumé remain available.');
});
window.addEventListener('pagehide', () => { lab?.pause(true); soundContext?.suspend(); });
window.addEventListener('pageshow', () => { lab?.pause(!exploring || dialog.open); });
document.body.classList.toggle('reduced-motion', reduced);
route();
const desktop = matchMedia('(min-width: 761px) and (pointer: fine)');
desktop.addEventListener('change', () => {
  if (desktop.matches) loadLab();
  else { if (exploring) leaveLab(); lab?.pause(true); }
});
if (desktop.matches) loadLab();
else $('#load-status').textContent = 'All projects, prompts and your next idea. Right here.';
