/**
 * About — the wisdom-driven thesis behind Gnanalytica.
 *
 * Left: the manifesto with marker-highlighted key phrases. Right: three
 * principle cards stacked like slightly-rotated stickers, each popping in with
 * anime.js as it scrolls into view.
 */
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';
import PopIn from './ui/PopIn';
import Starburst from './ui/Starburst';

const principles = [
  {
    k: 'Human in the loop',
    v: 'AI proposes, people decide. Every product keeps judgement with the expert.',
    bg: '#FFC700',
    rotate: -1.5,
  },
  {
    k: 'Ship real tools',
    v: 'Working software in production, not pilots and slideware.',
    bg: '#FF90E8',
    rotate: 1.5,
  },
  {
    k: 'Built for trust',
    v: 'Data residency, audit trails and explainability are features, not afterthoughts.',
    bg: '#B8F25D',
    rotate: -1,
  },
];

export default function About() {
  return (
    <section id="about" className="dots-ink relative border-b-3 border-ink bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="neo-tag rotate-[-1deg] bg-paper-card">About Gnanalytica</p>
            </Reveal>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
              <SplitText text="Gnana means wisdom." onScroll as="span" className="block" />
              <SplitText text="We build AI that carries it." onScroll delay={0.15} as="span" className="block" />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-7 text-lg font-medium leading-relaxed text-ink-muted">
                Capability is cheap now; <span className="marker font-bold text-ink">judgement isn’t</span>.
                Gnanalytica builds AI products that pair real intelligence with the context, compliance and
                care a serious decision deserves — from a valuer signing a report to a clinician reading a
                trend.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-lg font-medium leading-relaxed text-ink-muted">
                Small team, <span className="marker font-bold text-ink">high standards</span>, and the same
                craft whether the product is ours or yours.
              </p>
            </Reveal>
          </div>

          <div className="relative space-y-5 lg:pt-4">
            <span className="absolute -top-8 right-4 hidden lg:block" aria-hidden="true">
              <Starburst size={72} fill="#53B7FF" spin />
            </span>
            {principles.map((p, i) => (
              <PopIn key={p.k} rotate={p.rotate} delay={i * 130}>
                <div
                  className="neo-hover border-3 border-ink p-6 shadow-neo"
                  style={{ background: p.bg }}
                >
                  <h3 className="font-display text-lg uppercase text-ink">{p.k}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-ink/80">{p.v}</p>
                </div>
              </PopIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
