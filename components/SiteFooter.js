/**
 * SiteFooter — dark navy footer shared across the site.
 *
 * Masked brand logo + products, quick links and the company's real contact
 * and registration details (Eindhoven, NL and Bengaluru, India). Stays on
 * the dark navy surface in both themes.
 */
import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { products, stealthProduct } from '../lib/products';

const quickLinks = [
  { name: 'Services', href: '/#services' },
  { name: 'Process', href: '/#process' },
  { name: 'About', href: '/#about' },
  { name: 'Privacy policy', href: '/privacy-policy' },
  { name: 'Terms & conditions', href: '/terms-and-conditions' },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden text-[#8da0b8]" style={{ backgroundColor: '#0a1322' }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 60% at 12% 0%, rgba(232,85,78,0.12) 0%, transparent 60%), radial-gradient(45% 50% at 90% 10%, rgba(127,178,229,0.10) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <BrandLogo className="h-8 w-[59px]" onDark />
              <span className="font-brico text-[17px] font-bold tracking-tight text-[#f2efe6]">Gnanalytica</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              Wisdom-driven AI products and consulting. Focused tools for valuation, meetings and
              learning — and help becoming genuinely AI-ready.
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-[#fff6f0] shadow-soft transition-transform hover:-translate-y-0.5" style={{ backgroundColor: '#e8554e' }}
            >
              Schedule a discovery call
            </a>
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-[#f2efe6]">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/${product.slug}`} className="text-sm transition-colors hover:text-[#f2efe6]">
                    {product.name}
                  </Link>
                </li>
              ))}
              <li className="text-sm">
                {stealthProduct.name} — {stealthProduct.chip}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-[#f2efe6]">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm transition-colors hover:text-[#f2efe6]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-[#f2efe6]">Get in touch</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#e8554e]" />
                <a href="mailto:contact@gnanalytica.com" className="break-all transition-colors hover:text-[#f2efe6]">
                  contact@gnanalytica.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#e8554e]" />
                <a href="tel:+31687018349" className="transition-colors hover:text-[#f2efe6]">
                  +31 6 87018349
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#e8554e]" />
                <span>Eindhoven, Netherlands</span>
              </div>
              <div className="border-t border-white/10 pt-4 text-xs leading-relaxed">
                <p>KVK 98649035 · BTW NL005345555B41</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#e8554e]" />
                <address className="not-italic">
                  Gnanalytica Technologies LLP
                  <br />
                  B-1-205 Shraddha White Cliff Apt
                  <br />
                  Seegehalli
                  <br />
                  Bengaluru 560067
                  <br />
                  India
                </address>
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
