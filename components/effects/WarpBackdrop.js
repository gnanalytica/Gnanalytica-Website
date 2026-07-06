/**
 * WarpBackdrop — Paper Shaders `Warp` for the dark contact band.
 *
 * A slow marbled swirl of near-black tones with a faint accent thread, kept
 * subtle so the booking card stays the hero. Client-only (dynamic ssr:false).
 *
 * Perf guardrails: mounts only while the band is near the viewport, renders at
 * 1× pixel ratio capped at ~1.5M pixels — imperceptible on a dark blur.
 */
import { useRef } from 'react';
import { Warp } from '@paper-design/shaders-react';
import useNearViewport from './useNearViewport';

const MAX_PIXELS = 1_500_000;

export default function WarpBackdrop({
  colors = ['#121212', '#1C1B18', '#2A2822', '#4F46E5'],
  speed = 0.3,
  className = '',
}) {
  const ref = useRef(null);
  const near = useNearViewport(ref);

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {near && (
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
          minPixelRatio={1}
          maxPixelCount={MAX_PIXELS}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
}
