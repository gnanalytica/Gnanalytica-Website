/**
 * DitherBackdrop — Paper Shaders `Dithering` as a full-bleed section backdrop.
 *
 * A retro Bayer-dithered field animating over a simplex/warp pattern — the
 * halftone-print texture that sells the neobrutalist look. WebGL only ever
 * renders on the client (ssr:false via the dynamic import in index.js), and the
 * canvas sits behind content with pointer-events disabled.
 */
import { Dithering } from '@paper-design/shaders-react';

export default function DitherBackdrop({
  colorBack = '#F7F1E5',
  colorFront = '#D9CDB4',
  shape = 'warp',
  speed = 0.35,
  size = 3,
  className = '',
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <Dithering
        colorBack={colorBack}
        colorFront={colorFront}
        shape={shape}
        type="4x4"
        size={size}
        speed={speed}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
