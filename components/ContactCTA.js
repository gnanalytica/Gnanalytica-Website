/**
 * ContactCTA — closing dark band with the Google Calendar booking embed.
 *
 * Reuses EmbeddedGoogleCalendar, placed inside a light card so the booking UI
 * stays legible against the dark accent band. Direct contact details sit
 * beneath it for people who'd rather email or call.
 */
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import DarkBand from './DarkBand';
import EmbeddedGoogleCalendar from './EmbeddedGoogleCalendar';

const BOOKING_URL =
  'https://calendar.google.com/appointments/schedules/AcZssZ20kzIhtACNpQCMPvERahaZmkUOfe47XP2Oz72YUXE4Uj21gSvyKju1bKWtj7mjr14xA-jqzt1-';

const contacts = [
  { icon: EnvelopeIcon, label: 'Email', value: 'contact@gnanalytica.com', href: 'mailto:contact@gnanalytica.com' },
  { icon: PhoneIcon, label: 'Phone', value: '+31 6 87018349', href: 'tel:+31687018349' },
  { icon: MapPinIcon, label: 'Office', value: 'Eindhoven, Netherlands' },
];

export default function ContactCTA() {
  return (
    <DarkBand id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4 text-night-muted">Book a call</p>
          <h2 className="font-display text-4xl tracking-tightish text-night-ink sm:text-5xl">
            Let’s figure out what AI can actually do for you
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-night-muted">
            A complimentary 30-minute strategy session — no commitment, no jargon. Pick a time that
            works for you.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-night shadow-liftlg transition-transform hover:-translate-y-0.5"
          >
            Pick a time
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl border border-ink-line bg-canvas-card p-4 shadow-liftlg sm:p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <EmbeddedGoogleCalendar calendarEmbedUrl={BOOKING_URL} />
        </motion.div>

        <motion.dl
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {contacts.map((c) => (
            <div key={c.label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <c.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-light" />
              <div className="min-w-0">
                <dt className="eyebrow text-night-muted">{c.label}</dt>
                <dd className="mt-1 break-words text-sm font-semibold text-night-ink">
                  {c.href ? (
                    <a href={c.href} className="transition-colors hover:text-brand-light">
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </DarkBand>
  );
}
