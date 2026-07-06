/**
 * ProcessSteps — how Gnanalytica works with clients, as a stamped 4-step rail.
 *
 * Hollow outlined step numbers (text-stroke), hard-bordered cards joined by a
 * dashed ink line, GSAP-staggered as the rail scrolls in. Step 03 gets the
 * "we're here" acid arrow sticker.
 */
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';

const steps = [
  {
    title: 'Discover',
    description:
      'A complimentary working session to map where AI actually moves the needle for you — and where it doesn’t.',
  },
  {
    title: 'Design',
    description:
      'A focused plan with a clear first slice: the smallest thing worth building that proves real value.',
  },
  {
    title: 'Build',
    description:
      'We ship a working tool, not a deck — iterating with you, with a human in control of every decision.',
  },
  {
    title: 'Embed',
    description:
      'We hand over something your team owns: documented, governed and ready to run without us.',
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="relative border-b-3 border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <p className="neo-tag rotate-[1deg] bg-tang text-ink">How we work</p>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
            <SplitText text="From idea to something" onScroll as="span" className="block" />
            <SplitText text="in production" onScroll delay={0.15} as="span" className="marker block w-fit mx-auto" />
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* dashed connector rail behind the cards */}
          <div className="absolute left-0 right-0 top-1/2 hidden border-t-3 border-dashed border-ink lg:block" aria-hidden="true" />

          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12} className="relative h-full">
              <div className="neo-hover relative flex h-full flex-col border-3 border-ink bg-paper-card p-6 shadow-neo">
                <div className="flex items-baseline justify-between">
                  <span className="text-stroke font-display text-6xl leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRightIcon className="hidden h-6 w-6 stroke-[3] text-ink lg:block" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-4 font-display text-xl uppercase text-ink">{step.title}</h3>
                <p className="mt-2.5 text-sm font-medium leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
