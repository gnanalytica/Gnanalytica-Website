/**
 * The Field Companion waitlist form's logic: the opt-in wording, the country
 * list, how a typed number becomes an international one, and the call to the
 * Field Companion server.
 *
 * The browser sends the form straight to Field Companion
 * (`POST https://fc.gnanalytica.com/v1/waitlist`), so the website host never
 * receives what people type, and there are no secrets here. The request shape
 * is `WaitlistSubmitRequest` in the Field Companion repo
 * (packages/shared/src/contracts/waitlist.ts). That schema is strict, so this
 * file sends exactly its fields and nothing else.
 */

/**
 * Where the form posts: `waitlist.endpoint` in lib/products.js, unless
 * NEXT_PUBLIC_FC_WAITLIST_ENDPOINT is set at build time (for a local Field
 * Companion server, for example http://localhost:8080/v1/waitlist).
 */
export function waitlistEndpoint(configured) {
  return process.env.NEXT_PUBLIC_FC_WAITLIST_ENDPOINT || configured;
}

/**
 * The version of the WhatsApp opt-in wording below. Field Companion stores it
 * with each request and accepts only this exact value, so the wording and this
 * constant change together, in both repos (`WAITLIST_OPT_IN_VERSION`).
 */
export const WAITLIST_OPT_IN_VERSION = 'fc-waitlist-optin-1.0';

/** The opt-in wording of version fc-waitlist-optin-1.0. Do not edit without a new version. */
export const WAITLIST_OPT_IN_TEXT =
  'I agree that Gnanalytica (Eindhoven, the Netherlands), the maker of Field Companion, may send me WhatsApp messages about this request from its business number +31 6 87018349. I can reply STOP at any time.';

/** Limits, the same as the server's. */
export const LIMITS = { name: 80, organisationMin: 2, organisation: 60, email: 254, note: 500 };

/**
 * Countries offered in the picker: EEA countries only (terms 4.9). "Other"
 * lets someone type the whole number with its country code; staff judge those.
 */
export const COUNTRIES = [
  { code: '31', label: 'Netherlands (+31)' },
  { code: '32', label: 'Belgium (+32)' },
  { code: '49', label: 'Germany (+49)' },
  { code: '33', label: 'France (+33)' },
  { code: '34', label: 'Spain (+34)' },
  { code: '39', label: 'Italy (+39)' },
  { code: '351', label: 'Portugal (+351)' },
  { code: '353', label: 'Ireland (+353)' },
  { code: '43', label: 'Austria (+43)' },
  { code: '352', label: 'Luxembourg (+352)' },
  { code: 'other', label: 'Other: type the number with +' },
];

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'es', label: 'Español' },
];

/** The form's language from the browser's: nl or es when it starts so, otherwise en. */
export function languageFromBrowser(tag) {
  const base = String(tag || '').toLowerCase().slice(0, 2);
  return base === 'nl' || base === 'es' ? base : 'en';
}

/**
 * The number as the server expects it, with its country code.
 *
 * - With a country picked: drop spaces, dashes, dots and brackets, and one
 *   leading 0, then put "+<code>" in front: "31" and "06 1234 5678" give
 *   "+31612345678". A number typed with + or 00 is kept as typed, so a
 *   person who types the country code anyway is not doubled.
 * - With "Other": the number as typed, without the separators. The server
 *   asks for a country code if it has none.
 */
export function composePhone(countryCode, typed) {
  const compact = String(typed || '').replace(/[\s\-().]/g, '');
  if (!compact) return '';
  if (compact.startsWith('+') || compact.startsWith('00')) return compact;
  if (countryCode === 'other' || !countryCode) return compact;
  return `+${countryCode}${compact.replace(/^0/, '')}`;
}

/** The request body: exactly the fields of WaitlistSubmitRequest. */
export function buildPayload(values, elapsedMs) {
  const payload = {
    name: values.name.trim(),
    organisation: values.organisation.trim(),
    email: values.email.trim(),
    phone: composePhone(values.country, values.phone),
    language: values.language,
    whatsappOptIn: true,
    optInVersion: WAITLIST_OPT_IN_VERSION,
    xCheck: values.xCheck || '',
    elapsedMs: Math.min(86_400_000, Math.max(0, Math.round(elapsedMs))),
  };
  const note = values.note.trim();
  if (note) payload.note = note;
  return payload;
}

/** Which field a server problem belongs to. */
const CODE_FIELDS = {
  phone_needs_country_code: 'phone',
  phone_invalid: 'phone',
  invalid_name: 'organisation',
};

const PATH_FIELDS = ['name', 'organisation', 'email', 'phone', 'language', 'note', 'whatsappOptIn'];

/**
 * Send the request. Resolves to one of:
 * - `{ ok: true }` (202 `received`; the same answer for a new request, a repeat and a known number);
 * - `{ ok: false, fields: { field: code } }` for answers the form can show under a field;
 * - `{ ok: false, retry: true }` for everything else (429, 503, other codes, no network).
 */
export async function submitWaitlist(payload, endpoint) {
  let res;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    return { ok: false, retry: true };
  }
  if (res.status === 202 || res.status === 200) return { ok: true };

  let problem = null;
  try {
    problem = await res.json();
  } catch {
    problem = null;
  }
  const code = problem && typeof problem.code === 'string' ? problem.code : '';

  if (CODE_FIELDS[code]) return { ok: false, fields: { [CODE_FIELDS[code]]: code } };

  if (code === 'invalid_request' && Array.isArray(problem.issues)) {
    const fields = {};
    for (const issue of problem.issues) {
      const field = String(issue.path || '').split('.')[0];
      if (PATH_FIELDS.includes(field) && !fields[field]) fields[field] = 'invalid';
    }
    if (Object.keys(fields).length > 0) return { ok: false, fields };
  }
  return { ok: false, retry: true };
}
