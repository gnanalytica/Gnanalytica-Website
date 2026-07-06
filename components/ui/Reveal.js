/**
 * Reveal — GSAP ScrollTrigger fade/slide-up wrapper for section content.
 *
 * Children are hidden with autoAlpha before first paint (useLayoutEffect) and
 * revealed once when the element enters the viewport. `delay` staggers siblings;
 * `y` controls travel distance. Reduced-motion users see content immediately.
 */
import { useRef } from 'react';
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from '../../lib/gsapClient';

export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  y = 28,
  ...rest
}) {
  const ref = useRef(null);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [delay, y]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
