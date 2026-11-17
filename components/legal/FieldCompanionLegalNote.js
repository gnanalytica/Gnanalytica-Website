/**
 * FieldCompanionLegalNote — a short boxed note for the Gnanalytica
 * Technologies LLP privacy policy and terms, pointing Field Companion users
 * to the Dutch business's own texts.
 */
import Link from 'next/link';

const linkClass = 'font-semibold underline decoration-1 underline-offset-2 hover:opacity-80';

export default function FieldCompanionLegalNote({ className = '' }) {
  return (
    <aside
      aria-label="Field Companion"
      className={`rounded-lg border border-emerald-700/25 bg-emerald-50 px-5 py-4 text-sm leading-relaxed text-emerald-950 ${className}`}
    >
      <p>
        Field Companion is provided by Gnanalytica in the Netherlands (KvK 98649035) and has its own{' '}
        <Link href="/field-companion/privacy" className={linkClass}>
          privacy notice
        </Link>{' '}
        and{' '}
        <Link href="/field-companion/terms" className={linkClass}>
          terms
        </Link>
        .
      </p>
      <p className="mt-1">
        <Link href="/field-companion/subprocessors" className={linkClass}>
          Field Companion subprocessors
        </Link>
      </p>
    </aside>
  );
}
