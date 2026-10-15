/**
 * SiteNav — fixed primary navigation, shared by the homepage and product pages.
 *
 * Brand-refresh styling: the masked logo mark, theme-token colors, a hairline
 * bottom border and a solid brand-red CTA. On the homepage (`themed`) the bar
 * follows the light/dark theme and carries the ThemeToggle; on product pages
 * it keeps the legacy adaptive behaviour (`heroOnDark` renders light links
 * over the dark hero until the page scrolls).
 */
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { products } from '../lib/products';
import BrandLogo from './BrandLogo';
import ThemeToggle from './ThemeToggle';
import Magnetic from './Magnetic';

const aboutLink = { name: 'About', href: '/#about' };

const sectionLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Process', href: '/#process' },
];

function BrandMark({ light }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <BrandLogo className="h-7 w-[52px] transition-transform duration-300 group-hover:scale-105" onDark={light} />
      <span
        className="font-brico text-[17px] font-bold tracking-tight transition-colors"
        style={{ color: light ? '#f2efe6' : 'var(--gn-ink)' }}
      >
        Gnanalytica
      </span>
    </Link>
  );
}

// A nav link with a brand-red underline that wipes in on hover.
function NavLink({ href, children, light, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative text-sm font-medium transition-colors"
      style={{ color: light ? 'rgba(242,239,230,0.8)' : 'var(--gn-muted)' }}
    >
      {children}
      <span
        className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
        style={{ background: 'var(--gn-accent)' }}
      />
    </a>
  );
}

export default function SiteNav({ heroOnDark = false, themed = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Legacy product-page behaviour: light links only at the top over a dark hero.
  const light = !themed && heroOnDark && !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mx-auto flex max-w-7xl items-center justify-between border-b px-4 py-3.5 backdrop-blur-xl transition-colors duration-300 sm:px-6 lg:px-8"
        style={{
          backgroundColor: light ? 'transparent' : 'color-mix(in srgb, var(--gn-bg) 80%, transparent)',
          borderColor: light ? 'transparent' : 'var(--gn-line)',
        }}
        aria-label="Global"
      >
        <BrandMark light={light} />

        <div className="hidden items-center gap-8 lg:flex">
          <NavLink href={aboutLink.href} light={light}>
            {aboutLink.name}
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className="group relative flex items-center gap-1 text-sm font-medium transition-colors"
              style={{ color: light ? 'rgba(242,239,230,0.8)' : 'var(--gn-muted)' }}
            >
              Products
              <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
              <span
                className="absolute -bottom-1.5 left-0 h-0.5 w-[calc(100%-1.25rem)] origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: 'var(--gn-accent)' }}
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
                  <div
                    className="rounded-2xl border p-2 shadow-liftlg backdrop-blur-xl"
                    style={{ borderColor: 'var(--gn-line)', backgroundColor: 'color-mix(in srgb, var(--gn-surface) 95%, transparent)' }}
                  >
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/${product.slug}`}
                        className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[color:var(--gn-bg2)]"
                      >
                        <span
                          className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg text-sm font-semibold text-white transition-transform duration-300 group-hover/item:scale-105"
                          style={{ backgroundImage: product.theme.gradient }}
                        >
                          {product.name.charAt(0)}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold" style={{ color: 'var(--gn-ink)' }}>
                            {product.name}
                          </span>
                          <span className="block text-xs leading-snug" style={{ color: 'var(--gn-muted)' }}>
                            {product.tagline}
                          </span>
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
          {themed && <ThemeToggle className="hidden sm:inline-flex" />}
          <Magnetic strength={0.5} className="hidden sm:inline-flex">
            <a
              href="/#contact"
              className="relative inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              style={{ backgroundColor: 'var(--gn-accent)', color: 'var(--gn-accent-ink)' }}
            >
              Book a call
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </Magnetic>
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-md p-2 transition-colors lg:hidden"
            style={{ color: light ? 'rgba(242,239,230,0.9)' : 'var(--gn-muted)' }}
            onClick={() => setMobileOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </motion.nav>

      <Dialog as="div" className="lg:hidden" open={mobileOpen} onClose={setMobileOpen}>
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
        <Dialog.Panel
          className="gn-home fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:border-l"
          style={{ backgroundColor: 'var(--gn-bg)', borderColor: 'var(--gn-line)' }}
        >
          <div className="flex items-center justify-between">
            <BrandMark light={false} />
            <button type="button" className="-m-2 rounded-md p-2" style={{ color: 'var(--gn-muted)' }} onClick={() => setMobileOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 divide-y" style={{ borderColor: 'var(--gn-line)' }}>
            <div className="pb-6">
              <p className="gn-kicker mb-3 px-1 text-xs">Products</p>
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/${product.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="-mx-2 flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-[color:var(--gn-bg2)]"
                >
                  <span
                    className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg text-sm font-semibold text-white"
                    style={{ backgroundImage: product.theme.gradient }}
                  >
                    {product.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-base font-semibold leading-tight" style={{ color: 'var(--gn-ink)' }}>
                      {product.name}
                    </span>
                    <span className="block text-xs" style={{ color: 'var(--gn-muted)' }}>
                      {product.category}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="space-y-1 py-6" style={{ borderColor: 'var(--gn-line)' }}>
              {[aboutLink, ...sectionLinks].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="-mx-2 block rounded-lg px-2 py-2.5 text-base font-medium hover:bg-[color:var(--gn-bg2)]"
                  style={{ color: 'var(--gn-ink)' }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-6" style={{ borderColor: 'var(--gn-line)' }}>
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="block flex-1 rounded-full px-6 py-3 text-center text-sm font-semibold shadow-soft"
                style={{ backgroundColor: 'var(--gn-accent)', color: 'var(--gn-accent-ink)' }}
              >
                Book a call
              </a>
              {themed && <ThemeToggle />}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
