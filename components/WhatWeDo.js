/**
 * WhatWeDo — the consulting / AI-readiness side of Gnanalytica.
 *
 * Four outcome pillars as a quiet two-column list, each led by a glowing
 * red dot, framed as "we build products, and we help you build yours".
 */
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Revenue growth',
    description:
      'Point your team at the customers who are ready to buy — with scoring and analytics that actually explain why.',
  },
  {
    title: 'Operational efficiency',
    description:
      'Take repetitive back-office work off your team’s plate with intelligent automation and internal AI tools.',
  },
  {
    title: 'Risk & compliance',
    description:
      'Governance and oversight that keep your AI fair, auditable and trustworthy — for regulators and customers alike.',
  },
  {
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
    <section id="services" className="relative py-20 sm:py-28" style={{ backgroundColor: 'var(--gn-bg2)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <p className="gn-kicker mb-4">What we do</p>
          <h2 className="text-4xl leading-tight sm:text-5xl" style={{ color: 'var(--gn-ink)' }}>
            We build AI products — and help you become AI-ready
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
            Enterprise-grade AI with the personal attention a big firm can’t give, at a fraction of
            the traditional cost.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeUp}
            >
              <h3 className="flex items-baseline gap-3 font-brico text-xl font-semibold" style={{ color: 'var(--gn-ink)' }}>
                <span
                  className="h-2 w-2 flex-shrink-0 -translate-y-0.5 rounded-full"
                  style={{ backgroundColor: 'var(--gn-accent)', boxShadow: '0 0 10px var(--gn-glow)' }}
                  aria-hidden="true"
                />
                {pillar.title}
              </h3>
              <p className="mt-2 max-w-md leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
