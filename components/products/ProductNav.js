/**
 * Navigation bar for individual product landing pages.
 *
 * Keeps a consistent Gnanalytica frame around each product: a link home, a
 * switcher to sibling products, and a product-themed CTA that opens the live
 * application on its subdomain.
 */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ArrowUpRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { products } from '../../lib/products';

export default function ProductNav({ product }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = product;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const siblings = products.filter((p) => p.slug !== product.slug);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-premium'
          : 'bg-white/60 backdrop-blur-lg border-b border-gray-200/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4" aria-label="Global">
        {/* Brand: Gnanalytica → product */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/images/logos/gnanalytica-logo.png" alt="Gnanalytica" className="h-7 w-auto" />
            <span className="hidden sm:inline text-sm font-medium text-editorial-muted group-hover:text-editorial-ink transition-colors tracking-tight">
              Gnanalytica
            </span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-lg font-bold tracking-tight" style={{ color: theme.primary, fontFamily: 'Playfair Display, serif' }}>
            {product.name}
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-editorial-charcoal hover:text-editorial-ink transition-colors tracking-wide">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-editorial-charcoal hover:text-editorial-ink transition-colors tracking-wide">How it works</a>
          {siblings.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="text-sm font-medium text-editorial-muted hover:text-editorial-ink transition-colors tracking-wide">
              {s.name}
            </Link>
          ))}
          <motion.a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 text-white font-semibold rounded-lg shadow-premium-lg transition-all duration-300 tracking-wide"
            style={{ backgroundImage: theme.gradient }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            Open App
            <ArrowUpRightIcon className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-editorial-charcoal"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold tracking-tight" style={{ color: theme.primary, fontFamily: 'Playfair Display, serif' }}>
              {product.name}
            </span>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Features</a>
                <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">How it works</a>
              </div>
              <div className="py-6">
                <p className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Other products</p>
                {siblings.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}`} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    {s.name}
                  </Link>
                ))}
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="-mx-3 mt-2 flex items-center gap-1 rounded-lg px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50">
                  <ChevronLeftIcon className="w-4 h-4" /> Back to Gnanalytica
                </Link>
              </div>
              <div className="py-6">
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 px-8 py-3 text-white font-semibold rounded-lg shadow-premium-lg tracking-wide"
                  style={{ backgroundImage: theme.gradient }}
                >
                  Open App <ArrowUpRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  );
}
