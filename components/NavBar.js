import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Services', href: '#features' },
  { name: 'Process', href: '#process' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'About', href: '#about' },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-editorial-border shadow-lg'
          : 'bg-white/80 backdrop-blur-sm border-b border-editorial-border'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4" aria-label="Global">
        {/* Logo Section - Editorial Masthead Style */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Gnanalytica</span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-editorial-ink font-serif tracking-tight">Gnanalytica</span>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="btn-touch inline-flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation - Minimal Editorial Style */}
        <motion.div
          className="hidden lg:flex lg:flex-1 lg:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-editorial-ink hover:text-blue-600 transition-colors duration-200 uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ y: -1 }}
              >
                {item.name}
              </motion.a>
            ))}
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
              className="btn-touch bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white font-semibold px-6 py-2 border-2 border-transparent hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 uppercase tracking-wider text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Call
            </motion.button>
          </div>
        </motion.div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-editorial-ink/30 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-editorial-paper px-6 py-6 sm:max-w-sm border-l border-editorial-border">
          <div className="flex items-center justify-between border-b border-editorial-border pb-4">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Gnanalytica</span>
              <span className="text-xl font-bold text-editorial-ink font-serif tracking-tight">Gnanalytica</span>
            </a>
            <button
              type="button"
              className="btn-touch text-editorial-ink hover:text-editorial-muted transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-editorial-border">
              <div className="space-y-2 py-6">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="btn-touch block text-base font-medium text-editorial-ink hover:text-blue-600 uppercase tracking-wider transition-colors duration-200 py-3"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              <div className="py-6">
                <motion.button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const schedulingSection = document.getElementById('scheduling');
                    if (schedulingSection) {
                      schedulingSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="btn-touch w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white font-semibold py-3 border-2 border-transparent hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 uppercase tracking-wider text-sm"
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
  )
}