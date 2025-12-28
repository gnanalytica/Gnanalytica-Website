/**
 * Process section component - Editorial "Newspaper Grid" Design
 *
 * This section outlines the step-by-step process in a sophisticated
 * editorial layout with drop caps and newspaper-style columns.
 */
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const steps = [
  {
    name: 'Discovery Call',
    description: 'We begin with a comprehensive discovery call to understand your business, challenges, and goals. Our team conducts in-depth interviews with your key stakeholders to map current processes, identify pain points, and understand your unique AI transformation needs and opportunities.',
    number: '01',
  },
  {
    name: 'Solution Discussion',
    description: 'After understanding your problems, we analyze your specific needs and return with tailored solutions. We present realistic offerings and capabilities that can benefit your business based on our discovery conversation, ensuring alignment with your goals and constraints.',
    number: '02',
  },
  {
    name: 'Tech & Data Assessment',
    description: 'Our technical experts conduct thorough evaluations of your existing infrastructure, data systems, and technology stack. We assess data quality, security, compatibility, and readiness for AI integration to create a solid foundation for transformation.',
    number: '03',
  },
  {
    name: 'AI Roadmap Creation',
    description: 'Together, we create a comprehensive AI roadmap that includes: Digitization and organization of your data, Infrastructure preparation and modernization, Automation of processes that need streamlining, and Solution implementation with dynamic adaptation to changing business needs.',
    number: '04',
    subItems: [
      'Digitization/Organization of Data',
      'Infrastructure Preparation & Modernization',
      'Automation of Key Processes',
      'Solution/Features Implementation with Dynamic Adaptation'
    ]
  },
  {
    name: 'Continuous Support & Maintenance',
    description: 'We provide ongoing maintenance, monitoring, and enhancement of your AI solutions to ensure optimal performance and scalability. This includes regular updates, performance tuning, user feedback integration, and expanding capabilities as your business grows.',
    number: '05',
  }
]

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
  };

  return (
    <motion.section
      ref={ref}
      id="process"
      className="relative bg-gradient-to-br from-emerald-100 via-green-100 to-emerald-50 py-24 sm:py-32 border-t-4 border-emerald-400"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <div className="mb-4">
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-editorial-muted border-b-2 border-editorial-ink pb-2">
              Methodology
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-editorial-ink leading-tight mb-6 max-w-3xl">
            How We Do It
          </h2>
          <p className="text-lg text-editorial-muted max-w-2xl leading-relaxed">
            We follow a proven 5-step process that ensures successful AI adoption with measurable business impact and sustainable growth.
          </p>
        </motion.div>

        {/* Step Selection - Editorial Tabs */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 border-b border-editorial-border pb-4">
            {steps.map((step, index) => (
              <motion.button
                key={step.name}
                className={`text-left p-4 border-2 transition-all duration-200 ${
                  index === currentSlide
                    ? 'border-editorial-ink bg-editorial-white'
                    : 'border-editorial-border bg-editorial-paper hover:border-editorial-muted'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-2xl font-serif font-bold text-editorial-ink mb-2">
                  {step.number}
                </div>
                <h3 className="text-sm font-medium text-editorial-ink uppercase tracking-wider leading-tight">
                  {step.name}
                </h3>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Display - Editorial Article Layout */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t border-editorial-border pt-8"
          >
            {/* Drop Cap Style Number */}
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="text-6xl sm:text-7xl md:text-8xl font-serif font-bold text-editorial-ink leading-none">
                  {steps[currentSlide].number}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-editorial-ink mb-6 leading-tight">
                  {steps[currentSlide].name}
                </h3>
              </div>
            </div>

            {/* Article Text - Narrow Column */}
            <div className="max-w-2xl ml-0 sm:ml-24">
              <p className="text-base sm:text-lg text-editorial-ink leading-relaxed mb-8">
                {steps[currentSlide].description}
              </p>

              {/* Sub-items - Editorial List */}
              {steps[currentSlide].subItems && (
                <div className="border-l-4 pl-6" style={{ borderLeftColor: '#06b6d4' }}>
                  <h4 className="text-sm font-semibold text-editorial-ink uppercase tracking-wider mb-4">
                    Key Components:
                  </h4>
                  <ul className="space-y-3">
                    {steps[currentSlide].subItems.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-3 text-sm text-editorial-muted leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                      >
                        <span className="text-blue-500 font-bold mt-1">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
