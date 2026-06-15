/**
 * WhatWeDo — the consulting / AI-readiness side of Gnanalytica.
 *
 * Four outcome pillars distilled from the services Gnanalytica offers, framed as
 * "we build products, and we help you build yours".
 */
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const pillars = [
  {
    icon: ChartBarIcon,
    title: 'Revenue growth',
    description:
      'Lead scoring, propensity models and advanced analytics that point your team at the customers ready to buy.',
  },
  {
    icon: Cog6ToothIcon,
    title: 'Operational efficiency',
    description:
      'Intelligent automation and internal AI tools that take repetitive back-office work off your team’s plate.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Risk & compliance',
    description:
      'Data governance and model risk management so your AI stays fair, auditable and trustworthy.',
  },
  {
    icon: SparklesIcon,
    title: 'Custom AI products',
    description:
      'The same craft behind our own products, applied to yours — from first prototype to something in production.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function WhatWeDo() {
  return (
    <section id="services" className="relative bg-canvas-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <p className="eyebrow mb-4 text-ink-muted">What we do</p>
          <h2 className="font-display text-4xl tracking-tightish text-ink sm:text-5xl">
            We build AI products — and help you become AI-ready
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Enterprise-grade AI with the personal attention a big firm can’t give, at a fraction of
            the traditional cost. Strategy, build and the unglamorous plumbing in between.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="group rounded-2xl border border-ink-line bg-canvas-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeUp}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <pillar.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
