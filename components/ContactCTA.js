/**
 * ContactCTA — closing dark band with the Google Calendar booking embed.
 *
 * Reuses EmbeddedGoogleCalendar, placed inside a light card so the booking UI
 * stays legible against the dark accent band.
 */
import { motion } from 'framer-motion';
import DarkBand from './DarkBand';
import EmbeddedGoogleCalendar from './EmbeddedGoogleCalendar';

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
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl border border-ink-line bg-canvas-card p-4 shadow-liftlg sm:p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <EmbeddedGoogleCalendar />
        </motion.div>
      </div>
    </DarkBand>
  );
}
