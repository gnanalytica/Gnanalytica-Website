/**
 * Feature section component - Editorial "Newspaper Grid" Design
 *
 * This section presents services in a sophisticated multi-column layout
 * inspired by newspaper editorial design.
 */
import { ChartBarIcon, UserGroupIcon, CogIcon, CloudArrowUpIcon, FingerPrintIcon, ShieldCheckIcon, HeartIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import Chip from './Chip';

const businessOutcomes = [
  {
    name: 'Revenue Growth',
    icon: ChartBarIcon,
  },
  {
    name: 'Operational Efficiency',
    icon: CogIcon,
  },
  {
    name: 'Risk & Compliance',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Customer Experience',
    icon: HeartIcon,
  },
]

const services = [
  {
    name: 'AI Sales & Marketing',
    description: 'Turn your sales team into super-performers. Our AI identifies your hottest leads, predicts which customers are ready to buy, and suggests the perfect offer at the right time. No more guessing games - just smart, data-driven sales.',
    category: 'Revenue Growth',
    icon: UserGroupIcon,
    impact: 'Increase conversion rates by 25-40%'
  },
  {
    name: 'Advanced Analytics',
    description: 'Make every business decision count with powerful insights. Track your sales pipeline, optimize pricing strategies, and understand exactly which marketing efforts bring in the most revenue. Turn your data into dollars.',
    category: 'Revenue Growth',
    icon: ChartBarIcon,
    impact: 'Optimize pricing and boost revenue by 15-30%'
  },
  {
    name: 'Intelligent Automation',
    description: 'Eliminate repetitive tasks that drain your team\'s time. Our AI handles routine paperwork, processes invoices, manages customer data entry, and automates back-office workflows so your people can focus on growing the business.',
    category: 'Operational Efficiency',
    icon: CogIcon,
    impact: 'Reduce manual work by 60-80%'
  },
  {
    name: 'Infrastructure Modernization',
    description: 'Move your business to the cloud and slash IT costs. We help you migrate to modern cloud systems, set up efficient data platforms, and optimize your technology spending. Get enterprise-level infrastructure at small business prices.',
    category: 'Operational Efficiency',
    icon: CloudArrowUpIcon,
    impact: 'Cut infrastructure costs by 30-50%'
  },
  {
    name: 'Internal AI Tools',
    description: 'Give your team AI-powered assistants that work 24/7. Create smart chatbots that answer employee questions, build knowledge search systems that find information instantly, and develop AI copilots that help with daily tasks.',
    category: 'Operational Efficiency',
    icon: FingerPrintIcon,
    impact: 'Boost employee productivity by 40-60%'
  },
  {
    name: 'Data Governance',
    description: 'Protect your business with bulletproof data security. We set up proper data management systems, create audit trails for compliance, and ensure your customer information is always safe and properly handled.',
    category: 'Risk & Compliance',
    icon: ShieldCheckIcon,
    impact: 'Ensure 100% compliance and data security'
  },
  {
    name: 'Model Risk Management',
    description: 'Keep your AI systems honest and reliable. We monitor your AI models for bias, track their performance, and ensure they make fair, accurate decisions. Protect your business from AI-related risks and maintain customer trust.',
    category: 'Risk & Compliance',
    icon: ShieldCheckIcon,
    impact: 'Minimize AI risks and ensure trustworthy systems'
  },
  {
    name: 'AI Chatbots',
    description: 'Never miss a customer inquiry again. Our AI chatbots provide instant, helpful responses 24/7, handle common questions automatically, and seamlessly transfer complex issues to your human team. Happy customers, less stress.',
    category: 'Customer Experience',
    icon: ArrowPathIcon,
    impact: 'Improve response time by 90% and customer satisfaction'
  },
  {
    name: 'Customer Personalization',
    description: 'Make every customer feel special with personalized experiences. Our AI learns what each customer likes, recommends products they\'ll love, and creates tailored content that keeps them engaged and coming back for more.',
    category: 'Customer Experience',
    icon: HeartIcon,
    impact: 'Increase customer engagement by 50-70%'
  },
]

export default function FeatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState('Revenue Growth');

  const filteredServices = services.filter(service => service.category === selectedCategory);
  const categories = businessOutcomes.map(outcome => outcome.name);

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
      id="features"
      className="relative bg-gradient-to-br from-purple-100 via-pink-100 to-purple-50 py-24 sm:py-32 border-t-4 border-purple-400 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Editorial Section Header */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <div className="mb-4">
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-editorial-muted border-b-2 border-editorial-ink pb-2">
              Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-editorial-ink leading-tight mb-6 max-w-3xl">
            What We Offer
          </h2>
          <p className="text-lg text-editorial-muted max-w-2xl leading-relaxed">
            Transform your business with AI solutions that deliver measurable results and real value.
          </p>
        </motion.div>

        {/* Category Filter - Editorial Tabs with Chips */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12 border-b border-editorial-border pb-4"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Chip
                label={category}
                variant={selectedCategory === category ? 'highlight' : 'outline'}
                size="md"
                onClick={() => setSelectedCategory(category)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Newspaper Grid Layout - 3 Columns */}
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-editorial-border"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              className={`relative p-8 border-b border-r border-editorial-border bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:via-cyan-50 hover:to-purple-50 transition-all duration-300 group shadow-sm hover:shadow-lg rounded-lg ${
                index % 2 === 1 ? 'md:border-r-0' : ''
                } ${index % 3 === 2 ? 'lg:border-r-0' : ''} ${
                index >= filteredServices.length - (filteredServices.length % 2 || 2) ? 'md:border-b-0' : ''
                } ${index >= filteredServices.length - (filteredServices.length % 3 || 3) ? 'lg:border-b-0' : ''}`}
              whileHover={{ y: -4, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              {/* Drop Cap Style Number */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-editorial-ink flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-editorial-ink" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold text-editorial-ink mb-3 leading-tight">
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Article Text */}
              <p className="text-sm text-editorial-muted leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Impact Badge - Editorial Style */}
              <div className="mt-6 pt-4 border-t border-editorial-border">
                <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent uppercase tracking-wider">
                  {service.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
