/**
 * ProductsShowcase — the product ledger: each product is a full-width row
 * that expands to its tagline, summary and links. One row open at a time;
 * the first starts open. The stealth product sits as the final, link-less
 * row. The trust promise panel closes the section. Driven by lib/products.js.
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { products, stealthProduct } from '../lib/products';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Pill({ href, external = false, primary = false, children }) {
  const cls =
    'inline-flex items-center rounded-full border px-5 py-2 text-sm font-semibold transition-colors duration-200';
  const style = { borderColor: 'var(--gn-line)', color: 'var(--gn-ink)' };
  const hover = primary ? 'hover:border-[color:var(--gn-accent)] hover:bg-[color:var(--gn-accent)] hover:text-[color:var(--gn-accent-ink)]' : 'hover:border-[color:var(--gn-ink)]';
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${cls} ${hover}`} style={style}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${cls} ${hover}`} style={style}>
      {children}
    </Link>
  );
}

function LedgerRow({ ix, name, category, tagline, summary, open, onToggle, panelId, children }) {
  return (
    <div className="border-b" style={{ borderColor: 'var(--gn-line)' }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="grid w-full grid-cols-[44px_1fr_24px] items-center gap-4 py-6 text-left sm:grid-cols-[72px_1fr_auto_28px]"
      >
        <span className="font-brico text-2xl font-bold sm:text-3xl" style={{ color: open ? 'var(--gn-accent)' : 'var(--gn-muted)' }} aria-hidden="true">
          {ix}
        </span>
        <span className="font-brico text-2xl font-semibold tracking-tight sm:text-4xl" style={{ color: 'var(--gn-ink)' }}>
          {name}
        </span>
        <span className="hidden whitespace-nowrap text-sm sm:block" style={{ color: 'var(--gn-muted)' }}>
          {category}
        </span>
        <span className="relative h-6 w-6 justify-self-end" aria-hidden="true">
          <span className="absolute inset-0 m-auto h-0.5 w-4" style={{ backgroundColor: open ? 'var(--gn-accent)' : 'var(--gn-muted)' }} />
          <span
            className="absolute inset-0 m-auto h-4 w-0.5 transition-transform duration-300"
            style={{ backgroundColor: open ? 'var(--gn-accent)' : 'var(--gn-muted)', transform: open ? 'rotate(90deg)' : 'none' }}
          />
        </span>
      </button>
      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="min-w-0 overflow-hidden">
          <div className="grid gap-4 pb-8 sm:grid-cols-[72px_1fr]">
            <span aria-hidden="true" className="hidden sm:block" />
            <div className="max-w-2xl">
              <p className="font-brico text-xl font-medium leading-snug sm:text-2xl" style={{ color: 'var(--gn-sec)' }}>
                {tagline}
              </p>
              <p className="mt-3 leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
                {summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsShowcase() {
  const [openSlug, setOpenSlug] = useState(products[0]?.slug ?? null);
  const toggle = (slug) => setOpenSlug((cur) => (cur === slug ? null : slug));

  return (
    <section id="products" className="relative py-20 sm:py-28" style={{ backgroundColor: 'var(--gn-bg)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <p className="gn-kicker mb-4">Our products</p>
          <h2 className="text-4xl leading-tight sm:text-5xl" style={{ color: 'var(--gn-ink)' }}>
            Three products, one philosophy — and a fourth in stealth
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
            Each tool replaces a tangle of spreadsheets and busywork with one focused flow — and
            keeps a human in control of every decision. Open one to see what it does.
          </p>
        </motion.div>

        <motion.div
          className="border-t"
          style={{ borderColor: 'var(--gn-line)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
        >
          {products.map((product) => (
            <LedgerRow
              key={product.slug}
              ix={product.name.charAt(0)}
              name={product.name}
              category={product.category}
              tagline={product.tagline}
              summary={product.summary}
              open={openSlug === product.slug}
              onToggle={() => toggle(product.slug)}
              panelId={`product-${product.slug}`}
            >
              <Pill href={product.url} external primary>
                {product.cta}
              </Pill>
              <Pill href={`/${product.slug}`}>Learn more</Pill>
            </LedgerRow>
          ))}
          <LedgerRow
            ix="R"
            name={stealthProduct.name}
            category="Stealth mode"
            tagline={stealthProduct.tagline}
            summary={stealthProduct.summary}
            open={openSlug === 'stealth'}
            onToggle={() => toggle('stealth')}
            panelId="product-stealth"
          >
            <Pill href={stealthProduct.cta.href}>{stealthProduct.cta.label}</Pill>
          </LedgerRow>
        </motion.div>

        {/* trust promise */}
        <motion.div
          className="mt-16 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="font-brico text-2xl font-medium leading-relaxed sm:text-3xl" style={{ color: 'var(--gn-ink)' }}>
            Everything we ship is <span className="gn-hl">quality you can audit</span>,{' '}
            <span className="gn-hl">compliant by design</span>, and <span className="gn-hl">personalised</span> to
            the way you actually work.
          </p>
          <p className="mt-4 leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
            Data residency, audit trails and explainability are features from day one. AI proposes; you
            decide. That holds for every product above — and for everything we build for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
