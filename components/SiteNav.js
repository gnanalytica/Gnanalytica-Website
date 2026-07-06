/**
 * SiteNav — neobrutalist primary navigation, shared by every page.
 *
 * A cream bar that grows a hard black bottom border + shadow once you scroll.
 * Links are mono uppercase with a yellow marker sweep on hover; the products
 * dropdown is a bordered card with flat accent tiles; the CTA is a press-down
 * acid-yellow button. The brand letters wave with anime.js on hover.
 */
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { animate, stagger } from 'animejs';
import { products } from '../lib/products';
import { prefersReducedMotion } from '../lib/gsapClient';

const sectionLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Process', href: '/#process' },
  { name: 'About', href: '/#about' },
];

function BrandMark() {
  const ref = useRef(null);
  const busy = useRef(false);

  const wave = () => {
    if (busy.current || prefersReducedMotion()) return;
    busy.current = true;
    animate(ref.current.querySelectorAll('.brand-letter'), {
      translateY: [0, -5, 0],
      duration: 500,
      delay: stagger(28),
      ease: 'outQuad',
      onComplete: () => {
        busy.current = false;
      },
    });
  };

  return (
    <Link href="/" ref={ref} onMouseEnter={wave} className="group flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center border-2 border-ink bg-acid shadow-neo-xs transition-transform duration-150 group-hover:-rotate-6">
        <span className="font-display text-[17px] leading-none text-ink">G</span>
      </span>
      <span className="hidden font-display text-[15px] uppercase tracking-tight text-ink xs:block">
        {'Gnanalytica'.split('').map((ch, i) => (
          <span key={i} className="brand-letter inline-block">
            {ch}
          </span>
        ))}
      </span>
    </Link>
  );
}

// Mono uppercase link with a yellow marker that sweeps in behind the label.
function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="eyebrow group relative px-1 py-2 text-ink">
      <span className="absolute inset-x-0 bottom-1 top-1 origin-left scale-x-0 bg-acid transition-transform duration-200 group-hover:scale-x-100" />
      <span className="relative">{children}</span>
    </a>
  );
}

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`bg-paper transition-[box-shadow,border-color] duration-200 ${
          scrolled ? 'border-b-3 border-ink shadow-neo-sm' : 'border-b-3 border-transparent'
        }`}
        aria-label="Global"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <BrandMark />

          <div className="hidden items-center gap-6 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="eyebrow group relative flex items-center gap-1.5 px-1 py-2 text-ink">
                <span className="absolute inset-x-0 bottom-1 top-1 origin-left scale-x-0 bg-acid transition-transform duration-200 group-hover:scale-x-100" />
                <span className="relative">Products</span>
                <ChevronDownIcon
                  className={`relative h-3.5 w-3.5 stroke-[3] transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {productsOpen && (
                <div className="absolute left-1/2 top-full w-[24rem] -translate-x-1/2 pt-3">
                  <div className="border-2 border-ink bg-paper-card p-2 shadow-neo-lg">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/${product.slug}`}
                        className="group/item flex items-start gap-3 border-2 border-transparent p-3 transition-colors hover:border-ink hover:bg-paper"
                      >
                        <span
                          className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center border-2 border-ink font-display text-sm text-white shadow-neo-xs"
                          style={{ background: product.theme.primary }}
                        >
                          {product.name.charAt(0)}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-bold uppercase tracking-wide text-ink">
                            {product.name}
                          </span>
                          <span className="block text-xs leading-snug text-ink-muted">{product.tagline}</span>
                        </span>
                        <ArrowRightIcon className="mt-1 h-4 w-4 -translate-x-1 stroke-[2.5] text-ink opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {sectionLinks.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="btn-neo hidden bg-acid px-5 py-2.5 text-xs text-ink sm:inline-flex"
            >
              Book a call
              <ArrowRightIcon className="h-3.5 w-3.5 stroke-[3]" />
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center border-2 border-ink bg-paper-card text-ink shadow-neo-xs lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-5 w-5 stroke-[2.5]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileOpen} onClose={setMobileOpen}>
        <div className="fixed inset-0 z-50 bg-ink/40" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l-3 border-ink bg-paper px-6 py-5 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <BrandMark />
            <button
              type="button"
              className="grid h-10 w-10 place-items-center border-2 border-ink bg-paper-card text-ink shadow-neo-xs"
              onClick={() => setMobileOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-5 w-5 stroke-[2.5]" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8">
            <p className="eyebrow mb-3 text-ink-muted">Products</p>
            <div className="space-y-2.5">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/${product.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 border-2 border-ink bg-paper-card p-3 shadow-neo-sm"
                >
                  <span
                    className="grid h-9 w-9 flex-shrink-0 place-items-center border-2 border-ink font-display text-sm text-white"
                    style={{ background: product.theme.primary }}
                  >
                    {product.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold uppercase tracking-wide text-ink">{product.name}</span>
                    <span className="block text-xs text-ink-muted">{product.category}</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-6 space-y-2.5 border-t-2 border-ink pt-6">
              {sectionLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="eyebrow block border-2 border-ink bg-paper-card px-4 py-3.5 text-ink shadow-neo-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-neo mt-6 w-full bg-acid px-6 py-3.5 text-sm text-ink"
            >
              Book a call
              <ArrowRightIcon className="h-4 w-4 stroke-[3]" />
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
