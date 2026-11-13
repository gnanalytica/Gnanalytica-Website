/**
 * Reusable, data-driven product landing page.
 *
 * Renders a themed page for any product defined in lib/products.js, in the
 * unified Gnanalytica system (warm editorial base, Instrument Serif display,
 * shared nav/footer). All product-specific colour comes from the theme object
 * via inline styles so a single template serves every product.
 *
 * Optional product fields add sections only where defined: `chat` (hero chat
 * preview), `problem`, `audiences`, `trust` and `roadmap`. A product that is
 * not live yet sets `status` and points its CTAs at an internal anchor.
 */
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, ArrowRightIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import SiteNav from '../SiteNav';
import SiteFooter from '../SiteFooter';
import Magnetic from '../Magnetic';
import CountUp from '../CountUp';
import { getIcon } from './icons';
import { isExternal } from '../../lib/products';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
};

/** Anchor that opens off-site links in a new tab and keeps internal ones in place. */
function CtaLink({ href, children, ...rest }) {
  const external = isExternal(href);
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  );
}

function SectionHeading({ kicker, title, children, color }) {
  return (
    <motion.div className="mx-auto mb-14 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
      {kicker && <p className="eyebrow mb-4" style={{ color }}>{kicker}</p>}
      <h2 className="font-display text-4xl tracking-tightish text-ink sm:text-5xl">{title}</h2>
      {children}
    </motion.div>
  );
}

/** Hero preview: a short chat thread between the user and the product. */
function ChatPreview({ product }) {
  const { theme } = product;
  return (
    <div className="space-y-3 rounded-xl bg-canvas-card p-5">
      <div className="flex items-center gap-3 border-b border-ink-line pb-3">
        <span className="grid h-9 w-9 place-items-center rounded-full text-sm font-semibold text-white" style={{ backgroundImage: theme.gradient }}>
          {product.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">{product.name}</span>
          <span className="block text-[11px] text-ink-muted">in your chat</span>
        </span>
      </div>
      {product.chat.map((m, i) => {
        const mine = m.from === 'user';
        return (
          <motion.div
            key={i}
            className={`flex ${mine ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.35, duration: 0.4 }}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug ${mine ? 'rounded-br-md text-white' : 'rounded-bl-md text-ink'}`}
              style={mine ? { backgroundImage: theme.gradient } : { background: theme.soft }}
            >
              {m.text}
              {m.link && (
                <span className="mt-2 block rounded-lg bg-canvas-card px-3 py-1.5 text-center text-xs font-semibold" style={{ color: theme.primary }}>
                  {m.link}
                </span>
              )}
              {m.file && (
                <span className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-md" style={{ backgroundImage: theme.gradient }}>
                    <DocumentTextIcon className="h-4 w-4 text-white" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold">{m.file}</span>
                    {m.meta && <span className="block text-[11px] text-ink-muted">{m.meta}</span>}
                  </span>
                </span>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

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
                  <CtaLink
                    href={hero.ctaPrimary.href}
                    className="sheen-host group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-7 py-3.5 text-sm font-semibold text-white shadow-lift"
                    style={{ backgroundImage: theme.gradient }}
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      {hero.ctaPrimary.label}
                      {isExternal(hero.ctaPrimary.href) ? (
                        <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      ) : (
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      )}
                    </span>
                  </CtaLink>
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
                {product.chat ? (
                  <ChatPreview product={product} />
                ) : (
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
                )}
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

        {/* ───────────────────────── Problem (optional) ───────────────────────── */}
        {product.problem && (
          <section className="py-20 sm:py-28">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
              <motion.div className="lg:col-span-5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
                <p className="eyebrow mb-4" style={{ color: theme.primary }}>{product.problem.kicker}</p>
                <h2 className="font-display text-4xl tracking-tightish text-ink sm:text-5xl">{product.problem.title}</h2>
              </motion.div>
              <div className="space-y-5 lg:col-span-7 lg:pt-10">
                {product.problem.paragraphs.map((para, i) => (
                  <motion.p key={i} className="text-lg leading-relaxed text-ink-muted" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} custom={i} variants={fadeUp}>
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ───────────────────────── Features ───────────────────────── */}
        <section id="features" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div className="mx-auto mb-14 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
              <p className="eyebrow mb-4" style={{ color: theme.primary }}>{product.category}</p>
              <h2 className="font-display text-4xl tracking-tightish text-ink sm:text-5xl">{product.featuresTitle || 'Everything in one focused flow'}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">{product.summary}</p>
            </motion.div>

            <div className={`grid gap-6 sm:grid-cols-2 ${product.features.length > 4 ? 'lg:grid-cols-3' : ''}`}>
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
                    {f.later && (
                      <span className="absolute right-5 top-6 rounded-full border border-ink-line px-2.5 py-0.5 text-[11px] font-medium text-ink-muted">
                        {product.laterLabel || 'Coming later'}
                      </span>
                    )}
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
              <h2 className="font-display text-4xl tracking-tightish text-ink sm:text-5xl">{product.stepsTitle || hero.principle || 'How it works'}</h2>
            </motion.div>

            <div className={`grid gap-6 ${product.steps.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
              {product.steps.map((step, i) => (
                <motion.div key={step.title} className="relative rounded-2xl border border-ink-line bg-canvas-card p-6 shadow-soft" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={i} variants={fadeUp}>
                  <span className="font-display text-5xl leading-none" style={{ color: `${theme.accent}55` }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                  {i < product.steps.length - 1 && (
                    <ArrowRightIcon className={`absolute top-7 -right-3 hidden h-6 w-6 ${product.steps.length === 3 ? 'md:block' : 'lg:block'}`} style={{ color: `${theme.accent}99` }} />
                  )}
                </motion.div>
              ))}
            </div>

            {product.note && (
              <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-ink-muted">{product.note}</p>
            )}
          </div>
        </section>

        {/* ───────────────────────── Audiences (optional) ───────────────────────── */}
        {product.audiences && (
          <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading kicker={product.audiences.kicker} title={product.audiences.title} color={theme.primary} />
              <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
                {product.audiences.items.map((a, i) => {
                  const Icon = getIcon(a.icon);
                  return (
                    <motion.div key={a.title} className="bg-canvas-card p-7" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={i} variants={fadeUp}>
                      <Icon className="h-6 w-6" style={{ color: theme.primary }} />
                      <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{a.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{a.description}</p>
                    </motion.div>
                  );
                })}
              </div>
              {product.audiences.more && (
                <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-ink-muted">{product.audiences.more}</p>
              )}
            </div>
          </section>
        )}

        {/* ───────────────────────── Trust / privacy (optional) ───────────────────────── */}
        {product.trust && (
          <section className="border-y border-ink-line bg-canvas-soft py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading kicker={product.trust.kicker} title={product.trust.title} color={theme.primary} />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {product.trust.items.map((t, i) => {
                  const Icon = getIcon(t.icon);
                  return (
                    <motion.div key={t.title} className="rounded-2xl border border-ink-line bg-canvas-card p-6 shadow-soft" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={i} variants={fadeUp}>
                      <span className="grid h-10 w-10 place-items-center rounded-lg" style={{ background: theme.soft }}>
                        <Icon className="h-5 w-5" style={{ color: theme.primary }} />
                      </span>
                      <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.description}</p>
                    </motion.div>
                  );
                })}
              </div>
              {product.trust.note && (
                <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-muted">{product.trust.note}</p>
              )}
            </div>
          </section>
        )}

        {/* ───────────────────────── Roadmap / status (optional) ───────────────────────── */}
        {product.roadmap && (
          <section className="py-20 sm:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
              <motion.div className="lg:col-span-5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
                <p className="eyebrow mb-4" style={{ color: theme.primary }}>{product.roadmap.kicker}</p>
                <h2 className="font-display text-4xl tracking-tightish text-ink sm:text-5xl">{product.roadmap.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-muted">{product.roadmap.body}</p>
              </motion.div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
                {product.roadmap.phases.map((phase, i) => (
                  <motion.div
                    key={phase.label}
                    className="rounded-2xl border border-ink-line bg-canvas-card p-7 shadow-soft"
                    style={i === 0 ? { borderColor: theme.accent } : undefined}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={i}
                    variants={fadeUp}
                  >
                    <p className="eyebrow" style={{ color: i === 0 ? theme.primary : undefined }}>{phase.label}</p>
                    <ul className="mt-5 space-y-3">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-ink">
                          <span
                            className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                            style={i === 0 ? { backgroundImage: theme.gradient } : { border: `1.5px solid ${theme.accent}` }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

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
            <CtaLink
              href={product.closing.cta.href}
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold shadow-liftlg transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ color: theme.primary }}
            >
              {product.closing.cta.label}
              {isExternal(product.closing.cta.href) ? <ArrowUpRightIcon className="h-4 w-4" /> : <ArrowRightIcon className="h-4 w-4" />}
            </CtaLink>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
