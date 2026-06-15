/**
 * Hero — homepage hero rendered inside a dark accent band.
 *
 * Instrument Serif headline, mono eyebrow, dual CTA, and a teaser row of the
 * four products (each in its own accent) linking into the showcase below.
 */
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import DarkBand from './DarkBand';
import { products } from '../lib/products';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <DarkBand className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            className="eyebrow mb-6 text-night-muted"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            Wisdom-driven AI · Hyderabad &amp; Eindhoven
          </motion.p>

          <motion.h1
            className="font-display text-5xl leading-[1.05] tracking-tightish text-night-ink sm:text-6xl lg:text-7xl"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            Wisdom-driven AI{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(120deg, #818cf8 0%, #c084fc 55%, #22d3ee 100%)' }}
            >
              products &amp; consulting
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-night-muted sm:text-xl"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            We build focused AI products — for valuation, meetings, learning and health — and help
            businesses become genuinely AI-ready. Real tools in production, not slideware.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-night shadow-liftlg transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Explore products
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-night-ink backdrop-blur transition-colors hover:bg-white/10"
            >
              Book a call
            </a>
          </motion.div>
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
              className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundImage: p.theme.gradient }} />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-night-ink">{p.name}</span>
                <span className="block truncate text-[11px] text-night-muted">{p.category}</span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </DarkBand>
  );
}
