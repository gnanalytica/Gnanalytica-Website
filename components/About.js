/**
 * About — the wisdom-driven thesis behind Gnanalytica.
 *
 * "Gnana" is knowledge; the company's bet is that AI is most valuable when it
 * carries good judgement, not just raw capability.
 */
import { motion } from 'framer-motion';

const principles = [
  { k: 'Human in the loop', v: 'AI proposes, people decide. Every product keeps judgement with the expert.' },
  { k: 'Ship real tools', v: 'Working software in production, not pilots and slideware.' },
  { k: 'Built for trust', v: 'Data residency, audit trails and explainability are features, not afterthoughts.' },
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
              Capability is cheap now; judgement isn’t. Gnanalytica builds AI products that pair
              real intelligence with the context, compliance and care a serious decision deserves —
              from a valuer signing a report to a clinician reading a trend.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Small team, high standards, and the same craft whether the product is ours or yours.
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
                <h3 className="text-base font-semibold tracking-tight text-ink">{p.k}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.v}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
