/* Resolve appearance before CSS and React paint; storage is optional. */
(() => {
  const key = 'jayll-color-mode';
  const valid = value => ['dark', 'light', 'system'].includes(value) ? value : 'system';
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = 'system';
  try { preference = valid(localStorage.getItem(key)); } catch { /* Use system without storage. */ }
  function apply() {
    const mode = preference === 'system' ? media.matches ? 'dark' : 'light' : preference;
    const root = document.documentElement;
    root.dataset.colorPreference = preference;
    root.dataset.colorMode = mode;
    root.style.colorScheme = mode;
    root.style.backgroundColor = mode === 'dark' ? '#000000' : '#ffffff';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', mode === 'dark' ? '#000000' : '#ffffff');
    window.dispatchEvent(new Event('portfolio:appearance'));
  }
  window.PortfolioAppearance = Object.freeze({
    getPreference: () => preference,
    setPreference(value) {
      preference = valid(value);
      try { localStorage.setItem(key, preference); } catch { /* Keep the session choice. */ }
      apply();
    },
  });
  media.addEventListener('change', () => { if (preference === 'system') apply(); });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      preference = valid(event.newValue);
      apply();
    }
  });
  apply();
})();
