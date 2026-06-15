/**
 * DarkBand — reusable dark accent section wrapper.
 *
 * Renders a deep-ink band with a subtle indigo→violet radial mesh glow and a
 * masked dot grid. Used for the hero backdrop and the closing contact CTA so the
 * otherwise-light editorial page picks up the Standup-style dark accents.
 */
export default function DarkBand({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden bg-night text-night-ink ${className}`}
    >
      {/* radial brand mesh */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 18% 0%, rgba(99,102,241,0.20) 0%, transparent 60%), radial-gradient(55% 50% at 85% 15%, rgba(168,85,247,0.16) 0%, transparent 60%), radial-gradient(40% 40% at 60% 100%, rgba(34,211,238,0.10) 0%, transparent 55%)',
        }}
      />
      {/* masked dot grid */}
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
