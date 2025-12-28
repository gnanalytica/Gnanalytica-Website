/**
 * Footer component - Editorial Design
 *
 * Contains comprehensive contact information in a sophisticated
 * editorial layout matching the overall design aesthetic.
 */
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white border-t-4 border-editorial-primary relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-editorial-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-editorial-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <motion.div
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 border-b border-editorial-muted/20 pb-12">
          {/* Company Info */}
          <motion.div className="sm:col-span-2 lg:col-span-2" variants={itemVariants}>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white font-serif tracking-tight">
                    Gnanalytica
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-md">
              Making your business AI-ready with enterprise-grade solutions at a fraction of traditional costs.
              We provide the personal attention and dedication that big firms simply can't.
            </p>
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
              className="inline-flex items-center bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary text-white font-semibold px-6 py-3 rounded-lg border border-white/20 shadow-premium-lg hover:shadow-premium-xl transition-all duration-500 uppercase tracking-wider text-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Discovery Call
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                <a href="#features" className="text-sm text-gray-300 hover:text-editorial-primary transition-colors duration-200 uppercase tracking-wider">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-gray-300 hover:text-editorial-primary transition-colors duration-200 uppercase tracking-wider">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#scheduling" className="text-sm text-gray-300 hover:text-editorial-primary transition-colors duration-200 uppercase tracking-wider">
                  Schedule a Call
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="h-4 w-4 text-editorial-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:contact@gnanalytica.com"
                    className="text-sm text-gray-300 hover:text-editorial-primary transition-colors duration-200 break-all"
                  >
                    contact@gnanalytica.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="h-4 w-4 text-editorial-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                  <a
                    href="tel:+919980856880"
                    className="text-sm text-gray-300 hover:text-editorial-primary transition-colors duration-200"
                  >
                    +91 9980856880
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-4 w-4 text-editorial-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-sm text-gray-300">Eindhoven, Netherlands</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-4 pt-4 border-t border-gray-700">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">KVK Number</p>
                  <p className="text-sm text-gray-300">98649035</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">BTW ID</p>
                  <p className="text-sm text-gray-300">NL005345555B41</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-700"
          variants={itemVariants}
        >
          <p className="text-xs text-gray-400 text-center sm:text-left uppercase tracking-wider">
                &copy; {new Date().getFullYear()} Gnanalytica. All rights reserved.
              </p>
              <div className="text-center sm:text-right">
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Transforming businesses with AI • Made with passion in Eindhoven, Netherlands
                </p>
              </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
