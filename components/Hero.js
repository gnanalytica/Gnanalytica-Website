/**
 * Hero — theme-aware opener with the ambient halo canvas.
 *
 * One-line Bricolage Grotesque headline, centered lede and CTAs, a teaser
 * grid of the products (plus the one in stealth), and the slow tagline
 * marquee. The particle field behind everything drifts toward the pointer
 * and recolors with the theme. Content parallaxes gently as it scrolls away.
 */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import HaloCanvas from './HaloCanvas';
import Magnetic from './Magnetic';
import { products, stealthProduct } from '../lib/products';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '34%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const tickerItems = [
    ...products.map((p) => ({ key: p.slug, name: p.name, line: p.chip })),
    { key: 'stealth', name: stealthProduct.name, line: stealthProduct.chip },
  ];
  const marqueeItems = tickerItems.concat(tickerItems);

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20" style={{ backgroundColor: 'var(--gn-bg)' }}>
      <HaloCanvas />
      <div ref={ref} className="relative">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p className="gn-kicker mb-6" initial="hidden" animate="visible" custom={0} variants={fadeUp}>
              Three products · One in stealth
            </motion.p>

            <motion.h1
              className="whitespace-nowrap text-[clamp(26px,6.5vw,80px)] leading-tight"
              style={{ color: 'var(--gn-ink)' }}
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
            >
              AI that carries <span style={{ color: 'var(--gn-accent)' }}>wisdom.</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed sm:text-xl"
              style={{ color: 'var(--gn-muted)' }}
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
            >
              Gnanalytica builds focused AI products for valuation, meetings and learning — and helps
              businesses become genuinely AI-ready.{' '}
              <strong className="font-semibold" style={{ color: 'var(--gn-ink)' }}>
                Real tools in production:
              </strong>{' '}
              quality you can audit, compliance built in, and everything shaped to how you work.
            </motion.p>

            <motion.div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" initial="hidden" animate="visible" custom={3} variants={fadeUp}>
              <Magnetic strength={0.45}>
                <a
                  href="#products"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-liftlg transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: 'var(--gn-accent)', color: 'var(--gn-accent-ink)' }}
                >
                  Explore the products
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
              <Magnetic strength={0.35}>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:border-[color:var(--gn-accent)]"
                  style={{ borderColor: 'var(--gn-line)', color: 'var(--gn-ink)' }}
                >
                  Book a call
                </a>
              </Magnetic>
            </motion.div>
            <motion.p className="mt-4 text-xs" style={{ color: 'var(--gn-muted)' }} initial="hidden" animate="visible" custom={3} variants={fadeUp}>
              Free 30-minute session, no jargon
            </motion.p>
          </div>

          {/* product teaser row */}
          <motion.div
            className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
          >
            {products.map((p) => (
              <a
                key={p.slug}
                href={`/${p.slug}`}
                className="group flex items-center gap-2.5 rounded-xl border px-4 py-3 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--gn-accent)]"
                style={{ borderColor: 'var(--gn-line)', backgroundColor: 'color-mix(in srgb, var(--gn-surface) 55%, transparent)' }}
              >
                <span
                  className="h-2.5 w-2.5 flex-shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125"
                  style={{ backgroundColor: 'var(--gn-accent)' }}
                />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold" style={{ color: 'var(--gn-ink)' }}>
                    {p.name}
                  </span>
                  <span className="block truncate text-[11px]" style={{ color: 'var(--gn-muted)' }}>
                    {p.chip}
                  </span>
                </span>
              </a>
            ))}
            <a
              href={stealthProduct.cta.href}
              className="group flex items-center gap-2.5 rounded-xl border border-dashed px-4 py-3 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--gn-sec)]"
              style={{ borderColor: 'var(--gn-line)' }}
            >
              <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full border" style={{ borderColor: 'var(--gn-muted)' }} />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold" style={{ color: 'var(--gn-ink)' }}>
                  {stealthProduct.name}
                </span>
                <span className="block truncate text-[11px]" style={{ color: 'var(--gn-muted)' }}>
                  {stealthProduct.chip}
                </span>
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* tagline marquee */}
        <div className="relative mt-16 flex overflow-hidden border-y py-4" style={{ borderColor: 'var(--gn-line)', backgroundColor: 'var(--gn-bg2)' }}>
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 no-scrollbar">
            {marqueeItems.map((p, i) => (
              <span key={`${p.key}-${i}`} className="flex items-center gap-3 whitespace-nowrap text-sm" style={{ color: 'var(--gn-muted)' }}>
                <span className="text-xs" style={{ color: 'var(--gn-accent)' }}>
                  ✦
                </span>
                <span className="font-brico text-base font-semibold" style={{ color: 'var(--gn-ink)' }}>
                  {p.name}
                </span>
                <span className="italic">{p.line}</span>
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24" style={{ background: 'linear-gradient(to right, var(--gn-bg2), transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24" style={{ background: 'linear-gradient(to left, var(--gn-bg2), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
