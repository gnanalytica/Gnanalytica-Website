/**
 * WhatWeDo — the consulting / AI-readiness side, as four candy-coloured tiles.
 *
 * Each pillar gets its own flat accent card with a bordered icon plate; cards
 * lift on hover with the shared press physics and stagger in with GSAP.
 */
import {
  ChartBarIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';

const pillars = [
  {
    icon: ChartBarIcon,
    bg: '#FFC700',
    title: 'Revenue growth',
    description:
      'Lead scoring, propensity models and advanced analytics that point your team at the customers ready to buy.',
  },
  {
    icon: Cog6ToothIcon,
    bg: '#FF90E8',
    title: 'Operational efficiency',
    description:
      'Intelligent automation and internal AI tools that take repetitive back-office work off your team’s plate.',
  },
  {
    icon: ShieldCheckIcon,
    bg: '#B8F25D',
    title: 'Risk & compliance',
    description:
      'Data governance and model risk management so your AI stays fair, auditable and trustworthy.',
  },
  {
    icon: SparklesIcon,
    bg: '#53B7FF',
    title: 'Custom AI products',
    description:
      'The same craft behind our own products, applied to yours — from first prototype to something in production.',
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="dots-ink relative border-b-3 border-ink bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <Reveal>
            <p className="neo-tag rotate-[-1deg] bg-paper-card">What we do</p>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
            <SplitText text="We build AI products — and help you become" onScroll as="span" />{' '}
            <span className="marker inline-block">AI-ready</span>
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg font-medium leading-relaxed text-ink-muted">
              Enterprise-grade AI with the personal attention a big firm can’t give, at a fraction of the
              traditional cost. Strategy, build and the unglamorous plumbing in between.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08} className="h-full">
              <div
                className="neo-hover flex h-full flex-col border-3 border-ink p-6 shadow-neo"
                style={{ background: pillar.bg }}
              >
                <span className="grid h-12 w-12 place-items-center border-2 border-ink bg-paper-card shadow-neo-xs">
                  <pillar.icon className="h-6 w-6 stroke-[2] text-ink" />
                </span>
                <h3 className="mt-5 font-display text-lg uppercase leading-snug text-ink">{pillar.title}</h3>
                <p className="mt-2.5 text-sm font-medium leading-relaxed text-ink/80">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
