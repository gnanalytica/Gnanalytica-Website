/**
 * Enhanced Hero Section with floating elements, scroll effects, and animations
 */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FloatingElements from './FloatingElements';
import Chip from './Chip';

export default function EnhancedHeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
  };

  const chips = ['AI Consulting', 'Enterprise Solutions', 'Cost-Effective', 'Netherlands Based'];

  return (
    <div ref={ref} className="relative isolate px-4 pt-20 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none" />
      <FloatingElements />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 border-2 border-editorial-secondary/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 border-2 border-editorial-accent/20 rounded-full"
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="mx-auto max-w-7xl py-16 sm:py-20 md:py-24 lg:py-32 relative z-10"
      >
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Editorial Label */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-editorial-muted border-b-2 border-editorial-ink pb-2">
              The Intelligence Briefing
            </span>
          </motion.div>

          {/* Cover Story Headline - Left Aligned, Massive Serif */}
          <motion.h1
            variants={headlineVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-editorial-ink leading-[1.1] tracking-tight mb-8"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Make Your Business{' '}
            </motion.span>
            <motion.span
              className="text-editorial-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              AI-Ready
            </motion.span>
          </motion.h1>

          {/* Chips */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-12"
          >
            {chips.map((chip, index) => (
              <Chip
                key={chip}
                label={chip}
                variant={index === 0 ? 'highlight' : 'outline'}
                size="md"
              />
            ))}
          </motion.div>

          {/* Subheadline - Editorial Style */}
          <motion.div
            variants={itemVariants}
            className="mb-12 max-w-2xl"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-editorial-muted leading-relaxed font-light">
              AI transformation made simple, affordable, and personal for businesses of every size.
            </p>
          </motion.div>

          {/* Gnanalytica Name Explanation - Editorial Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-12 inline-flex items-center gap-3 px-4 py-2 border-2 border-editorial-ink bg-editorial-white hover:border-editorial-secondary transition-colors duration-300"
          >
            <span className="text-sm font-bold text-editorial-ink uppercase tracking-wider">Gnana</span>
            <span className="text-editorial-muted">(Sanskrit: wisdom)</span>
            <span className="text-editorial-muted">+</span>
            <span className="text-sm font-bold text-editorial-ink uppercase tracking-wider">Analytics</span>
            <span className="text-editorial-muted">=</span>
            <span className="text-sm font-bold text-editorial-secondary uppercase tracking-wider">Wisdom-Driven AI</span>
          </motion.div>

          {/* Main Article Text - Narrow Column */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mb-12"
          >
            <div className="border-l-4 border-gradient-to-b from-blue-500 to-cyan-500 pl-6" style={{ borderLeftColor: '#06b6d4' }}>
              <p className="text-base sm:text-lg text-editorial-ink leading-relaxed">
                Whether you're a startup, mid-size company, or established business in any industry, we make AI accessible and affordable. No massive IT teams required, no enterprise-level budgets needed. We work directly with you to transform your operations, delight your customers, and future-proof your business with personalized AI solutions that actually work.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons - Editorial Style */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <motion.button
              onClick={() => {
                const schedulingSection = document.getElementById('scheduling');
                if (schedulingSection) {
                  schedulingSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="btn-touch bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white font-semibold px-8 py-4 border-2 border-transparent hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 uppercase tracking-wider text-sm relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-editorial-secondary opacity-0 group-hover:opacity-20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Schedule a Discovery Call</span>
            </motion.button>
            <motion.a
              href="#features"
              className="btn-touch flex items-center gap-2 font-medium text-editorial-ink hover:text-blue-600 transition-colors duration-200 uppercase tracking-wider text-sm border-b-2 border-transparent hover:border-blue-500 pb-1"
              whileHover={{ x: 4 }}
            >
              Explore Solutions
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Benefit Cards - Editorial Grid */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl border-t border-editorial-border pt-12"
          >
            {[
              { title: "Free Assessment", description: "No-cost evaluation of your current setup and AI opportunities" },
              { title: "Custom Roadmap", description: "Personalized AI transformation strategy tailored to your business" },
              { title: "Actionable Insights", description: "Clear next steps and recommendations to get started immediately" }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="border-l-2 border-editorial-border pl-6 hover:border-editorial-secondary transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
              >
                <h4 className="text-lg font-bold text-editorial-ink mb-2 font-serif">
                  {benefit.title}
                </h4>
                <p className="text-sm text-editorial-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

