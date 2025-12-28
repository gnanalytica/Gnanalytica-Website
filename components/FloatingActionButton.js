/**
 * Floating Action Button (FAB) Component
 *
 * A floating button that appears on scroll with smooth animations
 */
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CalendarIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToScheduling = () => {
    const schedulingSection = document.getElementById('scheduling');
    if (schedulingSection) {
      schedulingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Main FAB - Schedule Call */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToScheduling}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-editorial-primary via-editorial-secondary to-editorial-primary text-white rounded-full shadow-premium-xl flex items-center justify-center border-2 border-white/20 hover:shadow-premium-xl hover:scale-110 transition-all duration-300 group"
          >
            <CalendarIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            <motion.div
              className="absolute -top-12 right-0 bg-editorial-ink text-editorial-paper px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              Schedule Call
              <div className="absolute bottom-0 right-4 w-2 h-2 bg-editorial-ink rotate-45 -mb-1"></div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-editorial-primary via-editorial-secondary to-editorial-primary text-white rounded-full shadow-premium-xl flex items-center justify-center border-2 border-white/20 hover:shadow-premium-xl transition-all duration-300"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

