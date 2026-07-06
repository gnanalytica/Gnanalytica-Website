/**
 * PopIn — anime.js elastic sticker pop for badges, starbursts and chips.
 *
 * Scales the element from 0 with a springy overshoot (and optional rotation)
 * the first time it enters the viewport — the "slapped-on sticker" moment.
 */
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { prefersReducedMotion } from '../../lib/gsapClient';

export default function PopIn({
  children,
  className = '',
  delay = 0,
  rotate = 0,
  as: Tag = 'div',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;

    el.style.transform = 'scale(0)';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        animate(el, {
          scale: [0, 1],
          rotate: [rotate - 24, rotate],
          duration: 700,
          delay,
          ease: 'outElastic(1, .6)',
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, rotate]);

  return (
    <Tag ref={ref} className={className} style={{ rotate: `${rotate}deg` }}>
      {children}
    </Tag>
  );
}
