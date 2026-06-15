/**
 * SiteNav — adaptive primary navigation, shared by the homepage and product pages.
 *
 * At the top of the page it is transparent; pass `heroOnDark` when the hero
 * behind it is a dark band so the links render light. On scroll it morphs into a
 * frosted, contained light pill with dark links. Nav links get a gradient
 * underline on hover and the CTA is a magnetic, animated-gradient button.
 */
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { products } from '../lib/products';
import Magnetic from './Magnetic';

const sectionLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Process', href: '/#process' },
  { name: 'About', href: '/#about' },
];

function BrandMark({ light }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span
        className="grid h-8 w-8 place-items-center rounded-md text-white shadow-soft transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 60%, #a855f7 100%)' }}
      >
        <span className="font-display text-[18px] leading-none">G</span>
      </span>
      <span className={`text-[17px] font-semibold tracking-tight transition-colors ${light ? 'text-white' : 'text-ink'}`}>
        Gnanalytica
      </span>
    </Link>
  );
}

// A nav link with a gradient underline that wipes in on hover.
function NavLink({ href, children, light, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative text-sm font-medium transition-colors ${
        light ? 'text-white/80 hover:text-white' : 'text-ink-muted hover:text-ink'
      }`}
    >
      {children}
      <span
        className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
        style={{ backgroundImage: 'linear-gradient(90deg, #6366f1, #a855f7)' }}
      />
    </a>
  );
}

export default function SiteNav({ heroOnDark = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Links are light only when at the top over a dark hero.
  const light = heroOnDark && !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled
            ? 'mt-3 max-w-5xl rounded-full border border-ink-line/70 bg-canvas/80 px-4 py-2.5 shadow-lift backdrop-blur-xl sm:px-5'
            : 'mt-0 max-w-7xl rounded-none border border-transparent px-4 py-4 sm:px-6 lg:px-8'
        }`}
        aria-label="Global"
      >
        <BrandMark light={light} />

        <div className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className={`group relative flex items-center gap-1 text-sm font-medium transition-colors ${light ? 'text-white/80 hover:text-white' : 'text-ink-muted hover:text-ink'}`}>
              Products
              <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
              <span
                className="absolute -bottom-1.5 left-0 h-0.5 w-[calc(100%-1.25rem)] origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundImage: 'linear-gradient(90deg, #6366f1, #a855f7)' }}
              />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-4"
                >
                  <div className="rounded-2xl border border-ink-line bg-canvas-card/95 p-2 shadow-liftlg backdrop-blur-xl">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/${product.slug}`}
                        className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-canvas-soft"
                      >
                        <span
                          className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg text-sm font-semibold text-white transition-transform duration-300 group-hover/item:scale-105"
                          style={{ backgroundImage: product.theme.gradient }}
                        >
                          {product.name.charAt(0)}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-ink">{product.name}</span>
                          <span className="block text-xs leading-snug text-ink-muted">{product.tagline}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {sectionLinks.map((item) => (
            <NavLink key={item.name} href={item.href} light={light}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Magnetic strength={0.5} className="hidden sm:inline-flex">
            <a
              href="/#contact"
              className="sheen-host relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-shadow duration-200 hover:shadow-lift"
              style={{ backgroundImage: 'linear-gradient(110deg, #4f46e5, #6366f1, #a855f7, #4f46e5)', backgroundSize: '220% 220%' }}
            >
              <span className="relative z-10 inline-flex items-center gap-1.5">
                Book a call
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </a>
          </Magnetic>
          <button
            type="button"
            className={`-m-2 inline-flex items-center justify-center rounded-md p-2 transition-colors lg:hidden ${light ? 'text-white/90 hover:text-white' : 'text-ink-muted hover:text-ink'}`}
            onClick={() => setMobileOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </motion.nav>

      <Dialog as="div" className="lg:hidden" open={mobileOpen} onClose={setMobileOpen}>
        <div className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-canvas px-6 py-6 sm:max-w-sm sm:border-l sm:border-ink-line">
          <div className="flex items-center justify-between">
            <BrandMark light={false} />
            <button type="button" className="-m-2 rounded-md p-2 text-ink-muted" onClick={() => setMobileOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 divide-y divide-ink-line/70">
            <div className="pb-6">
              <p className="eyebrow mb-3 px-1 text-ink-muted">Products</p>
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/${product.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="-mx-2 flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-canvas-soft"
                >
                  <span
                    className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg text-sm font-semibold text-white"
                    style={{ backgroundImage: product.theme.gradient }}
                  >
                    {product.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-base font-semibold leading-tight text-ink">{product.name}</span>
                    <span className="block text-xs text-ink-muted">{product.category}</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="space-y-1 py-6">
              {sectionLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="-mx-2 block rounded-lg px-2 py-2.5 text-base font-medium text-ink hover:bg-canvas-soft"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="pt-6">
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-full px-6 py-3 text-center text-sm font-semibold text-white shadow-soft"
                style={{ backgroundImage: 'linear-gradient(110deg, #4f46e5, #6366f1, #a855f7)' }}
              >
                Book a call
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
