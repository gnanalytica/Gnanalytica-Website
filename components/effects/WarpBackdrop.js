/**
 * WarpBackdrop — Paper Shaders `Warp` for the dark contact band.
 *
 * A slow marbled swirl of near-black tones with a faint accent thread, kept
 * subtle so the booking card stays the hero. Client-only (dynamic ssr:false).
 */
import { Warp } from '@paper-design/shaders-react';

export default function WarpBackdrop({
  colors = ['#121212', '#1C1B18', '#2A2822', '#4F46E5'],
  speed = 0.3,
  className = '',
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <Warp
        colors={colors}
        proportion={0.35}
        softness={0.9}
        distortion={0.2}
        swirl={0.8}
        swirlIterations={10}
        shape="checks"
        shapeScale={0.08}
        speed={speed}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
