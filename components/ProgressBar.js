/**
 * Progress Bar Component
 *
 * Animated progress bars for statistics and metrics
 */
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProgressBar({ label, percentage, color = 'highlight', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-editorial-ink uppercase tracking-wider">{label}</span>
        <span className="text-sm font-bold text-editorial-secondary">{percentage}%</span>
      </div>
      <div className="h-2 bg-editorial-border overflow-hidden">
        <motion.div
          className={`h-full ${
            color === 'highlight' ? 'bg-gradient-to-r from-editorial-primary to-editorial-secondary' :
            color === 'accent' ? 'bg-gradient-to-r from-editorial-secondary to-editorial-accent' :
            'bg-editorial-secondary'
          }`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

