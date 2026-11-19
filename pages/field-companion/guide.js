import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import LegalHead from '../../components/legal/LegalHead';
import ChatMock from '../../components/guide/ChatMock';
import PhoneMock from '../../components/guide/PhoneMock';
import { loadLegalDocument } from '../../lib/legalMarkdown';
import { ADMIN, GUIDE_VIDEO, STEPS } from '../../lib/guide';

const PATH = '/field-companion/guide';
const ACCENT = '#047857';

/**
 * Field Companion guide, served at /field-companion/guide.
 *
 * Walks a new person through the product with mock chats (components/guide),
 * then the 3-minute demo video (#video), a set-up section for admins (#admin)
 * and the FAQ (#faq). Steps and admin content: lib/guide.js. FAQ text:
 * content/field-companion/guide-faq.md, read at build time. English only for now.
 * The page is linked from the welcome message, the help menu, the Field
 * Companion product page and the web app.
 */
export default function FieldCompanionGuide({ faq }) {
  const nav = [
    ...STEPS.map((s) => ({ id: s.id, title: s.title })),
    { id: 'video', title: 'Video' },
    { id: 'admin', title: 'For admins' },
    { id: 'faq', title: 'FAQ' },
  ];
  return (
    <>
      <LegalHead
        title="Field Companion guide"
        description="How Field Companion works, step by step: join, brief a visit, walk the site, get the report. With the 3-minute video, an FAQ and a set-up section for admins."
        path={PATH}
      />
      <div className="min-h-screen bg-canvas text-ink">
        <SiteNav />
        <main className="pt-28 pb-20 sm:pt-36">
          <header className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/field-companion"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: ACCENT }}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Field Companion
            </Link>
            <p className="eyebrow mt-8 text-ink-muted">Field Companion · Gnanalytica, the Netherlands</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tightish sm:text-6xl">How Field Companion works</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/85">
              Field Companion is an AI assistant for site inspections. You talk to it in WhatsApp and walk the site with a link
              in your phone’s browser. Here is each step, with what the chat looks like.
            </p>
            <nav aria-label="On this page" className="mt-7 flex flex-wrap gap-2">
              {nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className="rounded-full border border-ink-line bg-canvas-card px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-ink-muted"
                >
                  {n.title}
                </a>
              ))}
            </nav>
          </header>

          <div className="mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8">
            {STEPS.map((step, i) => (
              <section key={step.id} id={step.id} className="scroll-mt-28 border-t border-ink-line py-12 first:border-t-0 sm:py-16">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
                  <div>
                    <p className="eyebrow" style={{ color: ACCENT }}>
                      Step {i + 1}
                    </p>
                    <h2 className="mt-3 font-display text-3xl tracking-tightish sm:text-4xl">{step.title}</h2>
                    <p className="mt-4 leading-relaxed text-ink/85">{step.body}</p>
                  </div>
                  <div className="flex flex-col items-center gap-10 lg:items-start">
                    {step.chat && <ChatMock messages={step.chat} label={step.title} />}
                    {step.phone && <PhoneMock phone={step.phone} />}
                    {step.aside && (
                      <div className="w-full max-w-sm">
                        <h3 className="font-sans text-base font-semibold">{step.asideTitle}</h3>
                        <div className="mt-3">
                          <ChatMock messages={step.aside} label={step.asideTitle} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ))}

            <section id="video" className="scroll-mt-28 border-t border-ink-line py-12 sm:py-16">
              <h2 className="font-display text-3xl tracking-tightish sm:text-4xl">{GUIDE_VIDEO.title}</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink/85">A visit from the brief to the report, in about three minutes.</p>
              <div className="mt-8 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-ink-line bg-black shadow-soft">
                <video className="h-full w-full" controls preload="metadata" playsInline poster={GUIDE_VIDEO.poster}>
                  <source src={GUIDE_VIDEO.src} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              </div>
            </section>

            <section id="admin" className="scroll-mt-28 border-t border-ink-line py-12 sm:py-16">
              <p className="eyebrow" style={{ color: ACCENT }}>
                For admins
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tightish sm:text-4xl">Setting up your organisation</h2>

              <h3 className="mt-10 font-sans text-xl font-semibold tracking-tight">{ADMIN.invite.title}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink/85">{ADMIN.invite.body}</p>
              <dl className="mt-5 divide-y divide-ink-line overflow-hidden rounded-2xl border border-ink-line bg-canvas-card">
                {ADMIN.invite.commands.map((c) => (
                  <div key={c.cmd} className="grid gap-1 px-4 py-3.5 sm:grid-cols-[minmax(0,19rem)_1fr] sm:gap-6 sm:px-5">
                    <dt>
                      <code className="break-words rounded bg-canvas-soft px-1.5 py-0.5 font-mono text-[0.85em]">{c.cmd}</code>
                    </dt>
                    <dd className="text-[15px] leading-relaxed text-ink/85">{c.does}</dd>
                  </div>
                ))}
              </dl>

              <h3 className="mt-12 font-sans text-xl font-semibold tracking-tight">{ADMIN.name.title}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink/85">{ADMIN.name.body}</p>

              <h3 className="mt-12 font-sans text-xl font-semibold tracking-tight">{ADMIN.roles.title}</h3>
              <dl className="mt-5 divide-y divide-ink-line overflow-hidden rounded-2xl border border-ink-line bg-canvas-card">
                {ADMIN.roles.rows.map(([role, what]) => (
                  <div key={role} className="grid gap-1 px-4 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:px-5">
                    <dt className="text-sm font-semibold">{role}</dt>
                    <dd className="text-[15px] leading-relaxed text-ink/85">{what}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-ink-muted">{ADMIN.roles.note}</p>
            </section>

            <section id="faq" className="scroll-mt-28 border-t border-ink-line py-12 sm:py-16">
              <h2 className="font-display text-3xl tracking-tightish sm:text-4xl">Questions and answers</h2>
              <div className="mt-8 max-w-3xl divide-y divide-ink-line rounded-2xl border border-ink-line bg-canvas-card">
                {faq.map((item) => (
                  <details key={item.q} className="group px-4 py-4 sm:px-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold">
                      {item.q}
                      <span className="text-ink-muted transition-transform group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-ink/85">
                      <Inline nodes={item.a} />
                    </p>
                  </details>
                ))}
              </div>
              <p className="mt-8 text-sm text-ink-muted">
                More about how your data is handled: the{' '}
                <Link href="/field-companion/privacy" className="font-medium underline underline-offset-2" style={{ color: ACCENT }}>
                  privacy notice
                </Link>{' '}
                and the{' '}
                <Link href="/field-companion/terms" className="font-medium underline underline-offset-2" style={{ color: ACCENT }}>
                  terms of service
                </Link>
                .
              </p>
            </section>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

/** Inline Markdown nodes from lib/legalMarkdown.js: text, bold, code and links. */
function Inline({ nodes }) {
  return nodes.map((n, i) => {
    if (n.t === 'text') return n.v;
    if (n.t === 'strong') return <strong key={i}><Inline nodes={n.c} /></strong>;
    if (n.t === 'code') return <code key={i} className="rounded bg-canvas-soft px-1.5 py-0.5 font-mono text-[0.85em]">{n.v}</code>;
    if (n.t === 'link') return <a key={i} href={n.href} className="underline underline-offset-2" style={{ color: ACCENT }}><Inline nodes={n.c} /></a>;
    return null;
  });
}

/** The FAQ is a list of ## questions, each followed by one paragraph. */
export function getStaticProps() {
  const doc = loadLegalDocument('guide-faq');
  const faq = [];
  const text = (nodes) => nodes.map((n) => (n.t === 'text' || n.t === 'code' ? n.v : text(n.c))).join('');
  for (const block of doc.blocks) {
    if (block.type === 'heading' && block.level === 2) {
      faq.push({ q: text(block.inline), a: [] });
    } else if (block.type === 'para' && faq.length) {
      faq[faq.length - 1].a = block.lines.flat();
    }
  }
  return { props: { faq } };
}
