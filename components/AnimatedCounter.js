/**
 * Animated Counter Component
 *
 * Counts up to a target number with smooth animation
 */
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  className = ''
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

