/**
 * Premium Section Navigation - Floating Side Navigation
 * Provides elegant navigation between sections with smooth scrolling
 */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const sections = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'stats', label: 'Insights', href: '#stats' },
  { id: 'features', label: 'Services', href: '#features' },
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'case-studies', label: 'Case Studies', href: '#case-studies' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'scheduling', label: 'Schedule', href: '#scheduling' },
];

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Show/hide navigation based on scroll position
      setIsVisible(window.scrollY > 300);

      // Determine active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToNext = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1].href);
    }
  };

  const scrollToPrevious = () => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    if (currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1].href);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-lg border border-gray-200/60 shadow-premium-lg p-2">
        {/* Previous Button */}
        <motion.button
          onClick={scrollToPrevious}
          disabled={activeSection === 'hero'}
          className={`w-10 h-10 flex items-center justify-center rounded-lg mb-2 transition-all duration-300 ${
            activeSection === 'hero'
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-editorial-charcoal hover:bg-editorial-primary/10 hover:text-editorial-primary'
          }`}
          whileHover={activeSection !== 'hero' ? { scale: 1.1 } : {}}
          whileTap={activeSection !== 'hero' ? { scale: 0.95 } : {}}
        >
          <ChevronUpIcon className="w-5 h-5" />
        </motion.button>

        {/* Section Indicators */}
        <div className="flex flex-col gap-2">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.href)}
                className={`relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 group ${
                  isActive
                    ? 'bg-editorial-primary text-white shadow-premium'
                    : 'text-editorial-charcoal hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={section.label}
              >
                <span className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-editorial-charcoal'}`}>
                  {section.label.charAt(0)}
                </span>
                {isActive && (
                  <motion.div
                    className="absolute -left-2 w-1 h-6 bg-editorial-primary rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-1.5 bg-editorial-ink text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {section.label}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-editorial-ink" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={scrollToNext}
          disabled={activeSection === 'scheduling'}
          className={`w-10 h-10 flex items-center justify-center rounded-lg mt-2 transition-all duration-300 ${
            activeSection === 'scheduling'
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-editorial-charcoal hover:bg-editorial-primary/10 hover:text-editorial-primary'
          }`}
          whileHover={activeSection !== 'scheduling' ? { scale: 1.1 } : {}}
          whileTap={activeSection !== 'scheduling' ? { scale: 0.95 } : {}}
        >
          <ChevronDownIcon className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
