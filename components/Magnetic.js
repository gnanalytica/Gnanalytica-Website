/**
 * Magnetic — wraps an element so it drifts toward the cursor on hover.
 *
 * GSAP quickTo springs the transform, so it composes with any child (buttons,
 * links). Snaps back to rest when the pointer leaves; reduced-motion users get
 * a static element.
 */
import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/gsapClient';

export default function Magnetic({ children, strength = 0.4, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'elastic.out(1, 0.45)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'elastic.out(1, 0.45)' });

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      xTo((e.clientX - (rect.left + rect.width / 2)) * strength);
      yTo((e.clientY - (rect.top + rect.height / 2)) * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`inline-flex ${className}`}>
      {children}
    </div>
  );
}
