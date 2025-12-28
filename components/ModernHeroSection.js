/**
 * Modern Hero Section - Premium Redesigned Layout
 * Enhanced structure with better visual hierarchy and premium styling
 */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRightIcon, SparklesIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function ModernHeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    { text: 'Fast Implementation' },
    { text: 'Cost-Effective' },
    { text: 'Results-Driven' },
  ];

  return (
    <div ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-editorial-primary/10 to-editorial-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-editorial-secondary/10 to-editorial-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
          >
            {/* Enhanced Badge with Gnanalytica */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-xl rounded-full border border-gray-200/80 shadow-premium-lg">
                <div className="flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4 text-editorial-primary" />
                  <span className="text-sm font-bold text-editorial-primary tracking-wide">
                    Gnanalytica
                  </span>
                </div>
                <div className="w-px h-4 bg-gray-300" />
                <span className="text-xs font-medium text-editorial-charcoal tracking-wide">
                  Gnana(Sanskrit: wisdom) + Analytics = Wisdom-Driven AI
                </span>
              </div>
            </motion.div>

            {/* Main Headline - Enhanced Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4"
            >
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-editorial-ink leading-[1.05] tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Make Your Business{' '}
                <span className="block mt-2 bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary bg-clip-text text-transparent">
                  AI-Ready
                </span>
              </h1>
            </motion.div>

            {/* Subheadline - Better Spacing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-editorial-charcoal leading-relaxed max-w-2xl font-light tracking-wide"
            >
              Transform your business with enterprise-grade AI solutions at a fraction of traditional costs.
              No massive IT teams required.
            </motion.p>

            {/* Feature Pills - Enhanced Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-lg border border-gray-200/60 shadow-premium hover:shadow-premium-lg transition-all duration-300"
                >
                  <CheckIcon className="w-4 h-4 text-editorial-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-editorial-charcoal">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Enhanced Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                onClick={() => {
                  const schedulingSection = document.getElementById('scheduling');
                  if (schedulingSection) {
                    schedulingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="group relative px-10 py-5 bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary text-white font-semibold rounded-lg shadow-premium-lg hover:shadow-premium-xl transition-all duration-500 overflow-hidden border border-white/20"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-editorial-primary/10 to-editorial-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Schedule a Discovery Call
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-10 py-5 bg-white/95 backdrop-blur-md text-editorial-ink font-semibold rounded-lg border-2 border-gray-200/80 hover:border-editorial-primary/50 hover:bg-white transition-all duration-500 shadow-premium hover:shadow-premium-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Solutions
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Visual */}
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            {/* Premium Glassmorphism Cards */}
            <div className="relative">
              {/* Main Card - Enhanced */}
              <motion.div
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-10 shadow-premium-xl border border-white/30"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200/60">
                    <div className="w-14 h-14 bg-gradient-to-br from-editorial-primary via-editorial-secondary to-editorial-primary rounded-xl flex items-center justify-center shadow-premium">
                      <div className="w-7 h-7 bg-white/20 rounded-lg" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                    </div>
                  </div>

                  {/* Content Bars */}
                  <div className="space-y-3">
                    <div className="h-4 bg-gradient-to-r from-editorial-primary/20 via-editorial-secondary/30 to-editorial-primary/20 rounded-full w-3/4" />
                    <div className="h-4 bg-gradient-to-r from-editorial-secondary/20 via-editorial-primary/30 to-editorial-secondary/20 rounded-full w-full" />
                    <div className="h-4 bg-gradient-to-r from-editorial-primary/20 via-editorial-secondary/30 to-editorial-primary/20 rounded-full w-5/6" />
                  </div>

                  {/* Grid Items */}
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-24 bg-gradient-to-br from-editorial-primary/10 via-editorial-secondary/10 to-editorial-primary/10 rounded-xl border border-gray-200/40" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards - Enhanced */}
              <motion.div
                className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-xl rounded-xl p-5 shadow-premium-xl border border-white/30"
                initial={{ x: 20, y: -20, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-editorial-primary to-editorial-secondary rounded-lg mb-3 flex items-center justify-center shadow-premium">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-editorial-ink mb-1">Analytics</div>
                <div className="text-xs text-editorial-charcoal font-light">Real-time insights</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl rounded-xl p-5 shadow-premium-xl border border-white/30"
                initial={{ x: -20, y: 20, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-editorial-secondary to-editorial-primary rounded-lg mb-3 flex items-center justify-center shadow-premium">
                  <ArrowRightIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-editorial-ink mb-1">Automation</div>
                <div className="text-xs text-editorial-charcoal font-light">Streamlined workflows</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
