/**
 * Simple Bar Chart Component
 *
 * Animated bar chart for displaying statistics
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SimpleBarChart({ data, maxValue = 100 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-4">
      {data.map((item, index) => (
        <div key={item.label} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-editorial-ink uppercase tracking-wider">{item.label}</span>
            <span className="text-sm font-bold text-editorial-secondary">{item.value}%</span>
          </div>
          <div className="h-3 bg-editorial-border overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-editorial-primary to-editorial-secondary"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${(item.value / maxValue) * 100}%` } : { width: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

