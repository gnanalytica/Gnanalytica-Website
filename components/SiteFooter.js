/**
 * SiteFooter — ink-black neobrutalist footer shared across the site.
 *
 * Brand + products, quick links and the company's real contact and registration
 * details (Eindhoven, NL), closed out by a giant outlined GNANALYTICA wordmark
 * that fills the bottom edge.
 */
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { products } from '../lib/products';

const quickLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Process', href: '/#process' },
  { name: 'About', href: '/#about' },
  { name: 'Book a call', href: '/#contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-and-conditions' },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t-3 border-ink bg-night text-night-muted">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b-2 border-paper/20 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center border-2 border-paper bg-acid shadow-neo-light">
                <span className="font-display text-[17px] leading-none text-ink">G</span>
              </span>
              <span className="font-display text-[15px] uppercase tracking-tight text-night-ink">
                Gnanalytica
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm font-medium leading-relaxed">
              Wisdom-driven AI products and consulting. We build focused tools for valuation, meetings,
              learning and health — and help businesses become genuinely AI-ready.
            </p>
            <a
              href="/#contact"
              className="btn-neo mt-6 border-paper bg-acid px-5 py-3 text-xs text-ink shadow-neo-light hover:shadow-neo-light-lg"
            >
              Schedule a discovery call
            </a>
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-night-ink">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/${product.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-night-ink"
                  >
                    <span className="h-2.5 w-2.5 border border-paper/60" style={{ background: product.theme.primary }} />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-night-ink">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-medium transition-colors hover:text-night-ink">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-night-ink">Get in touch</h3>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="mt-0.5 h-4 w-4 flex-shrink-0 stroke-[2] text-acid" />
                <a href="mailto:contact@gnanalytica.com" className="break-all transition-colors hover:text-night-ink">
                  contact@gnanalytica.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 flex-shrink-0 stroke-[2] text-acid" />
                <a href="tel:+919980856880" className="transition-colors hover:text-night-ink">
                  +91 99808 56880
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 stroke-[2] text-acid" />
                <span>Eindhoven, Netherlands</span>
              </div>
              <div className="border-t-2 border-paper/20 pt-4 font-mono text-xs leading-relaxed">
                <p>KVK 98649035 · BTW NL005345555B41</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-wider">
            &copy; {year} Gnanalytica. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider">Wisdom-driven AI products &amp; consulting</p>
        </div>
      </div>

      {/* giant outlined wordmark bleeding off the bottom edge */}
      <div className="pointer-events-none relative select-none overflow-hidden" aria-hidden="true">
        <p className="text-stroke-paper -mb-[0.24em] whitespace-nowrap text-center font-display text-[13.5vw] uppercase leading-none opacity-40">
          Gnanalytica
        </p>
      </div>
    </footer>
  );
}
