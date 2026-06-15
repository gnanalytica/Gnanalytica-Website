/**
 * ProductsShowcase — the four Gnanalytica products, each in its own accent.
 *
 * Responsive grid (1 → 2 → 4 across). Cards link to the dedicated product page;
 * the accent CTA opens the live product. Driven entirely by lib/products.js.
 */
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { products } from '../lib/products';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
};

function ProductCard({ product, index }) {
  const { theme } = product;
  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-line bg-canvas-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      variants={fadeUp}
    >
      <span className="absolute inset-x-0 top-0 h-1" style={{ backgroundImage: theme.gradient }} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-center gap-3">
          <span
            className="grid h-11 w-11 place-items-center rounded-xl text-base font-semibold text-white shadow-soft"
            style={{ backgroundImage: theme.gradient }}
          >
            {product.name.charAt(0)}
          </span>
          <div>
            <h3 className="text-lg font-semibold leading-tight tracking-tight text-ink" style={{ fontFamily: 'Inter, sans-serif' }}>
              {product.name}
            </h3>
            <p className="eyebrow mt-1" style={{ color: theme.primary }}>
              {product.category}
            </p>
          </div>
        </div>

        <p className="font-display text-xl leading-snug text-ink">{product.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{product.summary}</p>

        <div className="mt-6 flex items-center justify-between border-t border-ink-line pt-4">
          <Link
            href={`/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
            style={{ color: theme.primary }}
          >
            Learn more
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-ink-muted transition-colors hover:text-ink"
          >
            {product.cta}
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsShowcase() {
  return (
    <section id="products" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <p className="eyebrow mb-4 text-ink-muted">Our products</p>
          <h2 className="font-display text-4xl tracking-tightish text-ink sm:text-5xl">
            Four products, one philosophy
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Each tool replaces a tangle of spreadsheets and busywork with one focused flow — and
            keeps a human in control of every decision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
