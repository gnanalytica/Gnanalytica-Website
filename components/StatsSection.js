/**
 * Stats Section Component
 *
 * Displays animated statistics with progress bars and counters
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProgressBar from './ProgressBar';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { label: 'Client Satisfaction', value: 98, color: 'highlight' },
  { label: 'Project Success Rate', value: 95, color: 'highlight' },
  { label: 'Cost Reduction', value: 85, color: 'accent' },
  { label: 'Efficiency Improvement', value: 92, color: 'highlight' },
];

const metrics = [
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Clients Served', value: 75, suffix: '+' },
  { label: 'Years Experience', value: 8, suffix: '+' },
  { label: 'AI Models Deployed', value: 200, suffix: '+' },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-editorial-paper border-t border-editorial-border"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-block">
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-editorial-muted border-b-2 border-editorial-ink pb-2">
              Our Impact
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-editorial-ink leading-tight mb-6">
            Measurable Results
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center border-2 border-editorial-border p-6 bg-editorial-white hover:border-editorial-secondary transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-editorial-primary to-editorial-secondary bg-clip-text text-transparent mb-2 font-serif">
                {isInView ? (
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                ) : (
                  `0${metric.suffix}`
                )}
              </div>
              <div className="text-sm text-editorial-muted uppercase tracking-wider">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <ProgressBar
              key={stat.label}
              label={stat.label}
              percentage={stat.value}
              color={stat.color}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

