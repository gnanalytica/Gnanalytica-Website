/**
 * DarkBand — reusable dark accent section wrapper with a living mesh backdrop.
 *
 * Two slowly-drifting radial mesh layers (indigo / violet / cyan) plus a masked
 * dot grid give the dark bands depth and motion. All animation is CSS so it
 * stays cheap and is silenced by the global reduced-motion rule.
 */
export default function DarkBand({ id, className = '', children }) {
  return (
    <section id={id} className={`relative overflow-hidden bg-night text-night-ink ${className}`}>
      {/* drifting mesh layer A */}
      <div
        className="pointer-events-none absolute inset-0 animate-mesh-drift"
        style={{
          background:
            'radial-gradient(50% 50% at 18% 0%, rgba(99,102,241,0.28) 0%, transparent 60%), radial-gradient(45% 45% at 85% 12%, rgba(168,85,247,0.22) 0%, transparent 60%)',
        }}
      />
      {/* drifting mesh layer B (counter-motion) */}
      <div
        className="pointer-events-none absolute inset-0 animate-mesh-drift-slow"
        style={{
          background:
            'radial-gradient(40% 40% at 60% 100%, rgba(34,211,238,0.16) 0%, transparent 55%), radial-gradient(35% 35% at 8% 85%, rgba(129,140,248,0.16) 0%, transparent 60%)',
        }}
      />
      {/* glow breathing veil */}
      <div
        className="pointer-events-none absolute inset-0 animate-glow-pulse"
        style={{ background: 'radial-gradient(60% 50% at 50% 30%, rgba(99,102,241,0.10) 0%, transparent 70%)' }}
      />
      {/* masked dot grid */}
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
