/**
 * Modern About Section - Tabbed Content with Modern Cards
 */
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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
      description: 'Our core values guide everything we do, from how we work with clients to how we develop solutions.',
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
      description: 'We are a diverse team of passionate professionals with deep expertise in AI, business strategy, and technology implementation.',
      details: [
        {
          name: "AI Experts",
          role: "Technical Team",
          description: "Experienced professionals with deep expertise in AI, machine learning, and business transformation.",

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

export default function ModernAboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState(0);

  const colors = [
    'from-editorial-primary to-editorial-secondary',
    'from-editorial-secondary to-editorial-primary',
    'from-editorial-primary to-editorial-secondary',
    'from-editorial-secondary to-editorial-primary',
  ];

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 bg-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border border-gray-200/60 shadow-premium mb-8">
            <span className="text-xs font-semibold text-editorial-charcoal tracking-luxury uppercase">About Gnanalytica</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-editorial-ink leading-[1.1] mb-8 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Who We <span className="bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary bg-clip-text text-transparent">Are</span>
          </h2>
          <p className="text-lg sm:text-xl text-editorial-charcoal max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            We're a team of passionate AI experts and business consultants dedicated to making artificial intelligence accessible.
          </p>
        </motion.div>

        {/* Modern Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {aboutTabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-500 tracking-wide ${
                index === activeTab
                  ? `bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary text-white shadow-premium-lg scale-105 border border-white/20`
                  : 'bg-white/90 backdrop-blur-md text-editorial-charcoal border border-gray-200/60 hover:border-editorial-primary/50 shadow-premium hover:shadow-premium-lg'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <span>{tab.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Content Display */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/90 backdrop-blur-md rounded-lg p-8 lg:p-12 border border-gray-200/60 shadow-premium-lg"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-editorial-ink mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              {aboutTabs[activeTab].content.title}
            </h3>
            <p className="text-lg text-editorial-charcoal leading-relaxed mb-8 font-light tracking-wide">
              {aboutTabs[activeTab].content.description}
            </p>

            {/* Content Details */}
            {aboutTabs[activeTab].id === 'values' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutTabs[activeTab].content.details.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="p-6 bg-white/90 backdrop-blur-md rounded-lg border border-gray-200/60 shadow-premium hover:shadow-premium-lg transition-all duration-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-editorial-primary via-editorial-secondary to-editorial-primary rounded-lg mb-3 shadow-premium" />
                    <h4 className="text-xl font-bold text-editorial-ink mb-2 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{value.title}</h4>
                    <p className="text-editorial-charcoal font-light tracking-wide">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            ) : aboutTabs[activeTab].id === 'team' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aboutTabs[activeTab].content.details.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="p-6 bg-white/90 backdrop-blur-md rounded-lg border border-gray-200/60 shadow-premium hover:shadow-premium-lg transition-all duration-500 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-editorial-primary via-editorial-secondary to-editorial-primary rounded-xl mx-auto mb-4 shadow-premium" />
                    <h4 className="text-lg font-bold text-editorial-ink mb-2 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{member.name}</h4>
                    <p className="text-sm font-semibold bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary bg-clip-text text-transparent mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-editorial-charcoal font-light tracking-wide">{member.description}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {aboutTabs[activeTab].content.details.map((detail, index) => (
                  <motion.div
                    key={detail}
                    className="flex items-start gap-4 p-4 bg-white/90 backdrop-blur-md rounded-lg border-l-4 border-editorial-primary shadow-premium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-premium">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-editorial-charcoal leading-relaxed font-light tracking-wide">{detail}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

