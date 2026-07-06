/**
 * ProductsShowcase — the four products as a neobrutalist bento grid.
 *
 * Asymmetric 12-column bento (7/5 then 5/7) so the eye zigzags down the page.
 * Every card is a hard-bordered tile with a flat accent header, a giant display
 * letter, and press-down link chips. Cards stagger in with GSAP as they enter.
 */
import Link from 'next/link';
import { ArrowUpRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { products } from '../lib/products';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';
import Starburst from './ui/Starburst';

const spans = [
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-7',
];

function ProductCard({ product, index }) {
  const { theme } = product;
  return (
    <Reveal delay={(index % 2) * 0.12} className={`h-full ${spans[index % spans.length]}`}>
      <div className="neo-hover group flex h-full flex-col border-3 border-ink bg-paper-card shadow-neo">
        {/* flat accent header strip */}
        <div
          className="flex items-center justify-between border-b-3 border-ink px-5 py-3"
          style={{ background: theme.primary }}
        >
          <span className="font-display text-sm uppercase tracking-wide text-white">
            {product.name}
          </span>
          <span className="eyebrow border-2 border-ink bg-paper-card px-2 py-1.5 text-ink">
            {product.category}
          </span>
        </div>

        <div className="relative flex flex-1 flex-col p-6 sm:p-7">
          <span
            className="pointer-events-none absolute -right-1 bottom-0 select-none font-display text-[7rem] leading-none opacity-[0.07] sm:text-[9rem]"
            aria-hidden="true"
          >
            {product.name.charAt(0)}
          </span>

          <h3 className="font-display text-2xl uppercase leading-tight text-ink sm:text-3xl">
            {product.tagline}
          </h3>
          <p className="mt-4 flex-1 text-sm font-medium leading-relaxed text-ink-muted sm:text-base">
            {product.summary}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={`/${product.slug}`}
              className="btn-neo px-4 py-2.5 text-xs text-white"
              style={{ background: theme.primary }}
            >
              Learn more
              <ArrowRightIcon className="h-3.5 w-3.5 stroke-[3]" />
            </Link>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neo bg-paper-card px-4 py-2.5 text-xs text-ink"
            >
              {product.cta}
              <ArrowUpRightIcon className="h-3.5 w-3.5 stroke-[3]" />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProductsShowcase() {
  return (
    <section id="products" className="relative border-b-3 border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <p className="neo-tag rotate-[1deg] bg-sky text-ink">Our products</p>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl uppercase leading-[1.02] tracking-tight text-ink sm:text-5xl">
            <SplitText text="Four products," onScroll as="span" className="block" />
            <SplitText text="one philosophy" onScroll delay={0.15} as="span" className="marker block w-fit" />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-ink-muted">
              Each tool replaces a tangle of spreadsheets and busywork with one focused flow — and keeps
              a human in control of every decision.
            </p>
          </Reveal>
        </div>

        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-12">
          <span className="absolute -top-12 right-2 hidden lg:block" aria-hidden="true">
            <Starburst size={88} fill="#FFC700" spin />
          </span>
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
