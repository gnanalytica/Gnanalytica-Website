/**
 * CountUp — animates the numeric part of a stat value when it scrolls into view.
 *
 * Stat values are free-form strings ("30 Days", "3 States", "100%", "Minutes").
 * If a number is present it counts up from zero, preserving any prefix/suffix;
 * otherwise the text renders as-is. Reduced-motion users see the final value.
 */
import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

const parse = (value) => {
  const m = String(value).match(/^(\D*)(\d[\d,]*\.?\d*)(.*)$/s);
  if (!m) return null;
  return { pre: m[1], num: parseFloat(m[2].replace(/,/g, '')), post: m[3], raw: m[2] };
};

export default function CountUp({ value, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const parsed = parse(value);
  const [display, setDisplay] = useState(parsed ? `${parsed.pre}0${parsed.post}` : value);

  useEffect(() => {
    if (!parsed || !inView) return;
    const decimals = parsed.raw.includes('.') ? 1 : 0;
    const controls = animate(0, parsed.num, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const n = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString();
        setDisplay(`${parsed.pre}${n}${parsed.post}`);
      },
    });
    return () => controls.stop();
  }, [inView, parsed, value]);

  return (
    <span ref={ref} className={className}>
      {parsed ? display : value}
    </span>
  );
}
