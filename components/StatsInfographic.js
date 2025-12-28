/**
 * Stats Infographic Component
 *
 * Beautiful animated statistics with visual charts and graphs
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LightBulbIcon, RocketLaunchIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/outline';

const insights = [
  {
    title: 'AI Strategy That Works',
    description: 'We don\'t just implement AI—we build sustainable systems that evolve with your business needs and deliver measurable ROI.',
    Icon: LightBulbIcon,
    color: 'from-emerald-500 to-teal-500',
    gradient: 'bg-gradient-to-br from-emerald-500 to-teal-500'
  },
  {
    title: 'From Concept to Production',
    description: 'Our end-to-end approach ensures your AI solutions are production-ready, scalable, and maintainable from day one.',
    Icon: RocketLaunchIcon,
    color: 'from-amber-500 to-orange-500',
    gradient: 'bg-gradient-to-br from-amber-500 to-orange-500'
  },
  {
    title: 'Business-First Approach',
    description: 'Every AI solution starts with understanding your business goals, not technology for technology\'s sake.',
    Icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-500',
    gradient: 'bg-gradient-to-br from-green-500 to-emerald-500'
  },
  {
    title: 'Future-Proof Solutions',
    description: 'We design AI architectures that adapt to new technologies, ensuring your investment remains valuable for years to come.',
    Icon: SparklesIcon,
    color: 'from-cyan-500 to-teal-500',
    gradient: 'bg-gradient-to-br from-cyan-500 to-teal-500'
  },
];


export default function StatsInfographic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="stats"
      className="py-20 bg-transparent relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-editorial-ink leading-[1.1] mb-8 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Choose Us
          </h2>
          <p className="text-lg sm:text-xl text-editorial-charcoal max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Insights into what makes our approach different and how we deliver lasting value
          </p>
        </motion.div>


        {/* Insights Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              className="bg-white/90 backdrop-blur-md rounded-lg p-8 border border-gray-200/60 shadow-premium hover:shadow-premium-xl transition-all duration-500 group hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br from-editorial-primary via-editorial-secondary to-editorial-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-premium group-hover:scale-110 transition-transform duration-500`}>
                  <insight.Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-editorial-ink mb-4 leading-tight tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {insight.title}
                  </h3>
                  <p className="text-base text-editorial-charcoal leading-relaxed font-light tracking-wide">
                    {insight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

