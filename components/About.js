/**
 * About — the wisdom-driven thesis behind Gnanalytica.
 *
 * Vision (red rule) and mission (steel-blue rule) sit as left-ruled
 * statements under the thesis; the ज्ञान etymology renders as a red-to-blue
 * gradient glyph beside them.
 */
import { motion } from 'framer-motion';

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
    <section id="about" className="relative py-20 sm:py-28" style={{ backgroundColor: 'var(--gn-bg2)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            variants={fadeUp}
          >
            <p className="gn-kicker mb-4">About Gnanalytica</p>
            <h2 className="max-w-[18ch] text-4xl leading-tight sm:text-5xl" style={{ color: 'var(--gn-ink)' }}>
              Gnana means wisdom. We build AI that carries it.
            </h2>

            <div className="mt-8 space-y-5">
              <div className="border-l-[3px] pl-5" style={{ borderColor: 'var(--gn-accent)' }}>
                <h3 className="font-brico text-lg font-semibold" style={{ color: 'var(--gn-ink)' }}>
                  Our vision
                </h3>
                <p className="mt-1 max-w-xl leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
                  To create clarity, confidence, and transparency in decisions that matter.
                </p>
              </div>
              <div className="border-l-[3px] pl-5" style={{ borderColor: 'var(--gn-sec)' }}>
                <h3 className="font-brico text-lg font-semibold" style={{ color: 'var(--gn-ink)' }}>
                  Our mission
                </h3>
                <p className="mt-1 max-w-xl leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
                  Build AI-enabled systems for industries where decisions carry real risk.
                </p>
                <p className="mt-3 max-w-xl leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
                  We turn research, evidence, workflows, and compliance into structured systems where{' '}
                  <strong className="font-semibold" style={{ color: 'var(--gn-ink)' }}>
                    human judgment comes first
                  </strong>{' '}
                  and AI makes it stronger.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center lg:justify-self-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            variants={fadeUp}
          >
            <p
              lang="sa"
              className="font-brico text-[clamp(90px,10vw,150px)] font-bold leading-none"
              style={{
                backgroundImage: 'linear-gradient(130deg, var(--gn-accent), var(--gn-sec))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                filter: 'drop-shadow(0 0 26px var(--gn-glow))',
              }}
            >
              ज्ञान
            </p>
            <p className="mx-auto mt-4 max-w-[30ch] text-sm leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
              <em>jñāna</em> — Sanskrit for knowledge earned through understanding. It’s in our name and in
              every product we ship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
