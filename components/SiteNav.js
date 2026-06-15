/**
 * SiteNav — primary navigation, shared by the homepage and product pages.
 *
 * A light editorial glass bar: gradient brand mark + Gnanalytica wordmark, a
 * Products dropdown driven by lib/products.js, section links, and a primary
 * "Book a call" CTA. Becomes more opaque on scroll.
 */
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { products } from '../lib/products';

const sectionLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Process', href: '/#process' },
  { name: 'About', href: '/#about' },
];

function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span
        className="grid h-8 w-8 place-items-center rounded-md text-white shadow-soft transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 60%, #a855f7 100%)' }}
      >
        <span className="font-display text-[18px] leading-none">G</span>
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-ink">Gnanalytica</span>
    </Link>
  );
}

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-line/70 bg-canvas/85 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-canvas/40 backdrop-blur-md'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8" aria-label="Global">
        <BrandMark />

        <div className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-ink-muted transition-colors hover:text-ink">
              Products
              <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
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
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-canvas-soft"
                      >
                        <span
                          className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg text-sm font-semibold text-white"
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
            <a key={item.name} href={item.href} className="text-sm font-medium text-ink-muted transition-colors hover:text-ink">
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-brand-dark active:scale-[0.98] sm:inline-flex"
          >
            Book a call
          </a>
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-ink-muted hover:text-ink lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileOpen} onClose={setMobileOpen}>
        <div className="fixed inset-0 z-50 bg-ink/20" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-canvas px-6 py-6 sm:max-w-sm sm:border-l sm:border-ink-line">
          <div className="flex items-center justify-between">
            <BrandMark />
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
                className="block w-full rounded-lg bg-brand px-6 py-3 text-center text-sm font-semibold text-white shadow-soft"
              >
                Book a call
              </a>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  );
}
