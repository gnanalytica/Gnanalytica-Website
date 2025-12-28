/**
 * Modern Scheduling Section - Clean Calendar Integration
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import EmbeddedGoogleCalendar from './EmbeddedGoogleCalendar';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default function ModernSchedulingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="scheduling"
      className="py-12 sm:py-16 md:py-20 bg-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border border-gray-200/60 shadow-premium mb-8">
            <CalendarIcon className="w-4 h-4 text-editorial-primary" />
            <span className="text-xs font-semibold text-editorial-charcoal tracking-luxury uppercase">Schedule Your Call</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-editorial-ink leading-[1.1] mb-8 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Schedule Your <span className="bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary bg-clip-text text-transparent">Discovery Call</span>
          </h2>
          <p className="text-lg sm:text-xl text-editorial-charcoal max-w-2xl mx-auto font-light tracking-wide leading-relaxed mb-8">
            Get a complimentary 30-minute AI strategy session with our experts.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { text: 'Complimentary' },
              { text: 'No commitment' },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border border-gray-200/60 shadow-premium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <span className="text-sm font-medium text-editorial-charcoal">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Calendar Container */}
        <motion.div
          className="bg-white/90 backdrop-blur-md rounded-lg p-6 lg:p-8 border border-gray-200/60 shadow-premium-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <EmbeddedGoogleCalendar />
        </motion.div>
      </div>
    </motion.section>
  );
}

