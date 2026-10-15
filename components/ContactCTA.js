/**
 * ContactCTA — closing panel with the Google Calendar booking embed.
 *
 * A bordered surface panel with a soft red glow in the corner; the booking
 * embed keeps its own light card so the calendar UI stays legible in both
 * themes. Direct contact details sit as labeled rows beside the pitch.
 */
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import EmbeddedGoogleCalendar from './EmbeddedGoogleCalendar';

const BOOKING_URL =
  'https://calendar.google.com/appointments/schedules/AcZssZ20kzIhtACNpQCMPvERahaZmkUOfe47XP2Oz72YUXE4Uj21gSvyKju1bKWtj7mjr14xA-jqzt1-';

const contacts = [
  { label: 'Email', value: 'contact@gnanalytica.com', href: 'mailto:contact@gnanalytica.com' },
  { label: 'Phone', value: '+31 6 87018349', href: 'tel:+31687018349' },
  { label: 'Office', value: 'Eindhoven, Netherlands' },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-28" style={{ backgroundColor: 'var(--gn-bg)' }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl border p-8 sm:p-12"
          style={{ borderColor: 'var(--gn-line)', backgroundColor: 'var(--gn-surface)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="pointer-events-none absolute -right-28 -top-28 h-96 w-96"
            style={{ background: 'radial-gradient(circle, var(--gn-glow), transparent 65%)' }}
            aria-hidden="true"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="gn-kicker mb-4">Book a call</p>
              <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]" style={{ color: 'var(--gn-ink)' }}>
                Let’s figure out what AI can actually do for you
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed" style={{ color: 'var(--gn-muted)' }}>
                A complimentary 30-minute strategy session — no commitment, no jargon. Pick a time that
                works for you.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-liftlg transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--gn-accent)', color: 'var(--gn-accent-ink)' }}
              >
                Pick a time
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>

            <dl className="grid gap-3">
              {contacts.map((c) => (
                <div key={c.label} className="rounded-2xl border px-5 py-4" style={{ borderColor: 'var(--gn-line)', backgroundColor: 'var(--gn-bg)' }}>
                  <dt className="text-xs" style={{ color: 'var(--gn-muted)' }}>
                    {c.label}
                  </dt>
                  <dd className="mt-0.5 break-words text-sm font-semibold" style={{ color: 'var(--gn-ink)' }}>
                    {c.href ? (
                      <a href={c.href} className="transition-colors hover:text-[color:var(--gn-sec)]">
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            className="relative mt-10 overflow-hidden rounded-2xl border bg-white p-4 sm:p-6"
            style={{ borderColor: 'var(--gn-line)' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <EmbeddedGoogleCalendar calendarEmbedUrl={BOOKING_URL} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
