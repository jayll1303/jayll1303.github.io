const REVEAL_SELECTOR = [
  '.welcome-glyph',
  '.welcome h1',
  '.welcome-sub',
  '.welcome .suggestion',
  '.welcome-footnote',
  '.message-pair .user-message',
  '.message-pair .assistant-head',
  '.assistant-message > .eyebrow',
  '.assistant-message > h2',
  '.project-title-line',
  '.project-links',
  '.assistant-message > .lead',
  '.answer-section',
  '.answer-panel',
  '.outcome-panel',
  '.project-card',
  '.timeline-item',
  '.experience-timeline__entry',
  '.catalog-intro',
  '.catalog-section h2',
  '.catalog-row',
  '.images-page-header',
  '.images-tile',
  '.achievements-library-heading',
  '.achievements-card',
].join(', ');

const STAGGER_SELECTOR = '.suggestion, .project-card, .timeline-item, .experience-timeline__entry, .catalog-row, .images-tile, .achievements-card';

/** Adds one-time viewport reveals to React content, including later route renders. */
export function initPortfolioMotion(root = document.getElementById('root')) {
  if (!root || !('IntersectionObserver' in window) || !('MutationObserver' in window)) return () => {};

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches) return () => {};

  const tracked = new Set();
  const reveal = element => {
    if (!tracked.delete(element)) return;
    observer.unobserve(element);
    element.classList.remove('pm-pending');
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) reveal(entry.target);
  }, { threshold: 0.08, rootMargin: '0px 0px 24px 0px' });

  const watch = element => {
    if (reducedMotion.matches || element.classList.contains('pm-reveal')) return;
    if (element.matches(STAGGER_SELECTOR)) {
      let position = 0;
      let sibling = element.previousElementSibling;
      while (sibling && position < 6) {
        if (sibling.matches(STAGGER_SELECTOR)) position += 1;
        sibling = sibling.previousElementSibling;
      }
      element.style.setProperty('--pm-delay', `${position * 60}ms`);
    }
    element.classList.add('pm-reveal', 'pm-pending');
    tracked.add(element);
    observer.observe(element);
  };
  const scan = node => {
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.matches(REVEAL_SELECTOR)) watch(node);
    node.querySelectorAll(REVEAL_SELECTOR).forEach(watch);
  };

  scan(root);
  const mutations = new MutationObserver(records => {
    for (const record of records) for (const node of record.addedNodes) scan(node);
  });
  mutations.observe(root, { childList: true, subtree: true });

  const revealFocused = event => {
    const target = event.target.closest?.('.pm-pending');
    if (target) reveal(target);
  };
  root.addEventListener('focusin', revealFocused);
  const onMotionChange = () => {
    if (reducedMotion.matches) for (const element of [...tracked]) reveal(element);
  };
  reducedMotion.addEventListener('change', onMotionChange);

  return () => {
    mutations.disconnect();
    observer.disconnect();
    root.removeEventListener('focusin', revealFocused);
    reducedMotion.removeEventListener('change', onMotionChange);
    for (const element of tracked) element.classList.remove('pm-pending');
    tracked.clear();
  };
}
