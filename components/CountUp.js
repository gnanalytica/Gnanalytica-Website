/**
 * CountUp — animates the numeric part of a stat value when it scrolls into view.
 *
 * Stat values are free-form strings ("30 Days", "3 States", "100%", "Minutes").
 * If a number is present it counts up from zero with anime.js, preserving any
 * prefix/suffix; otherwise the text renders as-is. Reduced-motion users see the
 * final value immediately.
 */
import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import { prefersReducedMotion } from '../lib/gsapClient';

const parse = (value) => {
  const m = String(value).match(/^(\D*)(\d[\d,]*\.?\d*)(.*)$/s);
  if (!m) return null;
  return { pre: m[1], num: parseFloat(m[2].replace(/,/g, '')), post: m[3], raw: m[2] };
};

export default function CountUp({ value, className = '' }) {
  const ref = useRef(null);
  const parsed = parse(value);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed || prefersReducedMotion()) return undefined;

    setDisplay(`${parsed.pre}0${parsed.post}`);
    const decimals = parsed.raw.includes('.') ? 1 : 0;
    let anim;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const counter = { n: 0 };
        anim = animate(counter, {
          n: parsed.num,
          duration: 1300,
          ease: 'outExpo',
          onUpdate: () => {
            const v = decimals ? counter.n.toFixed(decimals) : Math.round(counter.n).toLocaleString();
            setDisplay(`${parsed.pre}${v}${parsed.post}`);
          },
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (anim) anim.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
