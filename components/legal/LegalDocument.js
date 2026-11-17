/**
 * LegalDocument — page layout for the Field Companion legal texts.
 *
 * Renders a tree from lib/legalMarkdown.js inside the shared nav and footer:
 * title and version, links between the three texts, a contents list built
 * from the ## headings (a sticky sidebar on large screens), and the text
 * itself. Headings carry ids that match the links in the text and show a #
 * anchor on hover. Tables turn into stacked label/value cards on small
 * screens. Drafting markers are highlighted, and while any are left a short
 * draft banner is shown. Nav, footer, contents and banner are hidden in print,
 * and the body is not animated so it always prints in full.
 */
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import SiteNav from '../SiteNav';
import SiteFooter from '../SiteFooter';

const ACCENT = '#047857';

export const FIELD_COMPANION_LEGAL = [
  { href: '/field-companion/privacy', label: 'Privacy notice' },
  { href: '/field-companion/terms', label: 'Terms of Service' },
  { href: '/field-companion/subprocessors', label: 'Subprocessors' },
];

const text = (nodes) => nodes.map((n) => (n.t === 'text' || n.t === 'code' ? n.v : text(n.c))).join('');

function Inline({ nodes }) {
  return nodes.map((n, i) => {
    switch (n.t) {
      case 'text':
        return n.v;
      case 'strong':
        return (
          <strong key={i} className="font-semibold text-ink">
            <Inline nodes={n.c} />
          </strong>
        );
      case 'code':
        return (
          <code key={i} className="rounded bg-canvas-soft px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
            {n.v}
          </code>
        );
      case 'link':
        return (
          <a key={i} href={n.href} className="legal-link font-medium underline decoration-1 underline-offset-2" style={{ color: ACCENT }}>
            <Inline nodes={n.c} />
          </a>
        );
      case 'marker':
        return (
          <mark key={i} className="legal-marker rounded bg-amber-100 px-1 text-[0.92em] text-amber-900 ring-1 ring-amber-300">
            <Inline nodes={n.c} />
          </mark>
        );
      default:
        return null;
    }
  });
}

function Lines({ lines }) {
  return lines.map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      <Inline nodes={line} />
    </span>
  ));
}

function Heading({ block }) {
  const Tag = `h${Math.min(block.level, 4)}`;
  const size =
    block.level === 2
      ? 'mt-14 border-t border-ink-line pt-10 text-3xl sm:text-4xl'
      : 'mt-9 text-xl font-semibold tracking-tight sm:text-2xl';
  return (
    <Tag id={block.id} className={`legal-heading group scroll-mt-28 text-ink ${size}`}>
      <Inline nodes={block.inline} />
      <a
        href={`#${block.id}`}
        aria-label={`Link to ${text(block.inline)}`}
        className="ml-2 font-sans text-[0.6em] text-ink-muted no-underline opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100 print:hidden"
      >
        #
      </a>
    </Tag>
  );
}

function List({ block }) {
  const Tag = block.ordered ? 'ol' : 'ul';
  return (
    <Tag
      start={block.ordered && block.start !== 1 ? block.start : undefined}
      className={`mt-4 space-y-2 pl-6 leading-relaxed text-ink/85 ${block.ordered ? 'list-decimal' : 'list-disc'} marker:text-ink-muted`}
    >
      {block.items.map((item, i) => (
        <li key={i} className="pl-1">
          <Inline nodes={item.inline} />
          {item.children.map((child, j) => (
            <Block key={j} block={child} />
          ))}
        </li>
      ))}
    </Tag>
  );
}

function Table({ block }) {
  const labels = block.header.map(text);
  // A table with an empty header row is a list of label/value pairs.
  if (labels.every((l) => !l)) {
    return (
      <dl className="legal-pairs mt-6 divide-y divide-ink-line overflow-hidden rounded-2xl border border-ink-line bg-canvas-card">
        {block.rows.map((row, i) => (
          <div key={i} className="grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <dt className="text-sm font-semibold text-ink">
              <Inline nodes={row[0]} />
            </dt>
            <dd className="text-[15px] leading-relaxed text-ink/85">
              {row.slice(1).map((cell, j) => (
                <Inline key={j} nodes={cell} />
              ))}
            </dd>
          </div>
        ))}
      </dl>
    );
  }
  return (
    <div className="legal-table-wrap mt-6">
      <table className="legal-table w-full border-collapse text-left text-sm">
        <thead>
          <tr>
            {block.header.map((cell, i) => (
              <th key={i} scope="col">
                <Inline nodes={cell} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} data-label={labels[j]}>
                  <Inline nodes={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case 'heading':
      return <Heading block={block} />;
    case 'para':
      return (
        <p className="mt-4 leading-relaxed text-ink/85">
          <Lines lines={block.lines} />
        </p>
      );
    case 'list':
      return <List block={block} />;
    case 'table':
      return <Table block={block} />;
    case 'quote':
      return (
        <blockquote className="legal-quote mt-6 rounded-r-2xl border-l-4 bg-canvas-soft px-5 py-4 sm:px-6" style={{ borderColor: ACCENT }}>
          {block.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </blockquote>
      );
    case 'hr':
      return null;
    default:
      return null;
  }
}

function Contents({ sections }) {
  return (
    <nav aria-label="Contents">
      <p className="eyebrow mb-4" style={{ color: ACCENT }}>
        Contents
      </p>
      <ol className="space-y-2 text-sm">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-ink-muted transition-colors hover:text-ink">
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function LegalDocument({ doc, path }) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="print:hidden">
        <SiteNav />
      </div>

      <main className="pt-28 pb-20 sm:pt-36 print:pt-0">
        <header className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <Link
              href="/field-companion"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80 print:hidden"
              style={{ color: ACCENT }}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Field Companion
            </Link>
            <p className="eyebrow mt-8 text-ink-muted">Field Companion · Gnanalytica, the Netherlands</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tightish text-ink sm:text-6xl">{doc.title}</h1>
            {doc.version && (
              <p className="mt-5 text-sm text-ink-muted">
                <Lines lines={doc.version} />
              </p>
            )}
            <nav aria-label="Field Companion legal texts" className="mt-7 flex flex-wrap gap-2 print:hidden">
              {FIELD_COMPANION_LEGAL.map((item) => {
                const current = item.href === path;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? 'page' : undefined}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                      current ? 'border-transparent text-white' : 'border-ink-line bg-canvas-card text-ink hover:border-ink-muted'
                    }`}
                    style={current ? { backgroundColor: ACCENT } : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>

          {doc.markers > 0 && (
            <div role="note" className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900">
              <strong className="font-semibold">Draft, not yet in force.</strong> This text is still being reviewed. Highlighted
              items in square brackets are open points that will be settled before it takes effect.
            </div>
          )}
        </header>

        <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14 lg:px-8">
          <aside className="print:hidden">
            <details className="rounded-2xl border border-ink-line bg-canvas-card p-5 lg:hidden">
              <summary className="cursor-pointer text-sm font-semibold text-ink">Contents</summary>
              <div className="mt-4">
                <Contents sections={doc.sections} />
              </div>
            </details>
            <div className="sticky top-28 hidden max-h-[calc(100vh-8rem)] overflow-y-auto pb-8 lg:block">
              <Contents sections={doc.sections} />
            </div>
          </aside>

          <article className="legal-doc min-w-0 max-w-3xl text-[16px] sm:text-[17px]">
            {doc.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>
        </div>
      </main>

      <div className="print:hidden">
        <SiteFooter />
      </div>
    </div>
  );
}
