/**
 * Central product catalogue for Gnanalytica.
 *
 * Each entry powers the homepage Products showcase, the nav/footer product
 * lists, and the dedicated product landing pages at /valytica, /standup,
 * /learn and /field-companion. Every product carries its own accent palette (raw colour
 * values, not Tailwind class names) so gradients can be applied via inline
 * styles without the JIT purge stripping dynamic class names.
 *
 * Content is sourced from each product's own repo so the marketing copy stays
 * true to the live product.
 */

export const products = [
  {
    slug: 'valytica',
    name: 'Valytica',
    category: 'Valuation Intelligence',
    tagline: 'Valuation reports in minutes, not days.',
    chip: 'valuation reports in minutes',
    summary:
      'Upload your documents, review what the AI finds, and sign off on a compliant, standards-aligned report. One flow instead of five tools — and the valuer always has the final word.',
    url: 'https://valytica.gnanalytica.com',
    cta: 'Start free',
    theme: {
      primary: '#1d4ed8',
      accent: '#3b82f6',
      soft: '#eff6ff',
      glow: 'rgba(59, 130, 246, 0.35)',
      gradient: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
      textGradient: 'linear-gradient(120deg, #1d4ed8 0%, #3b82f6 100%)',
    },
    hero: {
      kicker: 'Valuation intelligence',
      title: 'Valuation reports in',
      highlight: 'minutes, not days',
      subtitle:
        'Stop stitching together spreadsheets, PDFs and portals. Valytica consolidates extraction, verification and report generation into one AI-assisted workspace — the valuer always stays in control.',
      ctaPrimary: { label: 'Start free', href: 'https://valytica.gnanalytica.com' },
      ctaSecondary: { label: 'How it works', href: '#how-it-works' },
      principle: 'AI suggests. The valuer approves.',
    },
    stats: [
      { value: 'Minutes', label: 'Report turnaround' },
      { value: '3 States', label: 'Portal checks built in' },
      { value: 'IBA', label: 'Aligned PDF output' },
      { value: 'Mumbai', label: 'Indian data residency' },
    ],
    features: [
      {
        icon: 'document',
        title: 'AI field extraction',
        description:
          'Drop in title deeds, tax receipts and approvals — Valytica reads the documents and pre-fills your case fields for review.',
      },
      {
        icon: 'shield',
        title: 'State portal checks',
        description:
          'Built-in verification against Telangana, Andhra Pradesh and Karnataka portals so encumbrances surface before sign-off.',
      },
      {
        icon: 'mobile',
        title: 'Mobile site evidence',
        description:
          'Capture geotagged photos and site observations on your phone; they flow straight into the case record.',
      },
      {
        icon: 'badge',
        title: 'IBA-aligned reports',
        description:
          'Generate clean, bank-ready PDF valuation reports that follow the formats your institutions expect.',
      },
    ],
    steps: [
      { title: 'Create a case', description: 'Open a new valuation and add the property and applicant details.' },
      { title: 'AI extracts fields', description: 'Upload documents and let Valytica populate the report for you to verify.' },
      { title: 'Capture site evidence', description: 'Document the site visit from mobile with photos and notes.' },
      { title: 'Generate report', description: 'Produce a compliant, IBA-aligned PDF ready for the bank.' },
    ],
    closing: {
      title: 'Built for India. Built for compliance.',
      subtitle:
        'Indian data residency on AWS Mumbai, encryption at rest and in transit, and a full audit trail on every case.',
      cta: { label: 'Start free', href: 'https://valytica.gnanalytica.com' },
    },
  },
  {
    slug: 'standup',
    name: 'Standup',
    category: 'Meeting Intelligence',
    tagline: 'Your meetings, remembered.',
    chip: 'your meetings, remembered',
    summary:
      'An assistant that joins your calls, captures the conversation, and turns it into clear summaries and tracked action items — synced to the tools your team already uses.',
    url: 'https://standup.gnanalytica.com',
    cta: 'Open Standup',
    theme: {
      primary: '#6366f1',
      accent: '#a855f7',
      soft: '#f5f3ff',
      glow: 'rgba(99, 102, 241, 0.35)',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      textGradient: 'linear-gradient(120deg, #6366f1 0%, #a855f7 100%)',
    },
    hero: {
      kicker: 'Meeting intelligence',
      title: 'Live meeting',
      highlight: 'intelligence',
      subtitle:
        'Standup sends a bot into your call, captures every word, and streams a living knowledge graph, summaries and action items as people talk — proposed items wait for your review before they ever reach Linear.',
      ctaPrimary: { label: 'Open Standup', href: 'https://standup.gnanalytica.com' },
      ctaSecondary: { label: 'How it works', href: '#how-it-works' },
      principle: 'The bot proposes. Your team approves.',
    },
    stats: [
      { value: 'Live', label: 'Streaming knowledge graph' },
      { value: 'Google Meet', label: 'Joins automatically' },
      { value: 'Linear', label: 'Action items synced' },
      { value: 'Slack', label: 'Digest every meeting' },
    ],
    features: [
      {
        icon: 'microphone',
        title: 'Autonomous Meet bot',
        description:
          'A bot joins your Google Meet, captures every utterance and streams the transcript — no one has to take notes.',
      },
      {
        icon: 'graph',
        title: 'Live knowledge graph',
        description:
          'Entities, decisions and relationships are extracted every few seconds and drawn onto a graph that grows as the conversation unfolds.',
      },
      {
        icon: 'link',
        title: 'Action items → Linear',
        description:
          'Proposed action items wait in a human-reviewed queue; confirm one and it becomes a Linear ticket, ignore it and it disappears.',
      },
      {
        icon: 'chat',
        title: 'Summaries in Slack',
        description:
          'When the meeting ends, a canonical summary and Block Kit digest are posted to Slack so the whole team stays in sync.',
      },
    ],
    steps: [
      { title: 'Send in the bot', description: 'Drop a Google Meet link — or let it join your daily standup automatically.' },
      { title: 'It captures live', description: 'The conversation is transcribed and a knowledge graph streams to the dashboard in real time.' },
      { title: 'Review action items', description: 'Confirm, ignore or edit proposed items before any ticket is created in Linear.' },
      { title: 'Get the digest', description: 'A summary and the decisions land in Slack the moment the meeting wraps.' },
    ],
    closing: {
      title: 'Give every meeting a memory.',
      subtitle:
        'Standup turns standups and calls into a living, searchable record — with action items tracked and your team always in sync.',
      cta: { label: 'Open Standup', href: 'https://standup.gnanalytica.com' },
    },
  },
  {
    slug: 'learn',
    name: 'Learn',
    category: 'AI Workshops',
    tagline: 'From curious to capable in 30 days.',
    chip: 'curious to capable in 30 days',
    summary:
      'A 30-day cohort programme that takes your team from “what is AI?” to building with it — curriculum, projects, pods and progress in one place. No spreadsheets, no scattered links.',
    url: 'https://learn.gnanalytica.com',
    cta: 'Enroll now',
    theme: {
      primary: '#c2410c',
      accent: '#e0673c',
      soft: '#fbf1ea',
      glow: 'rgba(201, 80, 46, 0.32)',
      gradient: 'linear-gradient(135deg, #b8431f 0%, #e0673c 100%)',
      textGradient: 'linear-gradient(120deg, #b8431f 0%, #e0673c 100%)',
    },
    hero: {
      kicker: 'AI workshops',
      title: '30 days. One platform.',
      highlight: 'From curious to capable',
      subtitle:
        'Curriculum, capstones, attendance, grading, pods and analytics — for students, faculty and admins alike. One cohort, one platform, no spreadsheets and no scattered links.',
      ctaPrimary: { label: 'Enroll now', href: 'https://learn.gnanalytica.com' },
      ctaSecondary: { label: 'Explore the program', href: '#how-it-works' },
      principle: 'Curiosity in. Capability out.',
    },
    stats: [
      { value: '30 Days', label: 'Structured curriculum' },
      { value: 'Pods', label: 'Small-group accountability' },
      { value: 'Real-time', label: 'Cohort & pod analytics' },
      { value: 'Capstone', label: 'Portfolio-grade demo day' },
    ],
    features: [
      {
        icon: 'book',
        title: 'Daily curriculum',
        description:
          'Thirty MDX-authored days gated by your cohort schedule — labs, capstones and reflections in one rail.',
      },
      {
        icon: 'team',
        title: 'Pods + faculty',
        description:
          'Small accountability pods with primary and support faculty, and auditable pod events end to end.',
      },
      {
        icon: 'chart',
        title: 'Grading + analytics',
        description:
          'Server-enforced grading roles with real-time cohort and pod analytics for administrators.',
      },
      {
        icon: 'rocket',
        title: 'Built for outcomes',
        description:
          'Every day points at one thing — shipping a portfolio-grade capstone on demo day.',
      },
    ],
    steps: [
      { title: 'Enroll', description: 'Get an invite code from your admin and create your account.' },
      { title: 'Daily labs', description: 'Each day unlocks curriculum, lab tasks and a check-in.' },
      { title: 'Pod reviews', description: "Your pod's faculty grade labs and unblock you fast." },
      { title: 'Capstone', description: 'Demo day: ship a portfolio-grade project.' },
    ],
    closing: {
      title: 'Curiosity in. Capability out.',
      subtitle:
        'Replace spreadsheets and scattered links with one platform built end to end for AI workshops.',
      cta: { label: 'Enroll now', href: 'https://learn.gnanalytica.com' },
    },
  },
  {
    slug: 'field-companion',
    name: 'Field Companion',
    category: 'Site Visit Intelligence',
    status: 'In development',
    tagline: 'Walk. Talk. Observe. Done.',
    chip: 'site visits, written up',
    summary:
      'An AI companion for professional site visits. Brief it in WhatsApp, walk the site talking to it, and receive a finished report in the same chat. No forms to fill in, no dashboard to learn.',
    // Not live yet: CTAs point at the contact section to talk about a pilot.
    url: '/#contact',
    cta: 'Join the pilot',
    theme: {
      primary: '#047857',
      accent: '#10b981',
      soft: '#ecfdf5',
      glow: 'rgba(16, 185, 129, 0.32)',
      gradient: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
      textGradient: 'linear-gradient(120deg, #047857 0%, #10b981 100%)',
    },
    hero: {
      kicker: 'AI for site visits · In development',
      title: 'Walk. Talk. Observe.',
      highlight: 'Done.',
      subtitle:
        'Field Companion replaces the clipboard, the camera roll and the evening spent writing up. Brief it in WhatsApp, walk the site talking to it like a colleague, and get a finished report back in the same chat.',
      ctaPrimary: { label: 'Join the pilot', href: '/#contact' },
      ctaSecondary: { label: 'How it works', href: '#how-it-works' },
      principle: 'You walk the site. It writes the report.',
    },
    // Hero preview: a short chat showing one visit end to end.
    chat: [
      { from: 'user', text: 'Quarterly inspection at Kade 12 this afternoon. Roof, plant room and stairwells. Plan attached.' },
      { from: 'bot', text: 'Here’s a 9-item checklist from your brief and the plan. Confirm or change anything?' },
      { from: 'user', text: 'Looks good.' },
      { from: 'bot', text: 'Your walkthrough is ready. Open the link when you’re on site.', link: 'Start walkthrough' },
      { from: 'bot', file: 'Kade 12 – inspection report.pdf', meta: 'AI-drafted · reviewed by you' },
    ],
    stats: [
      { value: 'WhatsApp', label: 'Brief and report in one chat' },
      { value: '0 Forms', label: 'Nothing to fill in' },
      { value: 'Offline', label: 'Saved on the phone first' },
      { value: 'Frankfurt', label: 'Data stored in the EU' },
    ],
    featuresTitle: 'Everything a site visit needs',
    features: [
      {
        icon: 'clipboard',
        title: 'Picks up where you left off',
        description:
          'The walkthrough opens with your brief, documents and instructions already loaded — plus the open items from the last inspection.',
      },
      {
        icon: 'microphone',
        title: 'Notes from your voice',
        description:
          'What you say is filed under the right area. Nothing to type, and you can edit every note before submitting.',
      },
      {
        icon: 'check',
        title: 'A checklist that stays out of the way',
        description:
          'Items tick themselves as you cover them. Anything you find that was not on the list is captured too.',
      },
      {
        icon: 'camera',
        title: 'Photos with context',
        description:
          'Each photo carries the time, the place and what you were saying. Mark it up by hand or by asking.',
      },
      {
        icon: 'map',
        title: 'Plans and documents to hand',
        description: 'Open the attached plan or brief at any moment during the walk.',
      },
      {
        icon: 'compare',
        title: 'Then and now',
        description:
          'It recognises a spot you photographed before and shows the earlier picture beside the new one.',
        later: true,
      },
      {
        icon: 'bell',
        title: 'Follow-ups and reminders',
        description: 'Say “check this again in two weeks” and it sets a date and reminds you in chat.',
        later: true,
      },
      {
        icon: 'handoff',
        title: 'Hand-off across languages',
        description:
          'Send an item to a colleague. They do the check in their own language and the result comes back in yours.',
        later: true,
      },
      {
        icon: 'clock',
        title: 'Past cases',
        description:
          'Ask about any earlier visit, list open items across sites, or start a new visit from an old one.',
        later: true,
      },
      {
        icon: 'offline',
        title: 'Works without signal',
        description: 'Photos and notes are saved on the phone first and sent when the connection returns.',
      },
      {
        icon: 'language',
        title: 'English, Dutch and Spanish',
        description:
          'Designed for three languages from the start. It replies in the language you speak.',
      },
      {
        icon: 'document',
        title: 'Report in the chat',
        description:
          'A PDF with findings, photos, follow-ups and the date and place of the visit — marked as AI-drafted and reviewed by you.',
      },
    ],
    laterLabel: 'After first release',
    stepsTitle: 'Three steps. One chat and one link.',
    steps: [
      {
        title: 'Brief it in chat',
        description:
          'Message Field Companion on WhatsApp. Say where you are going and what needs checking, by text or voice note, and attach a plan or an earlier report. Confirm the checklist it proposes.',
      },
      {
        title: 'Walk and talk',
        description:
          'Open the link it sends. Speak as you would to a colleague — it files your notes, ticks checklist items and answers questions. Take a photo whenever you want one.',
      },
      {
        title: 'Get the report',
        description:
          'Review the notes and photos, change anything that is wrong, and submit. The finished PDF arrives in the chat, ready to forward.',
      },
    ],
    note:
      'The conversation is continuous, like talking to a person. The camera is not streamed: Field Companion looks only when you take a photo or point at something and ask.',
    problem: {
      kicker: 'The problem',
      title: 'The visit is rarely the hard part. The write-up is.',
      paragraphs: [
        'An inspector walks a building with a phone in one hand and a checklist in the other. Photos pile up without context. Notes are typed with one thumb or left to memory. Back at a desk, the photos have to be matched to the notes, the notes to the checklist, and all of it to what was found on the last visit.',
        'Things get lost on the way. A defect seen on site never reaches the report. A follow-up agreed in a corridor is forgotten. The same question about the same wall is asked again three months later, because nobody can find the earlier photo.',
      ],
    },
    audiences: {
      kicker: 'Who it’s for',
      title: 'Anyone who walks a site and writes it up afterwards',
      items: [
        { icon: 'construction', title: 'Construction', description: 'Progress walks and snag lists with photos and owners.' },
        { icon: 'home', title: 'Property management', description: 'Check-in, check-out and periodic inspections, compared with the last visit.' },
        { icon: 'building', title: 'Facility management', description: 'Routine rounds of plant rooms, electrical boards and common areas.' },
        { icon: 'shield', title: 'Insurance', description: 'Damage assessment documented on site, with the report ready before leaving.' },
        { icon: 'warning', title: 'Safety and compliance', description: 'Audits against a checklist, with a photo as evidence for each item.' },
        { icon: 'cog', title: 'Manufacturing and infrastructure', description: 'Line walks, quality checks and asset condition surveys.' },
      ],
      more:
        'The same pattern also suits valuers, home inspectors, installers, energy assessors and contractors pricing a job.',
    },
    trust: {
      kicker: 'Privacy and data',
      title: 'Built for European customers from the start',
      items: [
        { icon: 'europe', title: 'Stored in the EU', description: 'Visit data, photos and reports are kept in Frankfurt.' },
        {
          icon: 'lock',
          title: 'Your data stays yours',
          description:
            'Every record belongs to one organisation. One customer’s sites, photos and history cannot reach another’s — including through the assistant.',
        },
        {
          icon: 'eyeSlash',
          title: 'AI providers keep nothing',
          description:
            'Model requests go through an EU endpoint with zero data retention, and speech is processed in the EU with data use switched off.',
        },
        {
          icon: 'pencil',
          title: 'You sign off the report',
          description: 'Every report is reviewed by the person who did the visit and is marked as AI-drafted.',
        },
        {
          icon: 'archive',
          title: 'Retention is yours to set',
          description: 'Each organisation chooses how long its data is kept, and can export or delete it.',
        },
      ],
      note:
        'Field Companion is being built to the controls expected for GDPR and SOC 2. It has not yet been audited or certified.',
    },
    roadmap: {
      kicker: 'Where it stands',
      title: 'In development — and looking for pilot customers',
      body:
        'The design, the product demo video and the technical plan are complete, and the WhatsApp business account is verified and connected. The product itself is not yet available to use.',
      phases: [
        {
          label: 'First version',
          items: ['One complete visit', 'Brief in chat', 'Walkthrough by voice with photos', 'Report in the chat', 'English'],
        },
        {
          label: 'After that',
          items: ['History across visits', 'Follow-up reminders', 'Hand-off to colleagues', 'Dutch and Spanish', 'iPhone and Android apps'],
        },
      ],
    },
    closing: {
      title: 'Shape Field Companion with us.',
      subtitle:
        'We are looking for a small number of pilot customers in the Netherlands and nearby who do regular site visits. A pilot means using it on real visits and telling us what the report gets right and wrong.',
      cta: { label: 'See the demo · talk about a pilot', href: '/#contact' },
    },
  },
];

/**
 * The product in stealth. Shown on the homepage and footer but deliberately
 * outside `products`, so it gets no landing page until it launches.
 */
export const stealthProduct = {
  name: 'Realytica',
  tagline: 'Something new is taking shape.',
  summary:
    'Our next product is in stealth. We’re building it quietly with early partners — details when it’s ready.',
  chip: 'in stealth',
  cta: { label: 'Be first to know', href: '#contact' },
};

/** True for links that leave the site (open in a new tab). */
export const isExternal = (href) => /^https?:\/\//.test(href || '');

export const getProduct = (slug) => products.find((p) => p.slug === slug) || null;
export const productSlugs = products.map((p) => p.slug);
