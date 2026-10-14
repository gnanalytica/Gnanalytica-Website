/**
 * ProcessSteps — how Gnanalytica works with clients, as an editorial 4-step rail.
 *
 * A thin line runs through the steps and fills with the brand gradient as the
 * rail scrolls through the viewport — across the cards on desktop, down their
 * left edge on smaller screens.
 */
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

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
  const railRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ['start 80%', 'end 50%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

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
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            The line fills in as you scroll — the same way a project moves: one deliberate step at a time.
          </p>
        </motion.div>

        <div ref={railRef} className="relative grid grid-cols-1 gap-6 pl-6 sm:grid-cols-2 lg:grid-cols-4 lg:pl-0">
          {/* progress line: horizontal behind the cards on desktop, vertical on the left below */}
          <div className="absolute inset-x-0 top-1/2 hidden h-0.5 -translate-y-1/2 rounded-full bg-ink-line lg:block" aria-hidden="true">
            <motion.div
              className="h-full origin-left rounded-full"
              style={{ scaleX: progress, backgroundImage: 'linear-gradient(90deg, #6366f1, #a855f7)' }}
            />
          </div>
          <div className="absolute inset-y-0 left-1 w-0.5 rounded-full bg-ink-line lg:hidden" aria-hidden="true">
            <motion.div
              className="h-full w-full origin-top rounded-full"
              style={{ scaleY: progress, backgroundImage: 'linear-gradient(180deg, #6366f1, #a855f7)' }}
            />
          </div>

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
