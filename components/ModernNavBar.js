/**
 * Modern Navigation Bar - Glassmorphism Design
 */
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ModernNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#features' },
    { name: 'Process', href: '#process' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About', href: '#about' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-premium hover:bg-white/95'
          : 'bg-white/70 backdrop-blur-lg border-b border-gray-200/40 hover:bg-white/80'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4" aria-label="Global">
        {/* Mobile Menu Button - Left */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-editorial-charcoal hover:text-editorial-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-editorial-charcoal hover:text-editorial-primary transition-colors duration-300 relative group tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-editorial-primary to-editorial-secondary group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </div>

        {/* Logo and CTA - Right */}
        <div className="flex items-center gap-4 lg:flex-1 lg:justify-end">
          {/* Logo */}
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Gnanalytica</span>
            <img
              src="/images/logos/gnanalytica-logo.png"
              alt="Gnanalytica Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-editorial-ink hidden sm:inline tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Gnanalytica
            </span>
          </a>

          {/* CTA Button - Desktop Only */}
          <div className="hidden lg:flex">
            <motion.button
              onClick={() => {
                const schedulingSection = document.getElementById('scheduling');
                if (schedulingSection) {
                  schedulingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary text-white font-semibold rounded-lg shadow-premium-lg hover:shadow-premium-xl transition-all duration-500 border border-white/20 tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Call
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">Gnanalytica</span>
              <img
                src="/images/logos/gnanalytica-logo.png"
                alt="Gnanalytica Logo"
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold text-gray-900">
                Gnanalytica
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <motion.button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const schedulingSection = document.getElementById('scheduling');
                    if (schedulingSection) {
                      schedulingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="w-full px-8 py-3 bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary text-white font-semibold rounded-lg shadow-premium-lg tracking-wide"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Call
                </motion.button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  );
}

