/**
 * ThemeToggle — cycles the homepage theme Auto → Light → Dark.
 *
 * Sets data-theme on <html> and persists the choice in localStorage
 * ('gna-theme'). "Auto" removes the attribute so prefers-color-scheme
 * decides. A matching inline script in pages/index.js applies the saved
 * choice before first paint to avoid a theme flash.
 */
import { useEffect, useState } from 'react';

const MODES = ['auto', 'light', 'dark'];
const LABELS = { auto: 'Auto', light: 'Light', dark: 'Dark' };

export default function ThemeToggle({ className = '' }) {
  const [mode, setMode] = useState('auto');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('gna-theme');
      if (MODES.includes(saved)) setMode(saved);
    } catch (e) {
      /* storage unavailable — stay on auto */
    }
  }, []);

  const apply = (next) => {
    setMode(next);
    const root = document.documentElement;
    if (next === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('gna-theme', next);
    } catch (e) {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={() => apply(MODES[(MODES.indexOf(mode) + 1) % MODES.length])}
      aria-label={`Theme: ${LABELS[mode]}. Click to change.`}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold transition-colors ${className}`}
      style={{ borderColor: 'var(--gn-line)', color: 'var(--gn-muted)' }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      {LABELS[mode]}
    </button>
  );
}
