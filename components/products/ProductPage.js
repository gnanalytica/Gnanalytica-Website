/**
 * Reusable, data-driven product landing page.
 *
 * Renders a themed page for any product defined in lib/products.js, in the
 * unified Gnanalytica system (warm editorial base, Instrument Serif display,
 * shared nav/footer). All product-specific colour comes from the theme object
 * via inline styles so a single template serves every product.
 */
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import SiteNav from '../SiteNav';
import SiteFooter from '../SiteFooter';
import Magnetic from '../Magnetic';
import CountUp from '../CountUp';
import { getIcon } from './icons';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ProductPage({ product }) {
  const { theme, hero } = product;

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteNav />

      <main>
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0"
              style={{ background: `radial-gradient(60% 55% at 80% 0%, ${theme.soft} 0%, transparent 60%)` }}
            />
            <motion.div
              className="absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full blur-3xl"
              style={{ background: theme.gradient, opacity: 0.16 }}
              animate={{ scale: [1, 1.12, 1], x: [0, 36, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <div className="lg:col-span-7">
              <motion.p className="eyebrow mb-5" style={{ color: theme.primary }} initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                {hero.kicker || product.category}
              </motion.p>

              <motion.h1
                className="font-display text-4xl leading-[1.05] tracking-tightish text-ink sm:text-6xl lg:text-7xl"
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeUp}
              >
                {hero.title}{' '}
                <span className="gradient-text block" style={{ backgroundImage: theme.textGradient }}>
                  {hero.highlight}
                </span>
              </motion.h1>

              <motion.p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl" initial="hidden" animate="visible" custom={2} variants={fadeUp}>
                {hero.subtitle}
              </motion.p>

              <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" initial="hidden" animate="visible" custom={3} variants={fadeUp}>
                <Magnetic strength={0.45}>
                  <a
                    href={hero.ctaPrimary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sheen-host group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-lift"
                    style={{ backgroundImage: theme.gradient }}
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      {hero.ctaPrimary.label}
                      <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <a
                    href={hero.ctaSecondary.href}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-line bg-canvas-card px-7 py-3.5 text-sm font-semibold text-ink shadow-soft transition-all hover:shadow-lift"
                  >
                    {hero.ctaSecondary.label}
                  </a>
                </Magnetic>
              </motion.div>

              {hero.principle && (
                <motion.p className="mt-8 flex items-center gap-2 text-sm font-medium" style={{ color: theme.primary }} initial="hidden" animate="visible" custom={4} variants={fadeUp}>
                  <span className="inline-block h-px w-8" style={{ background: theme.primary }} />
                  {hero.principle}
                </motion.p>
              )}
            </div>

            {/* product preview card */}
            <motion.div
              className="hidden lg:col-span-5 lg:block"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl p-1 shadow-liftlg animate-float-slow" style={{ backgroundImage: theme.gradient }}>
                <div className="space-y-3 rounded-xl bg-canvas-card p-6">
                  <div className="flex items-center justify-between border-b border-ink-line pb-3">
                    <span className="text-sm font-semibold" style={{ color: theme.primary }}>{product.name}</span>
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    </div>
                  </div>
                  {product.features.slice(0, 3).map((f) => {
                    const Icon = getIcon(f.icon);
                    return (
                      <div key={f.title} className="flex items-center gap-3 rounded-lg p-3" style={{ background: theme.soft }}>
                        <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg" style={{ backgroundImage: theme.gradient }}>
                          <Icon className="h-5 w-5 text-white" />
                        </span>
                        <span className="text-sm font-medium text-ink">{f.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───────────────────────── Stats ───────────────────────── */}
        <section className="border-y border-ink-line bg-canvas-soft py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {product.stats.map((s, i) => (
              <motion.div key={s.label} className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} custom={i} variants={fadeUp}>
                <div className="font-display text-3xl tracking-tightish sm:text-4xl" style={{ color: theme.primary }}>
                  <CountUp value={s.value} />
                </div>
                <div className="mt-1 text-sm text-ink-muted">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ───────────────────────── Features ───────────────────────── */}
        <section id="features" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="mx-auto mb-14 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
              <p className="eyebrow mb-4" style={{ color: theme.primary }}>{product.category}</p>
              <h2 className="font-display text-4xl tracking-tightish text-ink sm:text-5xl">Everything in one focused flow</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">{product.summary}</p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {product.features.map((f, i) => {
                const Icon = getIcon(f.icon);
                return (
                  <motion.div
                    key={f.title}
                    className="group relative overflow-hidden rounded-2xl border border-ink-line bg-canvas-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={i}
                    variants={fadeUp}
                  >
                    <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ backgroundImage: theme.gradient }} />
                    <span className="grid h-12 w-12 place-items-center rounded-xl shadow-soft" style={{ backgroundImage: theme.gradient }}>
                      <Icon className="h-6 w-6 text-white" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────── How it works ───────────────────────── */}
        <section id="how-it-works" className="py-20 sm:py-28" style={{ background: theme.soft }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="mx-auto mb-14 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
              <p className="eyebrow mb-4" style={{ color: theme.primary }}>How it works</p>
              <h2 className="font-display text-4xl tracking-tightish text-ink sm:text-5xl">{hero.principle || 'How it works'}</h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {product.steps.map((step, i) => (
                <motion.div key={step.title} className="relative rounded-2xl border border-ink-line bg-canvas-card p-6 shadow-soft" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={i} variants={fadeUp}>
                  <span className="font-display text-5xl leading-none" style={{ color: `${theme.accent}55` }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                  {i < product.steps.length - 1 && (
                    <ArrowRightIcon className="absolute top-7 -right-3 hidden h-6 w-6 lg:block" style={{ color: `${theme.accent}99` }} />
                  )}
                </motion.div>
              ))}
            </div>

            {product.note && (
              <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-ink-muted">{product.note}</p>
            )}
          </div>
        </section>

        {/* ───────────────────────── Closing CTA ───────────────────────── */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0" style={{ backgroundImage: theme.gradient }} />
          <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 0%, transparent 40%)' }} />
          <motion.div
            className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <h2 className="font-display text-4xl tracking-tightish sm:text-5xl">{product.closing.title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90">{product.closing.subtitle}</p>
            <a
              href={product.closing.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold shadow-liftlg transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ color: theme.primary }}
            >
              {product.closing.cta.label}
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
