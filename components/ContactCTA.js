/**
 * ContactCTA — closing ink-black band with the Google Calendar booking embed.
 *
 * A Paper Shaders Warp field marbles the darkness behind a cream bordered card
 * that carries the booking UI. Headline pops against the black in paper +
 * acid; the card wears the inverted (light) hard shadow.
 */
import dynamic from 'next/dynamic';
import Reveal from './ui/Reveal';
import SplitText from './ui/SplitText';
import EmbeddedGoogleCalendar from './EmbeddedGoogleCalendar';

const WarpBackdrop = dynamic(() => import('./effects/WarpBackdrop'), { ssr: false });

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-night py-20 text-night-ink sm:py-28">
      <WarpBackdrop className="opacity-60" />
      <div className="dots-paper pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Reveal>
            <p className="neo-tag rotate-[1deg] border-paper bg-night text-night-ink shadow-neo-light">
              Book a call
            </p>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl">
            <SplitText text="Let’s figure out what" onScroll as="span" className="block" />
            <span className="block">
              <SplitText text="AI can" onScroll delay={0.15} as="span" className="inline" />{' '}
              <span className="inline-block -rotate-1 border-3 border-paper bg-acid px-3 pb-1 pt-1.5 text-ink shadow-neo-light">
                actually do
              </span>{' '}
              <SplitText text="for you" onScroll delay={0.3} as="span" className="inline" />
            </span>
          </h2>
          <Reveal delay={0.25}>
            <p className="mt-6 text-lg font-medium leading-relaxed text-night-muted">
              A complimentary 30-minute strategy session — no commitment, no jargon. Pick a time that
              works for you.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="border-3 border-paper bg-paper-card p-4 shadow-neo-light-lg sm:p-6">
            <EmbeddedGoogleCalendar />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
