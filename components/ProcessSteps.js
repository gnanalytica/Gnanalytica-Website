/**
 * ProcessSteps — how Gnanalytica works with clients, as a vertical rail.
 *
 * A thin line runs down the four steps and fills with a red-to-blue gradient
 * as the rail scrolls through the viewport; each node lights up as the fill
 * passes it.
 */
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

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

function StepNode({ index, progress }) {
  // Each node lights once the fill reaches its share of the rail.
  const threshold = index / steps.length + 0.08;
  const lit = useTransform(progress, (v) => (v >= threshold ? 1 : 0));
  const background = useTransform(lit, (v) => (v ? 'var(--gn-accent)' : 'var(--gn-bg)'));
  const borderColor = useTransform(lit, (v) => (v ? 'var(--gn-accent)' : 'var(--gn-line)'));
  const boxShadow = useTransform(lit, (v) => (v ? '0 0 12px var(--gn-glow)' : 'none'));
  return (
    <motion.span
      aria-hidden="true"
      className="absolute -left-[37px] top-2 h-4 w-4 rounded-full border-2 transition-colors duration-300"
      style={{ background, borderColor, boxShadow }}
    />
  );
}

export default function ProcessSteps() {
  const railRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ['start 80%', 'end 50%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="process" className="relative py-20 sm:py-28" style={{ backgroundColor: 'var(--gn-bg)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <p className="gn-kicker mb-4">How we work</p>
          <h2 className="text-4xl leading-tight sm:text-5xl" style={{ color: 'var(--gn-ink)' }}>
            From idea to something in production
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
            The line fills in as you scroll — the same way a project moves: one deliberate step at a time.
          </p>
        </motion.div>

        <div ref={railRef} className="relative grid max-w-3xl gap-12 pl-10 sm:gap-14">
          <div className="absolute bottom-1 left-2 top-1 w-0.5 rounded-full" style={{ backgroundColor: 'var(--gn-line)' }} aria-hidden="true">
            <motion.div
              className="h-full w-full origin-top rounded-full"
              style={{ scaleY: progress, backgroundImage: 'linear-gradient(180deg, var(--gn-accent), var(--gn-sec))' }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeUp}
            >
              <StepNode index={i} progress={progress} />
              <h3 className="flex items-baseline gap-4 font-brico text-2xl font-semibold" style={{ color: 'var(--gn-ink)' }}>
                <span className="text-base font-medium tabular-nums" style={{ color: 'var(--gn-muted)' }}>
                  {i + 1}
                </span>
                {step.title}
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
