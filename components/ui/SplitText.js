/**
 * SplitText — ReactBits-style word reveal driven by GSAP.
 *
 * Splits `text` into words, wraps each in an overflow-hidden mask and slides
 * them up with a stagger. Runs on mount by default (hero) or when scrolled into
 * view with `onScroll`. Purely presentational — screen readers get the plain
 * string via aria-label.
 */
import { useRef } from 'react';
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from '../../lib/gsapClient';

export default function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.055,
  onScroll = false,
}) {
  const ref = useRef(null);

  useIsoLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.querySelectorAll('.split-word'),
        { yPercent: 110, rotate: 4 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 0.8,
          delay,
          stagger,
          ease: 'power4.out',
          ...(onScroll
            ? { scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true } }
            : {}),
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [delay, stagger, onScroll]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
          <span className="split-word inline-block will-change-transform">{word}</span>
          {i < text.split(' ').length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}
