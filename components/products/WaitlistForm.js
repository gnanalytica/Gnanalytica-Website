/**
 * The Field Companion waitlist: a section with the id `waitlist`, so CTAs can
 * point at /field-companion#waitlist.
 *
 * The form posts straight from the browser to Field Companion (lib/waitlist.js).
 * The server answers the same "received" whether the number is new, known or
 * already a member, so the success text never says more than "your request is
 * in". Two quiet checks keep simple bots out: a field people never see
 * (`xCheck`, must stay empty) and the time spent on the form (`elapsedMs`).
 *
 * The page is built statically, so the browser's language and the start time
 * are read after the first render, never during it.
 */
import { useEffect, useRef, useState } from 'react';
import {
  COUNTRIES,
  LANGUAGES,
  LIMITS,
  WAITLIST_OPT_IN_TEXT,
  buildPayload,
  languageFromBrowser,
  submitWaitlist,
  waitlistEndpoint,
} from '../../lib/waitlist';

const PRIVACY_HREF = '/field-companion/privacy#6-data-we-decide-about-ourselves-we-are-controller';

const EMPTY = {
  name: '',
  organisation: '',
  email: '',
  country: '31',
  phone: '',
  language: 'en',
  note: '',
  optIn: false,
  xCheck: '',
};

/** The message under a field, by field and problem code. */
const MESSAGES = {
  name: { required: 'Please enter your name.', invalid: 'Please enter your name, on one line.' },
  organisation: {
    required: 'Please enter your organisation’s name.',
    short: 'Please enter at least 2 characters.',
    invalid: 'Please enter your organisation’s name, 2 to 60 characters.',
    invalid_name:
      'Please use only letters, digits, spaces and & - . ’ in the name, with no link, email address or phone number.',
  },
  email: { required: 'Please enter your work email.', invalid: 'Please enter a valid email address.' },
  phone: {
    required: 'Please enter your WhatsApp number.',
    invalid: 'Please check the number.',
    phone_needs_country_code: 'Please add the country code: pick a country, or start the number with +.',
    phone_invalid: 'This does not look like a WhatsApp number. Please check it.',
  },
  language: { invalid: 'Please pick a language.' },
  note: { invalid: `Please keep this under ${LIMITS.note} characters.` },
  optIn: { required: 'Please tick the box so we may send you the WhatsApp message.' },
  whatsappOptIn: { invalid: 'Please tick the box so we may send you the WhatsApp message.' },
};

/** The order in which fields appear, for moving focus to the first problem. */
const ORDER = ['name', 'organisation', 'email', 'phone', 'language', 'note', 'optIn'];

/** Checks in the browser, before sending. The server checks again. */
function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'required';
  const org = values.organisation.trim();
  if (!org) errors.organisation = 'required';
  else if ([...org].length < LIMITS.organisationMin) errors.organisation = 'short';
  if (!values.email.trim()) errors.email = 'required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'invalid';
  if (!values.phone.trim()) errors.phone = 'required';
  if (!values.optIn) errors.optIn = 'required';
  return errors;
}

function Field({ id, label, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
        {hint && <span className="ml-1 font-normal text-ink-muted">{hint}</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-rose-700">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError) =>
  `block w-full rounded-lg border bg-canvas-card px-3.5 py-2.5 text-base text-ink shadow-sm placeholder:text-ink-muted/70 focus:ring-2 focus:ring-offset-0 sm:text-sm ${
    hasError ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-200' : 'border-ink-line focus:border-emerald-600 focus:ring-emerald-100'
  }`;

export default function WaitlistForm({ product }) {
  const { theme, waitlist } = product;
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle'); // idle | submitting | retry | done
  const [done, setDone] = useState(null); // { firstName, organisation }
  const startedAt = useRef(null);
  const successRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    startedAt.current = Date.now();
    const lang = typeof navigator !== 'undefined' ? languageFromBrowser(navigator.language) : 'en';
    setValues((v) => ({ ...v, language: lang }));
  }, []);

  useEffect(() => {
    if (state === 'done' && successRef.current) successRef.current.focus();
  }, [state]);

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((errs) => ({ ...errs, [key]: undefined }));
  };

  const focusFirst = (errs) => {
    const first = ORDER.find((key) => errs[key]);
    if (!first || !formRef.current) return;
    const el = formRef.current.querySelector(`#wl-${first}`);
    if (el) el.focus();
  };

  const message = (key) => {
    const code = errors[key];
    if (!code) return null;
    const byField = MESSAGES[key] || {};
    return byField[code] || byField.invalid || byField.required || 'Please check this field.';
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (state === 'submitting') return;
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      focusFirst(errs);
      return;
    }
    setState('submitting');
    const elapsed = startedAt.current ? Date.now() - startedAt.current : 0;
    const result = await submitWaitlist(buildPayload(values, elapsed), waitlistEndpoint(waitlist.endpoint));
    if (result.ok) {
      setDone({ firstName: values.name.trim().split(/\s+/)[0], organisation: values.organisation.trim() });
      setState('done');
      return;
    }
    if (result.fields) {
      // The server's "whatsappOptIn" problem is shown under the tick box.
      const fieldErrs = { ...result.fields };
      if (fieldErrs.whatsappOptIn) {
        fieldErrs.optIn = 'required';
        delete fieldErrs.whatsappOptIn;
      }
      setErrors(fieldErrs);
      setState('idle');
      focusFirst(fieldErrs);
      return;
    }
    setState('retry');
  }

  const describedBy = (key) => (errors[key] ? `wl-${key}-error` : undefined);

  return (
    <section id="waitlist" className="scroll-mt-24 border-t border-ink-line bg-canvas-soft py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="eyebrow mb-4" style={{ color: theme.primary }}>
            Waitlist
          </p>
          <h2 className="font-display text-4xl tracking-tightish text-ink sm:text-5xl">Try Field Companion</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Ask for access and we will review your request by hand. For organisations based in the EU or EEA.
          </p>
        </div>

        <div className="rounded-2xl border border-ink-line bg-canvas-card p-6 shadow-soft sm:p-8">
          {/* Only the confirmation is announced; the form's own messages are not in this region. */}
          <div aria-live="polite">
            {state === 'done' && done && (
              <div>
                <h3 ref={successRef} tabIndex={-1} className="font-display text-3xl tracking-tightish text-ink outline-none">
                  Thanks, {done.firstName}. Your request is in.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  We review every request by hand, usually within two working days. If we approve it, you’ll get a WhatsApp message from{' '}
                  {waitlist.businessNumber}: that is Field Companion by Gnanalytica (for now WhatsApp may show the name “Gnanalytica NL”). It
                  has a button to set up {done.organisation}. Save the number so you recognise it. Didn’t mean to apply? Tap{' '}
                  <em>Not me</em> in that message, or just ignore it.
                </p>
              </div>
            )}
          </div>
          {state !== 'done' && (
            <form ref={formRef} onSubmit={onSubmit} noValidate className="relative space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="wl-name" label="Your name" error={message('name')}>
                  <input
                    id="wl-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={LIMITS.name}
                    required
                    value={values.name}
                    onChange={set('name')}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={describedBy('name')}
                    className={inputClass(errors.name)}
                  />
                </Field>
                <Field id="wl-organisation" label="Organisation" error={message('organisation')}>
                  <input
                    id="wl-organisation"
                    name="organisation"
                    type="text"
                    autoComplete="organization"
                    maxLength={LIMITS.organisation}
                    required
                    value={values.organisation}
                    onChange={set('organisation')}
                    aria-invalid={errors.organisation ? true : undefined}
                    aria-describedby={describedBy('organisation')}
                    className={inputClass(errors.organisation)}
                  />
                </Field>
              </div>

              <Field id="wl-email" label="Work email" error={message('email')}>
                <input
                  id="wl-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={LIMITS.email}
                  required
                  value={values.email}
                  onChange={set('email')}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={describedBy('email')}
                  className={inputClass(errors.email)}
                />
              </Field>

              <Field id="wl-phone" label="WhatsApp number" error={message('phone')}>
                <div className="flex flex-col gap-2 xs:flex-row">
                  <label htmlFor="wl-country" className="sr-only">
                    Country code
                  </label>
                  <select
                    id="wl-country"
                    name="country"
                    value={values.country}
                    onChange={set('country')}
                    className={`${inputClass(false)} xs:w-56 xs:flex-none`}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <input
                    id="wl-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete={values.country === 'other' ? 'tel' : 'tel-national'}
                    maxLength={32}
                    required
                    placeholder={values.country === 'other' ? '+…' : '06 1234 5678'}
                    value={values.phone}
                    onChange={set('phone')}
                    aria-invalid={errors.phone ? true : undefined}
                    aria-describedby={describedBy('phone')}
                    className={inputClass(errors.phone)}
                  />
                </div>
              </Field>

              <Field id="wl-language" label="Preferred language" error={message('language')}>
                <select
                  id="wl-language"
                  name="language"
                  value={values.language}
                  onChange={set('language')}
                  aria-describedby={describedBy('language')}
                  className={inputClass(errors.language)}
                >
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field id="wl-note" label="What would you use it for?" hint="(optional)" error={message('note')}>
                <textarea
                  id="wl-note"
                  name="note"
                  rows={3}
                  maxLength={LIMITS.note}
                  value={values.note}
                  onChange={set('note')}
                  aria-describedby={`wl-note-count${errors.note ? ' wl-note-error' : ''}`}
                  className={inputClass(errors.note)}
                />
                <p id="wl-note-count" className="mt-1 text-right text-xs text-ink-muted">
                  {values.note.length} / {LIMITS.note}
                </p>
              </Field>

              {/* Left empty by people; a bot that fills every field fills it. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="wl-xc">Leave this empty</label>
                <input id="wl-xc" name="xc_field" type="text" tabIndex={-1} autoComplete="off" value={values.xCheck} onChange={set('xCheck')} />
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <input
                    id="wl-optIn"
                    name="whatsappOptIn"
                    type="checkbox"
                    required
                    checked={values.optIn}
                    onChange={set('optIn')}
                    aria-invalid={errors.optIn ? true : undefined}
                    aria-describedby={describedBy('optIn')}
                    className={`mt-0.5 h-5 w-5 flex-none rounded text-emerald-700 focus:ring-emerald-600 ${errors.optIn ? 'border-rose-500' : 'border-ink-line'}`}
                  />
                  <label htmlFor="wl-optIn" className="text-sm leading-relaxed text-ink">
                    {WAITLIST_OPT_IN_TEXT}
                  </label>
                </div>
                {errors.optIn && (
                  <p id="wl-optIn-error" className="mt-1.5 text-sm text-rose-700">
                    {message('optIn')}
                  </p>
                )}
              </div>

              {state === 'retry' && (
                <p role="alert" className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                  We couldn’t send this just now. Please try again in a minute, or email{' '}
                  <a className="font-medium underline" href="mailto:contact@gnanalytica.com">
                    contact@gnanalytica.com
                  </a>
                  .
                </p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg px-7 py-3 text-sm font-semibold text-white shadow-lift transition-opacity disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                  style={{ backgroundImage: theme.gradient }}
                >
                  {state === 'submitting' ? 'Sending…' : 'Request access'}
                </button>
                <p className="mt-4 text-xs leading-relaxed text-ink-muted">
                  We use these details only to review your request and, if we approve it, to send you one WhatsApp message (or, if WhatsApp
                  does not reach you, one email) with a way to set up your organisation. See our{' '}
                  <a href={PRIVACY_HREF} className="font-medium underline" style={{ color: theme.primary }}>
                    privacy notice
                  </a>
                  .
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
