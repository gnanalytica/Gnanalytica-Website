/**
 * BrandLogo — the Gnanalytica infinity-and-arrow mark as two masked layers.
 *
 * The navy loop and the red arrow are separate alpha masks recolored via the
 * --gn-logo-ink / --gn-logo-red theme tokens, so the mark stays legible in
 * both light and dark themes (loop renders cream on dark backgrounds). Pass
 * `onDark` to force the dark-surface coloring regardless of theme (footer).
 */
export default function BrandLogo({ className = 'h-7 w-[52px]', onDark = false }) {
  const forced = onDark ? { ink: '#f2efe6', red: '#e8554e' } : null;
  return (
    <span className={`gn-logo ${className}`} aria-hidden="true">
      <i className="gn-logo-ink" style={forced ? { background: forced.ink } : undefined} />
      <i className="gn-logo-red" style={forced ? { background: forced.red } : undefined} />
    </span>
  );
}
