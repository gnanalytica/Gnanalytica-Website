/**
 * About — the wisdom-driven thesis behind Gnanalytica.
 *
 * "Gnana" is knowledge; the company's bet is that AI is most valuable when it
 * carries good judgement, not just raw capability. Vision, mission and the
 * ज्ञान etymology sit as cards beside the thesis.
 */
import { motion } from 'framer-motion';

const principles = [
  { k: 'Our vision', v: 'To create clarity, confidence, and transparency in decisions that matter.' },
  { k: 'Our mission', v: 'Build AI-enabled systems for industries where decisions carry real risk.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative bg-canvas-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            variants={fadeUp}
          >
            <p className="eyebrow mb-4 text-ink-muted">About Gnanalytica</p>
            <h2 className="font-display text-4xl leading-tight tracking-tightish text-ink sm:text-5xl">
              Gnana means wisdom. We build AI that carries it.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              We turn research, evidence, workflows, and compliance into structured systems where{' '}
              <strong className="font-semibold text-ink">human judgment comes first</strong> and AI makes it
              stronger.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            variants={fadeUp}
          >
            {principles.map((p) => (
              <div
                key={p.k}
                className="rounded-2xl border border-ink-line bg-canvas-card p-6 shadow-soft"
              >
                <h3 className="eyebrow text-ink-muted">{p.k}</h3>
                <p className="mt-2 text-lg leading-snug text-ink">{p.v}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-ink-line bg-canvas-card p-6 shadow-soft">
              <p lang="sa" className="text-4xl font-semibold leading-none text-brand">
                ज्ञान
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                <em>jñāna</em> — Sanskrit for knowledge earned through understanding. It’s in our name and in
                every product we ship.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
