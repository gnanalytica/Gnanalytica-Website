/**
 * Reusable, data-driven product landing page.
 *
 * Renders a themed, motion-rich page for any product defined in
 * lib/products.js. All product-specific colour comes from the theme object via
 * inline styles/gradients so a single template serves every product.
 */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRightIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import ProductNav from './ProductNav';
import Footer from '../Footer';
import { getIcon } from './icons';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ProductPage({ product }) {
  const { theme, hero } = product;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const orbY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen text-editorial-ink relative overflow-hidden bg-editorial-paper">
      <ProductNav product={product} />

      <main className="pt-16 sm:pt-20 relative z-10">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section ref={heroRef} className="relative min-h-[88vh] flex items-center overflow-hidden">
          {/* Themed animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0" style={{ background: `radial-gradient(60% 60% at 80% 0%, ${theme.soft} 0%, transparent 60%)` }} />
            <motion.div
              className="absolute -top-24 right-0 w-[34rem] h-[34rem] rounded-full blur-3xl"
              style={{ y: orbY, background: theme.gradient, opacity: 0.18 }}
              animate={{ scale: [1, 1.15, 1], x: [0, 40, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-0 -left-24 w-[26rem] h-[26rem] rounded-full blur-3xl"
              style={{ background: theme.gradient, opacity: 0.12 }}
              animate={{ scale: [1, 1.25, 1], y: [0, -40, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Copy */}
              <div className="lg:col-span-7">
                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border shadow-premium mb-7" style={{ borderColor: `${theme.accent}33` }}>
                  <SparklesIcon className="w-4 h-4" style={{ color: theme.primary }} />
                  <span className="text-xs font-semibold tracking-wide" style={{ color: theme.primary }}>{hero.badge}</span>
                </motion.div>

                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={1}
                  className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-editorial-ink"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {hero.title}{' '}
                  <span className="block mt-2 bg-clip-text text-transparent" style={{ backgroundImage: theme.textGradient }}>
                    {hero.highlight}
                  </span>
                </motion.h1>

                <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="mt-7 text-lg sm:text-xl text-editorial-charcoal leading-relaxed max-w-2xl font-light tracking-wide">
                  {hero.subtitle}
                </motion.p>

                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="mt-9 flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={hero.ctaPrimary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-9 py-4 text-white font-semibold rounded-lg shadow-premium-lg transition-all duration-300 tracking-wide"
                    style={{ backgroundImage: theme.gradient }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {hero.ctaPrimary.label}
                    <ArrowUpRightIcon className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.a>
                  <motion.a
                    href={hero.ctaSecondary.href}
                    className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white/95 backdrop-blur-md text-editorial-ink font-semibold rounded-lg border-2 transition-all duration-300 shadow-premium hover:shadow-premium-lg tracking-wide"
                    style={{ borderColor: `${theme.accent}40` }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {hero.ctaSecondary.label}
                  </motion.a>
                </motion.div>

                {hero.principle && (
                  <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={4} className="mt-8 text-sm font-medium tracking-wide flex items-center gap-2" style={{ color: theme.primary }}>
                    <span className="inline-block w-8 h-px" style={{ background: theme.primary }} />
                    {hero.principle}
                  </motion.p>
                )}
              </div>

              {/* Floating product mock */}
              <motion.div
                className="lg:col-span-5 hidden lg:block"
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="relative">
                  <motion.div
                    className="rounded-2xl p-1 shadow-premium-xl"
                    style={{ backgroundImage: theme.gradient }}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="rounded-xl bg-white p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                        <span className="text-sm font-bold" style={{ color: theme.primary }}>{product.name}</span>
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        </div>
                      </div>
                      {product.features.slice(0, 3).map((f, i) => {
                        const Icon = getIcon(f.icon);
                        return (
                          <motion.div
                            key={f.title}
                            className="flex items-center gap-3 rounded-lg p-3"
                            style={{ background: theme.soft }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                          >
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundImage: theme.gradient }}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="h-2.5 rounded-full w-3/4 mb-1.5" style={{ background: `${theme.accent}55` }} />
                              <div className="h-2 rounded-full w-1/2" style={{ background: `${theme.accent}30` }} />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-premium-xl border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                  >
                    <div className="text-2xl font-bold tracking-tight" style={{ color: theme.primary, fontFamily: 'Playfair Display, serif' }}>
                      {product.stats[0].value}
                    </div>
                    <div className="text-xs text-editorial-muted tracking-wide">{product.stats[0].label}</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ───────────────────────── Stats strip ───────────────────────── */}
        <section className="relative py-14 border-y border-gray-200/60 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {product.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight mb-1" style={{ color: theme.primary, fontFamily: 'Playfair Display, serif' }}>
                    {s.value}
                  </div>
                  <div className="text-sm text-editorial-muted tracking-wide">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── Features ───────────────────────── */}
        <section id="features" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center max-w-2xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-luxury mb-4" style={{ color: theme.accent }}>{product.category}</p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-editorial-ink" style={{ fontFamily: 'Playfair Display, serif' }}>
                Everything in one focused flow
              </h2>
              <p className="mt-5 text-lg text-editorial-charcoal font-light leading-relaxed">{product.summary}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {product.features.map((f, i) => {
                const Icon = getIcon(f.icon);
                return (
                  <motion.div
                    key={f.title}
                    className="group relative bg-white rounded-2xl p-8 border border-gray-200/70 shadow-premium hover:shadow-premium-xl transition-all duration-500 overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    custom={i}
                    whileHover={{ y: -4 }}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" style={{ backgroundImage: theme.gradient }} />
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-premium group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: theme.gradient }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight text-editorial-ink" style={{ fontFamily: 'Playfair Display, serif' }}>{f.title}</h3>
                    <p className="text-editorial-charcoal font-light leading-relaxed">{f.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────── How it works ───────────────────────── */}
        <section id="how-it-works" className="relative py-24" style={{ background: theme.soft }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center max-w-2xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-editorial-ink" style={{ fontFamily: 'Playfair Display, serif' }}>
                How it works
              </h2>
              {hero.principle && <p className="mt-4 text-lg font-medium" style={{ color: theme.primary }}>{hero.principle}</p>}
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="relative bg-white rounded-2xl p-7 border border-gray-200/70 shadow-premium"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="text-5xl font-bold mb-4 leading-none" style={{ color: `${theme.accent}40`, fontFamily: 'Playfair Display, serif' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight text-editorial-ink">{step.title}</h3>
                  <p className="text-sm text-editorial-charcoal font-light leading-relaxed">{step.description}</p>
                  {i < product.steps.length - 1 && (
                    <ArrowRightIcon className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6" style={{ color: `${theme.accent}80` }} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── Closing CTA ───────────────────────── */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage: theme.gradient }} />
          <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 0%, transparent 40%)' }} />
          <motion.div
            className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
              {product.closing.title}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed mb-10">{product.closing.subtitle}</p>
            <motion.a
              href={product.closing.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white font-semibold rounded-lg shadow-premium-xl transition-all duration-300 tracking-wide"
              style={{ color: theme.primary }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {product.closing.cta.label}
              <ArrowUpRightIcon className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
