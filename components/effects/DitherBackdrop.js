/**
 * DitherBackdrop — Paper Shaders `Dithering` as a full-bleed section backdrop.
 *
 * A retro Bayer-dithered field animating over a simplex/warp pattern — the
 * halftone-print texture that sells the neobrutalist look. WebGL only ever
 * renders on the client (ssr:false via the dynamic import in index.js).
 *
 * Perf guardrails: the canvas mounts only while the section is near the
 * viewport (zero GPU when scrolled past), renders at 1× pixel ratio and is
 * capped at ~1.5M pixels — invisible differences for a texture this coarse.
 */
import { useRef } from 'react';
import { Dithering } from '@paper-design/shaders-react';
import useNearViewport from './useNearViewport';

const MAX_PIXELS = 1_500_000;

export default function DitherBackdrop({
  colorBack = '#F7F1E5',
  colorFront = '#D9CDB4',
  shape = 'warp',
  speed = 0.35,
  size = 3,
  className = '',
}) {
  const ref = useRef(null);
  const near = useNearViewport(ref);

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {near && (
        <Dithering
          colorBack={colorBack}
          colorFront={colorFront}
          shape={shape}
          type="4x4"
          size={size}
          speed={speed}
          minPixelRatio={1}
          maxPixelCount={MAX_PIXELS}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
}
