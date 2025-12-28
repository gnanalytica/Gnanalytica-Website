/**
 * Modern Case Studies Section - Premium Design with Consistent Colors
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    title: "E-commerce Analytics Dashboard",
    description: "Advanced AI-powered analytics platform that tracks customer behavior, optimizes conversion rates, and reduces customer acquisition costs.",
    category: "Analytics",
  },
  {
    title: "Customer Service Automation",
    description: "Intelligent chatbot system that handles customer inquiries automatically, provides instant responses, and escalates complex issues.",
    category: "Automation",
  },
  {
    title: "Predictive Sales Analytics",
    description: "Machine learning model that predicts sales trends, forecasts demand, and helps optimize inventory and pricing strategies.",
    category: "Predictive Analytics",
  }
];

export default function ModernCaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="case-studies"
      className="py-24 sm:py-32 bg-transparent relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border border-gray-200/60 shadow-premium mb-8">
            <span className="text-xs font-semibold text-editorial-charcoal tracking-luxury uppercase">Case Studies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-editorial-ink leading-[1.1] mb-8 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            What We Can <span className="bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-lg sm:text-xl text-editorial-charcoal max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Explore examples of AI solutions and dashboards we can create to transform your business operations.
          </p>
        </motion.div>

        {/* Modern Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className="group relative bg-white/90 backdrop-blur-md rounded-lg p-8 border border-gray-200/60 shadow-premium hover:shadow-premium-xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-editorial-primary/5 to-editorial-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-editorial-primary via-editorial-secondary to-editorial-primary flex items-center justify-center mb-6 shadow-premium">
                <div className="w-8 h-8 bg-white/30 rounded-lg" />
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary text-white shadow-premium">
                  {study.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-editorial-ink mb-4 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{study.title}</h3>
              <p className="text-editorial-charcoal leading-relaxed mb-6 font-light tracking-wide">{study.description}</p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sm font-semibold text-editorial-primary group-hover:text-editorial-secondary transition-colors duration-300">
                <span>Learn More</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Coming Soon Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200/60">
                <span className="text-xs font-semibold text-editorial-muted uppercase tracking-wider">Coming Soon</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
