/**
 * PhoneMock — the on-site walkthrough drawn as a phone screen in HTML and CSS.
 *
 * Used by the Field Companion guide page for the "On site" step: a camera
 * area, the two things a person says (as captions), the Look button, and the
 * assistant's short answer. Illustrative only: no real screenshot is used.
 */
import { CameraIcon, MicrophoneIcon } from '@heroicons/react/24/solid';

const ACCENT = '#047857';

export default function PhoneMock({ phone }) {
  return (
    <figure className="m-0 w-full max-w-[17rem]">
      <div
        role="img"
        aria-label={`The walkthrough on a phone. ${phone.captions.map((c) => `${c.who}: ${c.text}.`).join(' ')} Assistant: ${phone.reply}`}
        className="rounded-[2.25rem] border-[6px] border-night bg-night p-0 shadow-lift"
      >
        <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-stone-500 via-stone-400 to-stone-600">
          <div className="flex h-56 items-start justify-between p-3 sm:h-64">
            <span className="rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium text-white">Kerkstraat 12</span>
            <CameraIcon className="h-5 w-5 text-white/80" aria-hidden="true" />
          </div>
          <div className="space-y-1.5 bg-night/90 px-3 pb-4 pt-3">
            {phone.captions.map((c) => (
              <p key={c.text} className="flex items-start gap-2 rounded-lg bg-white/10 px-2.5 py-1.5 text-[12px] leading-snug text-night-ink">
                <MicrophoneIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-300" aria-hidden="true" />
                <span>&ldquo;{c.text}&rdquo;</span>
              </p>
            ))}
            <p className="rounded-lg bg-white px-2.5 py-1.5 text-[12px] leading-snug text-ink">{phone.reply}</p>
            <div
              className="mx-auto mt-2 flex h-11 w-28 items-center justify-center rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: ACCENT }}
            >
              Look
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-xs text-ink-muted">Illustrative mock-up, not a screenshot</figcaption>
    </figure>
  );
}
