/**
 * Case Studies section component - Editorial Design
 *
 * This section showcases examples of AI solutions in a sophisticated
 * editorial layout matching the overall design aesthetic.
 */
import { motion } from 'framer-motion';

export default function CaseStudiesSection() {
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

  const caseStudies = [
    {
      title: "E-commerce Analytics Dashboard",
      description: "Advanced AI-powered analytics platform that can track customer behavior, optimize conversion rates, and reduce customer acquisition costs through intelligent insights.",
      category: "Analytics"
    },
    {
      title: "Customer Service Automation",
      description: "Intelligent chatbot system that can handle customer inquiries automatically, provide instant responses, and escalate complex issues to human agents when needed.",
      category: "Automation"
    },
    {
      title: "Predictive Sales Analytics",
      description: "Machine learning model that can predict sales trends, forecast demand, and help optimize inventory and pricing strategies based on historical data and market patterns.",
      category: "Predictive Analytics"
    }
  ];

  return (
    <motion.section
      id="case-studies"
      className="py-20 bg-gradient-to-br from-amber-100 via-orange-100 to-amber-50 border-t-4 border-amber-400 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="mb-4 inline-block">
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-editorial-muted border-b-2 border-editorial-ink pb-2">
              Case Studies & Examples
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-editorial-ink leading-tight mb-6">
            What We Can Build
          </h2>
          <p className="text-lg text-editorial-muted max-w-2xl mx-auto leading-relaxed">
            Explore examples of AI solutions and dashboards we can create to transform your business operations and drive growth.
          </p>
        </motion.div>

        {/* Case Studies Grid - Editorial Newspaper Style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-editorial-border"
          variants={containerVariants}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className={`p-8 border-b border-r border-editorial-border bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:via-cyan-50 hover:to-purple-50 transition-all duration-300 group shadow-sm hover:shadow-lg rounded-lg ${
                index % 3 === 2 ? 'md:border-r-0' : ''
              }`}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block text-xs uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-transparent px-3 py-1 rounded-full shadow-md">
                  {study.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-bold text-editorial-ink mb-4 leading-tight">
                {study.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-editorial-muted leading-relaxed mb-6">
                {study.description}
              </p>

              {/* Coming Soon Badge */}
              <div className="border-t border-editorial-border pt-4">
                <span className="text-xs font-semibold text-editorial-muted uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action - Editorial Style */}
        <motion.div
          className="text-center mt-16 border-t border-editorial-border pt-12"
          variants={itemVariants}
        >
          <p className="text-sm text-editorial-muted uppercase tracking-wider mb-2">
            More examples coming soon
          </p>
          <p className="text-base text-editorial-ink leading-relaxed max-w-2xl mx-auto">
            We're working on showcasing more AI solutions and dashboards we can build for your business.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
