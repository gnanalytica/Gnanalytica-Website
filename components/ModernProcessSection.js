/**
 * Modern Process Section - Improved Layout with Consistent Tile Sizes
 * Enhanced structure with uniform card dimensions and better visual flow
 */
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const steps = [
  {
    name: 'Discovery Call',
    description: 'We begin with a comprehensive discovery call to understand your business, challenges, and goals.',
    number: '01',
    icon: PhoneIcon,
    color: 'from-editorial-primary to-editorial-secondary',
    metrics: { outcome: 'Clear understanding' },
  },
  {
    name: 'Solution Discussion',
    description: 'After understanding your problems, we analyze your specific needs and return with tailored solutions.',
    number: '02',
    icon: ChatBubbleLeftRightIcon,
    color: 'from-editorial-secondary to-editorial-primary',
    metrics: { outcome: 'Customized plan' },
  },
  {
    name: 'Tech & Data Assessment',
    description: 'Our technical experts conduct thorough evaluations of your existing infrastructure and data systems.',
    number: '03',
    icon: MagnifyingGlassIcon,
    color: 'from-editorial-primary to-editorial-secondary',
    metrics: { outcome: 'Technical roadmap' },
  },
  {
    name: 'AI Roadmap Creation',
    description: 'Together, we create a comprehensive AI roadmap that includes digitization, infrastructure, and automation.',
    number: '04',
    icon: DocumentTextIcon,
    color: 'from-editorial-secondary to-editorial-primary',
    metrics: { outcome: 'Implementation plan' },
  },
  {
    name: 'Continuous Support',
    description: 'We provide ongoing maintenance, monitoring, and enhancement of your AI solutions.',
    number: '05',
    icon: ArrowPathIcon,
    color: 'from-editorial-primary to-editorial-secondary',
    metrics: { outcome: 'Optimized performance' },
  }
];

export default function ModernProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <motion.section
      ref={ref}
      id="process"
      className="relative bg-transparent py-24 sm:py-32 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border border-gray-200/60 shadow-premium mb-8">
            <span className="text-xs font-semibold text-editorial-charcoal tracking-luxury uppercase">Our Methodology</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-editorial-ink leading-[1.1] mb-8 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            How We <span className="bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary bg-clip-text text-transparent">Do It</span>
          </h2>
          <p className="text-lg sm:text-xl text-editorial-charcoal max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            We follow a proven 5-step process that ensures successful AI adoption with measurable business impact.
          </p>
        </motion.div>

        {/* Improved Process Flow */}
        <div className="relative">
          {/* Desktop: Horizontal Flow with Consistent Heights */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Flow Line */}
              <div className="absolute top-28 left-0 right-0 h-0.5 bg-gradient-to-r from-editorial-primary/20 via-editorial-secondary/30 to-editorial-primary/20" />

              {/* Process Steps - Improved Grid */}
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = activeStep === index;

                  return (
                    <motion.div
                      key={step.number}
                      className="relative flex flex-col h-full"
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      onMouseEnter={() => setActiveStep(index)}
                    >
                      {/* Step Card - Consistent Height */}
                      <motion.div
                        className={`relative bg-white/90 backdrop-blur-md rounded-lg p-6 border transition-all duration-500 cursor-pointer flex flex-col h-full min-h-[320px] ${
                          isActive
                            ? 'border-editorial-primary/50 shadow-premium-xl scale-105'
                            : 'border-gray-200/60 shadow-premium hover:shadow-premium-lg'
                        }`}
                        whileHover={{ y: -8 }}
                      >
                        {/* Step Number Badge */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                          <motion.div
                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-premium-lg ${
                              isActive ? 'scale-110' : ''
                            }`}
                            animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <span className="text-white font-bold text-xs">{step.number}</span>
                          </motion.div>
                        </div>

                        {/* Icon - Consistent Size */}
                        <div className="flex justify-center mb-5 mt-6">
                          <motion.div
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-premium flex-shrink-0`}
                            animate={isActive ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <StepIcon className="w-7 h-7 text-white" />
                          </motion.div>
                        </div>

                        {/* Content - Flex Grow for Consistency */}
                        <div className="flex flex-col flex-grow">
                          <h3 className="text-base font-bold text-editorial-ink text-center mb-3 tracking-tight min-h-[48px] flex items-center justify-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {step.name}
                          </h3>
                          <p className="text-sm text-editorial-charcoal text-center leading-relaxed font-light mb-5 flex-grow">
                            {step.description}
                          </p>

                          {/* Metrics - Consistent Layout */}
                          <div className={`flex ${step.metrics.duration ? 'justify-between' : 'justify-center'} items-center pt-4 border-t border-gray-200/60 mt-auto`}>
                            {step.metrics.duration && (
                              <div className="text-xs">
                                <div className="text-editorial-muted font-medium mb-1">Duration</div>
                                <div className="text-editorial-charcoal font-semibold">{step.metrics.duration}</div>
                              </div>
                            )}
                            <div className={`text-xs ${step.metrics.duration ? 'text-right' : 'text-center'}`}>
                              <div className="text-editorial-muted font-medium mb-1">Outcome</div>
                              <div className="text-editorial-charcoal font-semibold">{step.metrics.outcome}</div>
                            </div>
                          </div>
                        </div>

                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-editorial-primary to-editorial-secondary rounded-full"
                          />
                        )}
                      </motion.div>

                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Timeline - Improved */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={step.number}
                  className="relative flex gap-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Timeline Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 top-14 bottom-0 w-0.5 bg-gradient-to-b from-editorial-primary/40 to-editorial-secondary/40" />
                  )}

                  {/* Step Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-premium-lg`}
                      animate={isActive ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <StepIcon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-editorial-primary flex items-center justify-center">
                      <span className="text-[10px] font-bold text-editorial-primary">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card - Consistent */}
                  <motion.div
                    className={`flex-1 bg-white/90 backdrop-blur-md rounded-lg p-5 border transition-all duration-500 ${
                      isActive
                        ? 'border-editorial-primary/50 shadow-premium-xl'
                        : 'border-gray-200/60 shadow-premium'
                    }`}
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="text-lg font-bold text-editorial-ink mb-2 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {step.name}
                    </h3>
                    <p className="text-editorial-charcoal leading-relaxed font-light mb-4 text-sm">
                      {step.description}
                    </p>
                    <div className={`flex ${step.metrics.duration ? 'justify-between' : 'justify-end'} items-center pt-3 border-t border-gray-200/60`}>
                      {step.metrics.duration && (
                        <div className="text-xs">
                          <div className="text-editorial-muted font-medium mb-1">Duration</div>
                          <div className="text-editorial-charcoal font-semibold">{step.metrics.duration}</div>
                        </div>
                      )}
                      <div className="text-xs text-right">
                        <div className="text-editorial-muted font-medium mb-1">Outcome</div>
                        <div className="text-editorial-charcoal font-semibold">{step.metrics.outcome}</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
