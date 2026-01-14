/**
 * Modern Navigation Bar - Glassmorphism Design
 */
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export default function ModernNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

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
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            {status === 'loading' ? (
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
            ) : session ? (
              // User Menu
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100/50 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-editorial-primary to-editorial-secondary rounded-full flex items-center justify-center text-white font-semibold shadow-premium">
                    {session.user?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className="text-left hidden xl:block">
                    <p className="text-sm font-semibold text-editorial-ink">{session.user?.name}</p>
                    <p className="text-xs text-editorial-muted capitalize">{session.user?.role}</p>
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-premium-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                    <div className="px-4 py-3 bg-gradient-to-r from-editorial-primary/10 to-editorial-secondary/10">
                      <p className="text-sm font-semibold text-editorial-ink">{session.user?.name}</p>
                      <p className="text-xs text-editorial-muted">{session.user?.email}</p>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => router.push('/portal')}
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } flex w-full items-center px-4 py-2 text-sm text-editorial-charcoal`}
                          >
                            <UserCircleIcon className="mr-3 h-5 w-5" />
                            My Portal
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } flex w-full items-center px-4 py-2 text-sm text-red-600`}
                          >
                            <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
                            Sign Out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              // Login Button
              <motion.button
                onClick={() => signIn()}
                className="px-6 py-2.5 bg-white/90 text-editorial-primary font-semibold rounded-lg shadow-premium hover:shadow-premium-lg transition-all duration-300 border border-editorial-primary/20 tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            )}
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
              <div className="py-6 space-y-3">
                {session ? (
                  <>
                    <div className="px-3 py-3 bg-gradient-to-r from-editorial-primary/10 to-editorial-secondary/10 rounded-lg mb-3">
                      <p className="text-sm font-semibold text-editorial-ink">{session.user?.name}</p>
                      <p className="text-xs text-editorial-muted capitalize">{session.user?.role}</p>
                    </div>
                    <motion.button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        router.push('/portal');
                      }}
                      className="w-full px-6 py-3 bg-white text-editorial-primary font-semibold rounded-lg shadow-premium border border-editorial-primary/20 tracking-wide"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      My Portal
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        signOut({ callbackUrl: '/' });
                      }}
                      className="w-full px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-premium border border-red-200 tracking-wide"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Sign Out
                    </motion.button>
                  </>
                ) : (
                  <motion.button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      signIn();
                    }}
                    className="w-full px-6 py-3 bg-white text-editorial-primary font-semibold rounded-lg shadow-premium border border-editorial-primary/20 tracking-wide"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Login
                  </motion.button>
                )}
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

