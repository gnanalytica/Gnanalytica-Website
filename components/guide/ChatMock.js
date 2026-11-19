/**
 * ChatMock — a mock chat conversation drawn in HTML and Tailwind.
 *
 * Used by the Field Companion guide page to show what the chat looks like
 * without real screenshots. It takes a list of messages (see lib/guide.js for
 * the fields) and draws speech bubbles in a soft chat background: the person's
 * messages on the right, the assistant's on the left, with reply buttons,
 * link buttons and document bubbles under the assistant's messages. It is
 * styled as a generic chat and does not copy any messaging app's logo or
 * exact look. Nothing in it is interactive: the buttons are plain labels, and
 * the whole mock is hidden from screen readers' tab order but described by a
 * single label, with the same words available as text.
 */
import { ArrowTopRightOnSquareIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const ACCENT = '#047857';

/** Turn *word* into bold text, as the chat does, and keep line breaks. */
function Rich({ text }) {
  return text.split('\n').map((line, i) => (
    <span key={i} className="block min-h-[1em]">
      {line.split(/(\*[^*]+\*)/g).map((part, j) =>
        part.startsWith('*') && part.endsWith('*') && part.length > 2 ? (
          <strong key={j} className="font-semibold">
            {part.slice(1, -1)}
          </strong>
        ) : (
          part
        )
      )}
    </span>
  ));
}

function Bubble({ m }) {
  const mine = m.from === 'user';
  return (
    <div className={`flex flex-col ${mine ? 'items-end' : 'items-start'}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-snug shadow-[0_1px_1px_rgba(0,0,0,0.08)] ${
          mine ? 'rounded-br-md bg-[#d9f2e3] text-ink' : 'rounded-bl-md bg-white text-ink'
        }`}
      >
        {m.doc && (
          <div className="mb-2 flex items-center gap-3 rounded-lg bg-canvas-soft px-3 py-2.5">
            <DocumentTextIcon className="h-7 w-7 shrink-0" style={{ color: ACCENT }} aria-hidden="true" />
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold">{m.doc.name}</p>
              <p className="text-xs text-ink-muted">{m.doc.meta}</p>
            </div>
          </div>
        )}
        <Rich text={m.text} />
        {m.link && (
          <div
            className="mt-2.5 flex items-center justify-center gap-1.5 border-t border-ink-line/70 pt-2 text-[13px] font-semibold"
            style={{ color: ACCENT }}
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
            {m.link}
          </div>
        )}
      </div>
      {m.buttons && (
        <div className="mt-1 flex w-[88%] flex-col gap-1">
          {m.buttons.map((b) => (
            <div
              key={b}
              className="rounded-xl bg-white px-3 py-2 text-center text-[13px] font-semibold shadow-[0_1px_1px_rgba(0,0,0,0.08)]"
              style={{ color: ACCENT }}
            >
              {b}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ChatMock({ messages, label }) {
  const transcript = messages.map((m) => `${m.from === 'user' ? 'You' : 'Assistant'}: ${m.text.replace(/\*/g, '')}`).join(' ');
  return (
    <figure className="m-0 w-full max-w-sm">
      <div
        role="img"
        aria-label={`${label}. ${transcript}`}
        className="space-y-2 rounded-3xl border border-ink-line bg-[#ece6da] p-3 shadow-soft sm:p-4"
      >
        {messages.map((m, i) => (
          <Bubble key={i} m={m} />
        ))}
      </div>
      <figcaption className="mt-2 text-center text-xs text-ink-muted">Illustrative mock-up, not a screenshot</figcaption>
    </figure>
  );
}
