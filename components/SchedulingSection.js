/**
 * Scheduling section component - Editorial Design
 *
 * This section provides the scheduling interface in a sophisticated
 * editorial layout matching the overall design aesthetic.
 */
import { motion } from 'framer-motion';
import EmbeddedGoogleCalendar from './EmbeddedGoogleCalendar';

export default function SchedulingSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <>
      <motion.section
        id="scheduling"
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-rose-100 via-pink-100 to-rose-50 border-t-4 border-rose-400"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Editorial Section Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12"
            variants={itemVariants}
          >
            <div className="mb-4 inline-block">
              <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-editorial-muted border-b-2 border-editorial-ink pb-2">
                Schedule Your Discovery Call
              </span>
            </div>
            <h2 id="scheduling-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-editorial-ink mb-4 leading-tight">
              Schedule Your Discovery Call
            </h2>
            <p className="text-base sm:text-lg text-editorial-muted max-w-2xl mx-auto leading-relaxed">
              Get a complimentary 30-minute AI strategy session with our experts.
            </p>
          </motion.div>

          <motion.div
            className="border-2 border-editorial-border bg-editorial-paper max-w-5xl mx-auto"
            variants={itemVariants}
            role="region"
            aria-labelledby="scheduling-heading"
          >
            <div className="p-4 sm:p-6 md:p-8">
              <div className="w-full overflow-x-auto" role="main" aria-label="Appointment booking form">
                <EmbeddedGoogleCalendar />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-editorial-muted border-t border-editorial-border pt-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  <span className="uppercase tracking-wider">Complimentary</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-editorial-ink"></div>
                  <span className="uppercase tracking-wider">No commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-editorial-muted"></div>
                  <span className="uppercase tracking-wider">Google Calendar integration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
