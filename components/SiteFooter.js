/**
 * SiteFooter — dark editorial footer shared across the site.
 *
 * Brand mark + products, quick links and the company's real contact and
 * registration details (Eindhoven, NL).
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
    <footer className="relative overflow-hidden bg-night text-night-muted">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 60% at 12% 0%, rgba(99,102,241,0.14) 0%, transparent 60%), radial-gradient(45% 50% at 90% 10%, rgba(168,85,247,0.10) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span
                className="grid h-8 w-8 place-items-center rounded-md text-white"
                style={{ backgroundImage: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 60%, #a855f7 100%)' }}
              >
                <span className="font-display text-[18px] leading-none">G</span>
              </span>
              <span className="text-[17px] font-semibold tracking-tight text-night-ink">Gnanalytica</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              Wisdom-driven AI products and consulting. We build focused tools for valuation,
              meetings, learning and health — and help businesses become genuinely AI-ready.
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-night shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Schedule a discovery call
            </a>
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-night-ink">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/${product.slug}`} className="text-sm transition-colors hover:text-night-ink">
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
                  <a href={link.href} className="text-sm transition-colors hover:text-night-ink">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-night-ink">Get in touch</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" />
                <a href="mailto:contact@gnanalytica.com" className="break-all transition-colors hover:text-night-ink">
                  contact@gnanalytica.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" />
                <a href="tel:+31687018349" className="transition-colors hover:text-night-ink">
                  +31 6 87018349
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" />
                <span>Eindhoven, Netherlands</span>
              </div>
              <div className="border-t border-white/10 pt-4 text-xs leading-relaxed">
                <p>KVK 98649035 · BTW NL005345555B41</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs">&copy; {year} Gnanalytica. All rights reserved.</p>
          <p className="text-xs">Wisdom-driven AI products &amp; consulting</p>
        </div>
      </div>
    </footer>
  );
}
