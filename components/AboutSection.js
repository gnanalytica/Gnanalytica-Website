/**
 * About section component - Editorial "Editor's Note" Design
 *
 * This section provides information about the company in a sophisticated
 * editorial style, presented as a publisher's letter or editor's note.
 */
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState(0);

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

  const aboutTabs = [
    {
      id: 'mission',
      title: 'Mission',
      content: {
        title: 'Our Mission',
        description: 'To democratize AI technology by providing enterprise-grade solutions at small business prices. We believe every company, regardless of size, should have access to the transformative power of artificial intelligence.',
        details: [
          'Making AI accessible to businesses of all sizes',
          'Providing enterprise-grade solutions at affordable prices',
          'Empowering companies to compete in the digital age',
          'Bridging the gap between AI potential and business reality'
        ]
      }
    },
    {
      id: 'vision',
      title: 'Vision',
      content: {
        title: 'Our Vision',
        description: 'To be the leading catalyst for AI transformation, creating a world where every business can harness the power of artificial intelligence to drive innovation, efficiency, and growth.',
        details: [
          'Leading the AI transformation revolution',
          'Creating a world where AI is accessible to all',
          'Empowering businesses to innovate and grow',
          'Building the future of intelligent business operations'
        ]
      }
    },
    {
      id: 'values',
      title: 'Values',
      content: {
        title: 'Our Values',
        description: 'Our core values guide everything we do, from how we work with clients to how we develop solutions. These principles ensure we deliver exceptional results while maintaining the highest standards.',
        details: [
          { title: 'Partnership', desc: 'We work with you, not for you' },
          { title: 'Innovation', desc: 'Cutting-edge solutions for modern problems' },
          { title: 'Results', desc: 'Measurable impact on your business' },
          { title: 'Trust', desc: 'Transparent, reliable, and secure' }
        ]
      }
    },
    {
      id: 'team',
      title: 'Team',
      content: {
        title: 'Our Team',
        description: 'We are a diverse team of passionate professionals with deep expertise in AI, business strategy, and technology implementation. Our collective experience spans across industries and technologies.',
        details: [
          {
            name: "AI Experts",
            role: "Technical Team",
            description: "Experienced professionals with deep expertise in AI, machine learning, and business transformation."
          },
          {
            name: "Business Consultants",
            role: "Strategy Team",
            description: "Industry veterans who understand business challenges and can translate AI capabilities into real value."
          },
          {
            name: "Implementation Specialists",
            role: "Delivery Team",
            description: "Hands-on experts who ensure smooth deployment and integration of AI solutions in your business."
          }
        ]
      }
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 bg-gradient-to-br from-indigo-100 via-violet-100 to-indigo-50 border-t-4 border-indigo-400"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="mb-4 inline-block">
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-editorial-muted border-b-2 border-editorial-ink pb-2">
              About Gnanalytica
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-editorial-ink leading-tight mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-editorial-muted max-w-2xl mx-auto leading-relaxed">
            We're a team of passionate AI experts and business consultants dedicated to making artificial intelligence accessible and valuable for businesses of all sizes.
          </p>
        </motion.div>

        {/* Tab Selection - Editorial Style */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-2 border-b border-editorial-border pb-4">
            {aboutTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-200 border-b-2 ${
                  index === activeTab
                    ? 'text-editorial-ink border-blue-500'
                    : 'text-editorial-muted border-transparent hover:text-editorial-ink hover:border-editorial-border'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Display - Editor's Note Style, Narrow Column */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t border-editorial-border pt-8"
          >
            {/* Editor's Note Header */}
            <div className="mb-8">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-editorial-ink mb-4 leading-tight">
                {aboutTabs[activeTab].content.title}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mb-6 rounded-full"></div>
            </div>

            {/* Article Text - Narrow Reading Column */}
            <div className="max-w-2xl">
              <p className="text-base sm:text-lg text-editorial-ink leading-relaxed mb-8">
                {aboutTabs[activeTab].content.description}
              </p>

              {/* Content Details */}
              {aboutTabs[activeTab].id === 'values' ? (
                // Values Grid Layout
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-editorial-border pt-8">
                  {aboutTabs[activeTab].content.details.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className="border-l-2 border-editorial-border pl-4 hover:bg-gradient-to-r hover:from-blue-50 hover:via-cyan-50 hover:to-transparent transition-all duration-300 rounded-r-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="font-bold text-editorial-ink mb-2 font-serif text-lg">{value.title}</h4>
                      <p className="text-sm text-editorial-muted leading-relaxed">{value.desc}</p>
                    </motion.div>
                  ))}
                </div>
              ) : aboutTabs[activeTab].id === 'team' ? (
                // Team Grid Layout
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-editorial-border pt-8">
                  {aboutTabs[activeTab].content.details.map((member, index) => (
                    <motion.div
                      key={member.name}
                      className="border-2 border-editorial-border p-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 hover:from-blue-100 hover:via-cyan-100 hover:to-purple-100 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="text-lg font-bold text-editorial-ink mb-2 font-serif">{member.name}</h4>
                      <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent uppercase tracking-wider mb-3">{member.role}</p>
                      <p className="text-sm text-editorial-muted leading-relaxed">{member.description}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Mission/Vision List Layout
                <div className="space-y-4 border-t border-editorial-border pt-8">
                  {aboutTabs[activeTab].content.details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      className="flex items-start gap-3 border-l-4 pl-4" style={{ borderLeftColor: '#06b6d4' }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-blue-500 font-bold mt-1">•</span>
                      <span className="text-sm sm:text-base text-editorial-ink leading-relaxed">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
