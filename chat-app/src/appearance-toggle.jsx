import React, { useRef, useSyncExternalStore } from 'react';

const subscribe = listener => {
  window.addEventListener('portfolio:appearance', listener);
  return () => window.removeEventListener('portfolio:appearance', listener);
};
const snapshot = () => window.PortfolioAppearance?.getPreference() || 'system';
const modes = ['light', 'dark', 'system'];

function AppearanceIcon({ mode }) {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {mode === 'light' ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></> : mode === 'dark' ? <path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z"/> : <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/></>}
  </svg>;
}

export default function AppearanceToggle() {
  const preference = useSyncExternalStore(subscribe, snapshot);
  const transition = useRef(null);
  const requested = useRef(preference);
  if (!transition.current) requested.current = preference;

  function choose(mode) {
    if (mode === requested.current) return;
    requested.current = mode;
    const apply = () => window.PortfolioAppearance?.setPreference(mode);
    transition.current?.skipTransition();
    if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const current = document.startViewTransition(apply);
      transition.current = current;
      // Superseded snapshots reject ready; the preference update still runs.
      current.ready.catch(() => {});
      const finish = () => {
        if (transition.current !== current) return;
        transition.current = null;
        requested.current = snapshot();
      };
      current.finished.then(finish, finish);
    } else apply();
  }
  return <div className="appearance-control">
    <span className="appearance-label" id="appearance-label">Appearance</span>
    <div className="appearance-options" role="group" aria-labelledby="appearance-label" style={{ '--appearance-index': modes.indexOf(preference) }}>
      <span className="appearance-selection" aria-hidden="true"/>
      {modes.map(mode => <button type="button" key={mode} aria-pressed={preference === mode} aria-label={`${mode[0].toUpperCase() + mode.slice(1)} appearance`} onClick={() => choose(mode)}>
        <AppearanceIcon mode={mode}/><span>{mode[0].toUpperCase() + mode.slice(1)}</span>
      </button>)}
    </div>
  </div>;
}
