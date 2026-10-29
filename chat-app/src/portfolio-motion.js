const SELECTOR = [
  '.welcome-glyph', '.studio-heading-part', '.welcome .suggestion', '.welcome-footnote',
  '.message-pair .user-message', '.message-pair .assistant-head',
  '.assistant-message > .eyebrow', '.assistant-message > h2', '.project-title-line',
  '.project-links', '.assistant-message > .lead', '.answer-section', '.answer-panel',
  '.outcome-panel', '.project-card', '.timeline-item', '.experience-timeline__entry',
  '.catalog-intro', '.catalog-section h2', '.catalog-row', '.images-page-header',
  '.images-tile', '.achievements-library-heading', '.achievements-card',
].join(', ');
const STAGGER = '.studio-heading-part, .suggestion, .catalog-row, .images-tile, .experience-timeline__entry';
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/** Visible base styles keep the portfolio readable if animation cannot run. */
export function initPortfolioMotion(root = document.getElementById('root')) {
  if (!root || !('IntersectionObserver' in window)) return () => {};
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const seen = new WeakSet();
  const pending = new Set();
  const running = new Map();
  let frame = 0;

  function play(element, keyframes, options = {}) {
    if (reduced.matches || document.hidden || !element.animate) return;
    running.get(element)?.cancel();
    const animation = element.animate(keyframes, { duration: 700, easing: EASE, ...options });
    running.set(element, animation);
    const clear = () => { if (running.get(element) === animation) running.delete(element); };
    animation.onfinish = clear;
    animation.oncancel = clear;
  }

  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      pending.delete(target);
      observer.unobserve(target);
      let position = 0;
      if (target.matches(STAGGER)) {
        let sibling = target.previousElementSibling;
        while (sibling && position < 6) {
          if (sibling.matches(STAGGER)) position++;
          sibling = sibling.previousElementSibling;
        }
      }
      const transform = target.matches('.welcome-glyph') ? 'rotate(-60deg) scale(.65)'
        : target.matches('.images-tile') ? 'scale(.94)'
        : target.matches('.experience-timeline__entry') ? 'translateX(24px)'
        : 'translateY(32px)';
      play(target, [{ opacity: 0, transform }, { opacity: 1, transform: 'none' }],
        { delay: position * 60, fill: 'backwards' });
      if (target.matches('.experience-timeline__entry')) {
        target.classList.add('pm-arrived');
        const line = target.querySelector('.timeline-segment');
        if (line) play(line, [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }], { duration: 800 });
      }
    }
  }, { threshold: 0.08 });

  function scan(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const elements = [...(node.matches(SELECTOR) ? [node] : []), ...node.querySelectorAll(SELECTOR)];
    for (const element of elements) {
      if (seen.has(element)) continue;
      seen.add(element);
      pending.add(element);
      observer.observe(element);
    }
  }

  // Scroll containers in this app are nested. Capture their scroll events and
  // coalesce measurements into one frame, without re-rendering React.
  function updateWords() {
    frame = 0;
    for (const block of root.querySelectorAll('[data-word-reveal]')) {
      const container = block.closest('.conversation, .catalog-scroll');
      const bounds = container?.getBoundingClientRect();
      const trigger = Math.min(innerHeight, bounds?.bottom ?? innerHeight) * 0.82;
      const words = [...block.querySelectorAll('.studio-word')];
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (reduced.matches || word.getBoundingClientRect().top <= trigger) {
          if (!word.classList.contains('is-lit')) {
            word.classList.add('is-lit');
            play(word, [{ opacity: 0.3 }, { opacity: 1 }], { duration: 600, delay: i * 45, fill: 'backwards' });
          }
        }
      }
    }
  }
  const scheduleWords = () => { if (!frame) frame = requestAnimationFrame(updateWords); };
  scan(root);
  scheduleWords();
  const mutations = new MutationObserver(records => {
    for (const record of records) for (const node of record.addedNodes) scan(node);
    for (const element of pending) if (!root.contains(element)) { observer.unobserve(element); pending.delete(element); }
    for (const [element, animation] of running) if (!root.contains(element)) { animation.cancel(); running.delete(element); }
    scheduleWords();
  });
  mutations.observe(root, { childList: true, subtree: true });
  function finishMotion() {
    if (!reduced.matches && !document.hidden) return;
    for (const animation of running.values()) animation.cancel();
    running.clear();
    root.querySelectorAll('.studio-word').forEach(word => word.classList.add('is-lit'));
  }
  function revealFocused(event) {
    const element = event.target.closest?.(SELECTOR);
    if (element) running.get(element)?.cancel();
  }
  root.addEventListener('scroll', scheduleWords, true);
  root.addEventListener('focusin', revealFocused);
  window.addEventListener('resize', scheduleWords);
  reduced.addEventListener('change', finishMotion);
  document.addEventListener('visibilitychange', finishMotion);
  return () => {
    observer.disconnect(); mutations.disconnect(); cancelAnimationFrame(frame);
    for (const animation of running.values()) animation.cancel();
    root.removeEventListener('scroll', scheduleWords, true);
    root.removeEventListener('focusin', revealFocused);
    window.removeEventListener('resize', scheduleWords);
    reduced.removeEventListener('change', finishMotion);
    document.removeEventListener('visibilitychange', finishMotion);
  };
}

/** Keep native dialog focus restoration and Escape behavior after its exit. */
export function closeMotionDialog(dialog) {
  if (!dialog?.open || dialog.dataset.closing) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches || !dialog.animate) { dialog.close(); return; }
  dialog.dataset.closing = 'true';
  const animation = dialog.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(12px) scale(.98)' }], { duration: 200, easing: EASE });
  const finish = () => {
    reduced.removeEventListener('change', finishReducedMotion);
    delete dialog.dataset.closing;
    if (dialog.open) dialog.close();
  };
  const finishReducedMotion = () => { if (reduced.matches) animation.cancel(); };
  reduced.addEventListener('change', finishReducedMotion);
  animation.onfinish = finish;
  animation.oncancel = finish;
}
