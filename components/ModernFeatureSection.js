/**
 * Modern Feature Section - Contemporary Card Grid Design
 */
import { ChartBarIcon, UserGroupIcon, CogIcon, CloudArrowUpIcon, FingerPrintIcon, ShieldCheckIcon, HeartIcon, ArrowPathIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';

const businessOutcomes = [
  { name: 'Revenue Growth', icon: ChartBarIcon, color: 'from-emerald-500 to-teal-500' },
  { name: 'Operational Efficiency', icon: CogIcon, color: 'from-amber-500 to-orange-500' },
  { name: 'Risk & Compliance', icon: ShieldCheckIcon, color: 'from-green-500 to-emerald-500' },
  { name: 'Customer Experience', icon: HeartIcon, color: 'from-cyan-500 to-teal-500' },
];

const services = [
  {
    name: 'AI Sales & Marketing',
    description: 'Turn your sales team into super-performers. Our AI identifies your hottest leads, predicts which customers are ready to buy, and suggests the perfect offer at the right time.',
    category: 'Revenue Growth',
    icon: UserGroupIcon,
    impact: 'Increase conversion rates by 25-40%',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'Advanced Analytics',
    description: 'Make every business decision count with powerful insights. Track your sales pipeline, optimize pricing strategies, and understand exactly which marketing efforts bring in the most revenue.',
    category: 'Revenue Growth',
    icon: ChartBarIcon,
    impact: 'Optimize pricing and boost revenue by 15-30%',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'Intelligent Automation',
    description: 'Eliminate repetitive tasks that drain your team\'s time. Our AI handles routine paperwork, processes invoices, and automates back-office workflows.',
    category: 'Operational Efficiency',
    icon: CogIcon,
    impact: 'Reduce manual work by 60-80%',
    color: 'from-amber-500 to-orange-500'
  },
  {
    name: 'Infrastructure Modernization',
    description: 'Move your business to the cloud and slash IT costs. We help you migrate to modern cloud systems and optimize your technology spending.',
    category: 'Operational Efficiency',
    icon: CloudArrowUpIcon,
    impact: 'Cut infrastructure costs by 30-50%',
    color: 'from-amber-500 to-orange-500'
  },
  {
    name: 'Internal AI Tools',
    description: 'Give your team AI-powered assistants that work 24/7. Create smart chatbots and build knowledge search systems that find information instantly.',
    category: 'Operational Efficiency',
    icon: FingerPrintIcon,
    impact: 'Boost employee productivity by 40-60%',
    color: 'from-amber-500 to-orange-500'
  },
  {
    name: 'Data Governance',
    description: 'Protect your business with bulletproof data security. We set up proper data management systems and ensure your customer information is always safe.',
    category: 'Risk & Compliance',
    icon: ShieldCheckIcon,
    impact: 'Ensure 100% compliance and data security',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Model Risk Management',
    description: 'Keep your AI systems honest and reliable. We monitor your AI models for bias and ensure they make fair, accurate decisions.',
    category: 'Risk & Compliance',
    icon: ShieldCheckIcon,
    impact: 'Minimize AI risks and ensure trustworthy systems',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'AI Chatbots',
    description: 'Never miss a customer inquiry again. Our AI chatbots provide instant, helpful responses 24/7 and handle common questions automatically.',
    category: 'Customer Experience',
    icon: ArrowPathIcon,
    impact: 'Improve response time by 90%',
    color: 'from-amber-500 to-orange-500'
  },
  {
    name: 'Customer Personalization',
    description: 'Make every customer feel special with personalized experiences. Our AI learns what each customer likes and recommends products they\'ll love.',
    category: 'Customer Experience',
    icon: HeartIcon,
    impact: 'Increase customer engagement by 50-70%',
    color: 'from-amber-500 to-orange-500'
  },
];

export default function ModernFeatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState('Revenue Growth');

  const filteredServices = services.filter(service => service.category === selectedCategory);

  return (
    <motion.section
      ref={ref}
      id="features"
      className="relative bg-transparent py-24 sm:py-32 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Modern Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border border-gray-200/60 shadow-premium mb-8">
            <span className="text-xs font-semibold text-editorial-charcoal tracking-luxury uppercase">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-editorial-ink leading-[1.1] mb-8 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            What We <span className="bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg sm:text-xl text-editorial-charcoal max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Transform your business with AI solutions that deliver measurable results and real value.
          </p>
        </motion.div>

        {/* Modern Category Filter with Navigation */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Previous Arrow */}
          <motion.button
            onClick={() => {
              const currentIndex = businessOutcomes.findIndex(cat => cat.name === selectedCategory);
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : businessOutcomes.length - 1;
              setSelectedCategory(businessOutcomes[prevIndex].name);
            }}
            className="w-12 h-12 rounded-lg bg-white/90 backdrop-blur-md border border-gray-200/60 shadow-premium hover:shadow-premium-lg flex items-center justify-center text-editorial-charcoal hover:text-editorial-primary transition-all duration-300"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </motion.button>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {businessOutcomes.map((outcome) => (
              <motion.button
                key={outcome.name}
                onClick={() => setSelectedCategory(outcome.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-500 tracking-wide ${
                  selectedCategory === outcome.name
                    ? `bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary text-white shadow-premium-lg scale-105 border border-white/20`
                    : 'bg-white/90 backdrop-blur-md text-editorial-charcoal border border-gray-200/60 hover:border-editorial-primary/50 shadow-premium hover:shadow-premium-lg'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <outcome.icon className="w-5 h-5" />
                  <span>{outcome.name}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Next Arrow */}
          <motion.button
            onClick={() => {
              const currentIndex = businessOutcomes.findIndex(cat => cat.name === selectedCategory);
              const nextIndex = currentIndex < businessOutcomes.length - 1 ? currentIndex + 1 : 0;
              setSelectedCategory(businessOutcomes[nextIndex].name);
            }}
            className="w-12 h-12 rounded-lg bg-white/90 backdrop-blur-md border border-gray-200/60 shadow-premium hover:shadow-premium-lg flex items-center justify-center text-editorial-charcoal hover:text-editorial-primary transition-all duration-300"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Modern Card Grid - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {filteredServices.map((service, index) => (
            <motion.div
              key={service.name}
              className="group relative bg-white/90 backdrop-blur-md rounded-lg p-8 border border-gray-200/60 shadow-premium hover:shadow-premium-xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-editorial-ink mb-4 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{service.name}</h3>
              <p className="text-editorial-charcoal leading-relaxed mb-6 font-light tracking-wide">{service.description}</p>

              {/* Impact Badge */}
              <div className="pt-6 border-t border-gray-200/60">
                <span className="text-sm font-medium bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary bg-clip-text text-transparent tracking-wide">
                  {service.impact}
                </span>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

