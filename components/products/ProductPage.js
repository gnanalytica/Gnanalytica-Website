/**
 * Reusable, data-driven product landing page — neobrutalist edition.
 *
 * Renders a themed page for any product defined in lib/products.js: cream paper
 * base, hard black borders, the product's flat accent colour on header strips,
 * icon plates and CTAs (via inline styles so one template serves every
 * product), GSAP split-text and reveals, anime.js counters, and a dithered
 * WebGL backdrop tinted to the product in the hero.
 */
import dynamic from 'next/dynamic';
import { ArrowUpRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import SiteNav from '../SiteNav';
import SiteFooter from '../SiteFooter';
import Magnetic from '../Magnetic';
import CountUp from '../CountUp';
import Reveal from '../ui/Reveal';
import SplitText from '../ui/SplitText';
import PopIn from '../ui/PopIn';
import Starburst from '../ui/Starburst';
import Marquee from '../ui/Marquee';
import { getIcon } from './icons';

const DitherBackdrop = dynamic(() => import('../effects/DitherBackdrop'), { ssr: false });

export default function ProductPage({ product }) {
  const { theme, hero } = product;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteNav />

      <main>
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="relative overflow-hidden border-b-3 border-ink pt-28 sm:pt-36">
          <DitherBackdrop
            colorBack="#F7F1E5"
            colorFront={theme.accent}
            shape="simplex"
            speed={0.2}
            size={2.5}
            className="opacity-[0.18]"
          />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="neo-tag rotate-[-1deg] text-white" style={{ background: theme.primary }}>
                  {hero.kicker || product.category}
                </p>
              </Reveal>

              <h1 className="mt-7 font-display text-4xl uppercase leading-[1.0] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
                <SplitText text={hero.title} delay={0.15} as="span" className="block" />
                <SplitText text={hero.highlight} delay={0.35} as="span" className="marker block w-fit" />
              </h1>

              <Reveal delay={0.45}>
                <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-ink-muted sm:text-xl">
                  {hero.subtitle}
                </p>
              </Reveal>

              <Reveal delay={0.6} className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Magnetic strength={0.3}>
                  <a
                    href={hero.ctaPrimary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neo px-7 py-4 text-sm text-white"
                    style={{ background: theme.primary }}
                  >
                    {hero.ctaPrimary.label}
                    <ArrowUpRightIcon className="h-4 w-4 stroke-[3]" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <a href={hero.ctaSecondary.href} className="btn-neo bg-paper-card px-7 py-4 text-sm text-ink">
                    {hero.ctaSecondary.label}
                    <ArrowRightIcon className="h-4 w-4 stroke-[3]" />
                  </a>
                </Magnetic>
              </Reveal>

              {hero.principle && (
                <Reveal delay={0.75}>
                  <p className="mt-8 inline-flex items-center gap-3 border-l-4 pl-3 font-mono text-sm font-semibold uppercase tracking-wider text-ink" style={{ borderColor: theme.primary }}>
                    {hero.principle}
                  </p>
                </Reveal>
              )}
            </div>

            {/* product preview card */}
            <div className="hidden lg:col-span-5 lg:block">
              <PopIn rotate={1.5} delay={350}>
                <div className="relative border-3 border-ink bg-paper-card shadow-neo-xl">
                  <div
                    className="flex items-center justify-between border-b-3 border-ink px-5 py-3"
                    style={{ background: theme.primary }}
                  >
                    <span className="font-display text-sm uppercase tracking-wide text-white">{product.name}</span>
                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 border-2 border-ink bg-limey" />
                      <span className="h-3 w-3 border-2 border-ink bg-acid" />
                      <span className="h-3 w-3 border-2 border-ink bg-bubble" />
                    </div>
                  </div>
                  <div className="space-y-3 p-5">
                    {product.features.slice(0, 3).map((f) => {
                      const Icon = getIcon(f.icon);
                      return (
                        <div key={f.title} className="flex items-center gap-3 border-2 border-ink bg-paper p-3 shadow-neo-xs">
                          <span
                            className="grid h-9 w-9 flex-shrink-0 place-items-center border-2 border-ink"
                            style={{ background: theme.primary }}
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </span>
                          <span className="text-sm font-bold text-ink">{f.title}</span>
                        </div>
                      );
                    })}
                  </div>
                  <span className="absolute -right-6 -top-8" aria-hidden="true">
                    <Starburst size={72} fill="#FFC700" spin />
                  </span>
                </div>
              </PopIn>
            </div>
          </div>

          {/* stat ticker on the hero's bottom edge */}
          <div className="relative z-10 border-t-3 border-ink py-3" style={{ background: theme.primary }}>
            <Marquee slow>
              {product.stats.map((s) => (
                <span key={s.label} className="mx-6 flex items-center gap-4 whitespace-nowrap text-white">
                  <Starburst size={13} fill="#F7F1E5" stroke="#121212" />
                  <span className="font-display text-sm uppercase tracking-wide">{s.value}</span>
                  <span className="font-mono text-xs uppercase tracking-wider opacity-80">{s.label}</span>
                </span>
              ))}
            </Marquee>
          </div>
        </section>

        {/* ───────────────────────── Stats ───────────────────────── */}
        <section className="dots-ink border-b-3 border-ink bg-paper-deep py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {product.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="h-full">
                <div className="neo-hover h-full border-2 border-ink bg-paper-card p-5 text-center shadow-neo-sm">
                  <div className="font-display text-2xl uppercase tracking-tight sm:text-3xl" style={{ color: theme.primary }}>
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-1.5 font-mono text-xs uppercase tracking-wider text-ink-muted">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────────────────────── Features ───────────────────────── */}
        <section id="features" className="border-b-3 border-ink bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <Reveal>
                <p className="neo-tag rotate-[1deg] text-white" style={{ background: theme.primary }}>
                  {product.category}
                </p>
              </Reveal>
              <h2 className="mt-6 font-display text-4xl uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
                <SplitText text="Everything in one" onScroll as="span" />{' '}
                <span className="marker inline-block">focused flow</span>
              </h2>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg font-medium leading-relaxed text-ink-muted">{product.summary}</p>
              </Reveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {product.features.map((f, i) => {
                const Icon = getIcon(f.icon);
                return (
                  <Reveal key={f.title} delay={(i % 2) * 0.12} className="h-full">
                    <div className="neo-hover group h-full border-3 border-ink bg-paper-card p-7 shadow-neo">
                      <span
                        className="grid h-12 w-12 place-items-center border-2 border-ink shadow-neo-xs"
                        style={{ background: theme.primary }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </span>
                      <h3 className="mt-5 font-display text-lg uppercase leading-snug text-ink">{f.title}</h3>
                      <p className="mt-2.5 text-sm font-medium leading-relaxed text-ink-muted">{f.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────── How it works ───────────────────────── */}
        <section id="how-it-works" className="dots-ink border-b-3 border-ink bg-paper-deep py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <Reveal>
                <p className="neo-tag rotate-[-1deg] bg-paper-card">How it works</p>
              </Reveal>
              <h2 className="mt-6 font-display text-4xl uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
                <SplitText text={hero.principle || 'How it works'} onScroll as="span" />
              </h2>
            </div>

            <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-0 right-0 top-1/2 hidden border-t-3 border-dashed border-ink lg:block" aria-hidden="true" />
              {product.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.12} className="relative h-full">
                  <div className="neo-hover relative flex h-full flex-col border-3 border-ink bg-paper-card p-6 shadow-neo">
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-6xl leading-none" style={{ WebkitTextStroke: `2px ${theme.primary}`, color: 'transparent' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {i < product.steps.length - 1 && (
                        <ArrowRightIcon className="hidden h-6 w-6 stroke-[3] text-ink lg:block" aria-hidden="true" />
                      )}
                    </div>
                    <h3 className="mt-4 font-display text-base uppercase text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-ink-muted">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {product.note && (
              <p className="mx-auto mt-10 max-w-2xl text-center font-mono text-xs leading-relaxed text-ink-muted">
                {product.note}
              </p>
            )}
          </div>
        </section>

        {/* ───────────────────────── Closing CTA ───────────────────────── */}
        <section className="relative overflow-hidden py-24" style={{ background: theme.primary }}>
          <div className="dots-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
              <SplitText text={product.closing.title} onScroll as="span" />
            </h2>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/90">
                {product.closing.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <a
                href={product.closing.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neo mt-9 bg-acid px-8 py-4 text-sm text-ink"
              >
                {product.closing.cta.label}
                <ArrowUpRightIcon className="h-4 w-4 stroke-[3]" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
