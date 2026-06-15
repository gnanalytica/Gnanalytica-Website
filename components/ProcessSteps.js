/**
 * ProcessSteps — how Gnanalytica works with clients, as an editorial 4-step rail.
 */
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discover',
    description: 'A complimentary working session to map where AI actually moves the needle for you — and where it doesn’t.',
  },
  {
    title: 'Design',
    description: 'A focused plan with a clear first slice: the smallest thing worth building that proves real value.',
  },
  {
    title: 'Build',
    description: 'We ship a working tool, not a deck — iterating with you, with a human in control of every decision.',
  },
  {
    title: 'Embed',
    description: 'We hand over something your team owns: documented, governed and ready to run without us.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ProcessSteps() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <p className="eyebrow mb-4 text-ink-muted">How we work</p>
          <h2 className="font-display text-4xl tracking-tightish text-ink sm:text-5xl">
            From idea to something in production
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative rounded-2xl border border-ink-line bg-canvas-card p-6 shadow-soft"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeUp}
            >
              <span className="font-display text-5xl leading-none text-ink-line">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
