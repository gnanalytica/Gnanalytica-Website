/**
 * useNearViewport — true while the ref'd element is on/near the screen.
 *
 * Backs the WebGL surfaces: canvases mount only while (almost) visible and are
 * torn down once scrolled well past, so off-screen sections cost zero GPU.
 * The generous rootMargin means the canvas is already live before it scrolls
 * into view, avoiding a visible pop-in.
 */
import { useEffect, useState } from 'react';

export default function useNearViewport(ref, rootMargin = '300px') {
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([entry]) => setNear(entry.isIntersecting), { rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);

  return near;
}
