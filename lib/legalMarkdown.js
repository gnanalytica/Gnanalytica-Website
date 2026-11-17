/**
 * A small Markdown reader for the Field Companion legal texts.
 *
 * The privacy notice, terms and subprocessor list are kept as Markdown in
 * content/field-companion/ so their wording stays exactly as approved. This
 * module turns that Markdown into a plain JSON tree at build time
 * (getStaticProps), which components/legal/LegalDocument.js renders.
 *
 * It supports only what those texts use: headings, paragraphs (a line break
 * inside a paragraph is kept), bullet and numbered lists (nested by indent),
 * tables, block quotes, horizontal rules, **bold**, `code` and [links](href).
 *
 * Drafting markers such as [OWNER: ...], [OPEN 4] and [to confirm] become
 * `marker` nodes so the page can highlight them; `countMarkers` tells a page
 * whether any are left.
 */
import fs from 'fs';
import path from 'path';

const MARKER = /^\[(?:OWNER|Owner|OPEN|to confirm|confirm)\b[^\]]*\]/;
const LINK = /^\[((?:[^\]`]|`[^`]*`)+)\]\(([^)\s]+)\)/;

/** GitHub-style heading slug, so links such as #2-status-today-... resolve. */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, '')
    .trim()
    .replace(/\s/g, '-');
}

/** Parse inline Markdown into nodes: text, strong, code, link, marker. */
export function parseInline(src) {
  const out = [];
  let buf = '';
  const flush = () => {
    if (buf) out.push({ t: 'text', v: buf });
    buf = '';
  };
  let i = 0;
  while (i < src.length) {
    const rest = src.slice(i);
    if (rest.startsWith('**')) {
      const end = src.indexOf('**', i + 2);
      if (end > i + 2) {
        flush();
        out.push({ t: 'strong', c: parseInline(src.slice(i + 2, end)) });
        i = end + 2;
        continue;
      }
    }
    if (rest[0] === '`') {
      const end = src.indexOf('`', i + 1);
      if (end > i) {
        flush();
        out.push({ t: 'code', v: src.slice(i + 1, end) });
        i = end + 1;
        continue;
      }
    }
    if (rest[0] === '[') {
      const link = rest.match(LINK);
      if (link) {
        flush();
        out.push({ t: 'link', href: link[2], c: parseInline(link[1]) });
        i += link[0].length;
        continue;
      }
      const marker = rest.match(MARKER);
      if (marker) {
        flush();
        const inner = parseInline(marker[0].slice(1, -1));
        out.push({ t: 'marker', c: [{ t: 'text', v: '[' }, ...inner, { t: 'text', v: ']' }] });
        i += marker[0].length;
        continue;
      }
    }
    buf += src[i];
    i += 1;
  }
  flush();
  return out;
}

/** Plain text of inline nodes (for slugs, table labels and checks). */
export function inlineText(nodes) {
  return nodes
    .map((n) => (n.t === 'text' || n.t === 'code' ? n.v : inlineText(n.c)))
    .join('');
}

const splitRow = (line) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());

const LIST_ITEM = /^(\s*)([-*]|\d+\.)\s+(.*)$/;
const isTableRule = (line) => /^\s*\|?\s*:?-{3,}/.test(line);
const startsBlock = (line) =>
  /^#{1,6}\s/.test(line) || LIST_ITEM.test(line) || /^\s*>/.test(line) || /^\s*\|/.test(line) || /^-{3,}\s*$/.test(line);

/** Parse a block of Markdown lines into block nodes. */
function parseBlocks(lines, ids) {
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      const inline = parseInline(heading[2].trim());
      let id = slugify(inlineText(inline));
      if (ids.has(id)) {
        let n = 1;
        while (ids.has(`${id}-${n}`)) n += 1;
        id = `${id}-${n}`;
      }
      ids.add(id);
      blocks.push({ type: 'heading', level: heading[1].length, id, inline });
      i += 1;
      continue;
    }
    if (/^-{3,}\s*$/.test(line)) {
      blocks.push({ type: 'hr' });
      i += 1;
      continue;
    }
    if (/^\s*>/.test(line)) {
      const inner = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) {
        inner.push(lines[i].replace(/^\s*> ?/, ''));
        i += 1;
      }
      blocks.push({ type: 'quote', blocks: parseBlocks(inner, ids) });
      continue;
    }
    if (/^\s*\|/.test(line) && i + 1 < lines.length && isTableRule(lines[i + 1])) {
      const header = splitRow(line).map(parseInline);
      i += 2;
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        rows.push(splitRow(lines[i]).map(parseInline));
        i += 1;
      }
      blocks.push({ type: 'table', header, rows });
      continue;
    }
    if (LIST_ITEM.test(line)) {
      const items = [];
      while (i < lines.length && LIST_ITEM.test(lines[i])) {
        items.push(lines[i]);
        i += 1;
      }
      blocks.push(parseList(items));
      continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() && !startsBlock(lines[i])) {
      para.push(parseInline(lines[i].trim()));
      i += 1;
    }
    blocks.push({ type: 'para', lines: para });
  }
  return blocks;
}

/** Build a (possibly nested) list from consecutive list lines. */
function parseList(lines) {
  const parse = (start, indent) => {
    const first = lines[start].match(LIST_ITEM);
    const ordered = /\d/.test(first[2]);
    const list = { type: 'list', ordered, start: ordered ? parseInt(first[2], 10) : null, items: [] };
    let i = start;
    while (i < lines.length) {
      const m = lines[i].match(LIST_ITEM);
      const level = m[1].length;
      if (level < indent) break;
      if (level > indent) {
        const [child, next] = parse(i, level);
        list.items[list.items.length - 1].children.push(child);
        i = next;
        continue;
      }
      list.items.push({ inline: parseInline(m[3]), children: [] });
      i += 1;
    }
    return [list, i];
  };
  return parse(0, lines[0].match(LIST_ITEM)[1].length)[0];
}

/** Count drafting markers left in a block tree. */
export function countMarkers(blocks) {
  let n = 0;
  const walkInline = (nodes) =>
    nodes.forEach((node) => {
      if (node.t === 'marker') n += 1;
      else if (node.c) walkInline(node.c);
    });
  const walk = (list) =>
    list.forEach((b) => {
      if (b.inline) walkInline(b.inline);
      if (b.lines) b.lines.forEach(walkInline);
      if (b.header) b.header.forEach(walkInline);
      if (b.rows) b.rows.forEach((r) => r.forEach(walkInline));
      if (b.blocks) walk(b.blocks);
      if (b.items)
        b.items.forEach((it) => {
          walkInline(it.inline);
          walk(it.children);
        });
    });
  walk(blocks);
  return n;
}

/**
 * Read and parse one legal text. Returns its title (the # heading), the
 * version line under it, the body blocks, the ## sections for the contents
 * list, and how many drafting markers it still holds.
 */
export function loadLegalDocument(name) {
  const file = path.join(process.cwd(), 'content', 'field-companion', `${name}.md`);
  const blocks = parseBlocks(fs.readFileSync(file, 'utf8').split('\n'), new Set());
  const titleBlock = blocks.shift();
  if (!titleBlock || titleBlock.type !== 'heading' || titleBlock.level !== 1) {
    throw new Error(`${name}.md must start with a # title`);
  }
  let version = null;
  if (blocks[0] && blocks[0].type === 'para' && inlineText(blocks[0].lines[0]).startsWith('Version ')) {
    version = blocks.shift().lines;
  }
  const sections = blocks
    .filter((b) => b.type === 'heading' && b.level === 2)
    .map((b) => ({ id: b.id, title: inlineText(b.inline) }));
  return {
    title: inlineText(titleBlock.inline),
    version,
    blocks,
    sections,
    markers: countMarkers(blocks),
  };
}
