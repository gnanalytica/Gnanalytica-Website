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
    status: 'Test phase',
    tagline: 'Walk. Talk. Observe. Done.',
    chip: 'site visits, written up',
    summary:
      'An AI companion for professional site visits. Brief it in WhatsApp, walk the site talking to it, and get an AI-drafted report to check and submit, as a PDF in the same chat. Nothing to install.',
    // Not open to customers yet: CTAs point at the waitlist form on the product page
    // (a full path, because the homepage card uses `url` too).
    url: '/field-companion#waitlist',
    cta: 'Join the waitlist',
    // The request-access form (components/products/WaitlistForm.js). The browser posts it
    // straight to Field Companion; see lib/waitlist.js.
    waitlist: {
      endpoint: 'https://fc.gnanalytica.com/v1/waitlist',
      businessNumber: '+31 6 87018349',
    },
    theme: {
      primary: '#047857',
      accent: '#10b981',
      soft: '#ecfdf5',
      glow: 'rgba(16, 185, 129, 0.32)',
      gradient: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
      textGradient: 'linear-gradient(120deg, #047857 0%, #10b981 100%)',
    },
    hero: {
      kicker: 'AI for site visits · Test phase',
      title: 'Walk. Talk. Observe.',
      highlight: 'Done.',
      subtitle:
        'Talk as you walk. Field Companion listens, looks when you ask, files every photo and drafts the report for you to check and submit before you leave. You brief it in WhatsApp, and the report comes back to the same chat.',
      ctaPrimary: { label: 'Join the waitlist', href: '/field-companion#waitlist' },
      ctaSecondary: { label: 'How it works', href: '#how-it-works' },
      principle: 'You walk the site. It writes the report.',
    },
    // Hero preview: a short chat showing one visit end to end (sample data, as in the brochure).
    chat: [
      { from: 'user', text: 'Morning. Going to Building A.' },
      {
        from: 'bot',
        text: 'Building A, today. From your note and the open findings, three things to check: entrance crack, electrical board cover, window seals on the east side. Confirm or change?',
      },
      { from: 'user', text: 'Confirm.' },
      { from: 'bot', text: 'Your walkthrough for Building A is ready.', link: 'Open walkthrough' },
      { from: 'bot', file: 'Building A · Site visit · 12 Nov.pdf', meta: 'AI-drafted, reviewed by you' },
    ],
    stats: [
      { value: 'WhatsApp', label: 'Brief and report in one chat' },
      { value: '0 Forms', label: 'Nothing to fill in on site' },
      { value: 'No install', label: 'Opens in your phone’s browser' },
      { value: 'Frankfurt', label: 'Data stored in the EU' },
    ],
    featuresTitle: 'Everything a site visit needs',
    features: [
      {
        icon: 'clipboard',
        title: 'Brief and checklist in WhatsApp',
        description:
          'Tell it the site and what to check, by text, voice note or photo. It drafts a short checklist from your brief and the site’s open findings. Nothing is used until you tap Confirm.',
      },
      {
        icon: 'link',
        title: 'One tap to start the walk',
        description:
          'The walkthrough link opens in your phone’s browser: no install, no password. It works only on your phone, for that visit, and expires.',
      },
      {
        icon: 'microphone',
        title: 'Talk as you walk. It looks when you ask.',
        description:
          'It takes notes, ticks the checklist and answers out loud. Say its name (Iris by default) or tap Look, and it tells you what it sees. It looks only when you ask or take a photo, or when you describe a defect if your organisation turns on auto-capture.',
      },
      {
        icon: 'camera',
        title: 'Photos filed and ticked',
        description:
          'Each photo is filed under its area and ticks the checklist item it proves. Uncertain matches are proposed, not ticked. Mark up a photo by hand with your finger.',
      },
      {
        icon: 'check',
        title: 'Measurements and findings',
        description:
          'Say “forty centimetres” and it is stored as 40 cm. Open findings carry over to the next visit. Close one with a reason, reopen it if it comes back, and its full history is kept.',
      },
      {
        icon: 'compare',
        title: 'Then and now',
        description:
          'Photograph something you have photographed before. Field Companion finds the earlier photo, tells you what changed, and puts both in the report with their dates.',
      },
      {
        icon: 'document',
        title: 'Review, submit, PDF in the chat',
        description:
          'See every note before you submit, and edit by tapping or by voice. The report arrives in WhatsApp as a PDF, for you and whoever asked for the visit. Every report is marked AI-drafted.',
      },
      {
        icon: 'pencil',
        title: 'Corrected versions',
        description:
          'Spotted a mistake after submitting? Correct a note, finding or measurement. A new version, with the reason printed on it, goes to the same people. Earlier versions are kept.',
      },
      {
        icon: 'chart',
        title: 'Insights and period reports',
        description:
          'Ask how a site is doing, or ask for a period report as a PDF. The numbers come from your records; the AI only words them.',
      },
      {
        icon: 'search',
        title: 'Ask and search',
        description:
          'Ask what is assigned to you and get exact totals. Search across notes, findings and photo descriptions.',
      },
      {
        icon: 'bell',
        title: 'Follow-ups',
        description:
          'Say “check the seals again on the 23rd” and it saves a follow-up with a date you can change. From launch, a WhatsApp reminder arrives on the due date.',
      },
      {
        icon: 'handoff',
        title: 'Hand it on to a colleague',
        description:
          'Send a walk to a colleague by name, contact card or saved contact, with your notes, photos, checklist and due date. Nothing goes until you confirm, and they reply YES before they receive anything.',
      },
      {
        icon: 'clock',
        title: 'Continue or take over',
        description:
          'Pick up a walk where it stopped. An admin or the requester can take over a colleague’s unfinished walk, after a confirmation that names the walker.',
      },
      {
        icon: 'team',
        title: 'Organisations and roles',
        description:
          'Ask in WhatsApp to create an organisation and finish on a short web page (approved applicants only) and invite people by name and number or contact card. Roles are admin, inspector and guest. Admins also work in a web browser.',
      },
      {
        icon: 'book',
        title: 'Templates and glossary',
        description:
          'Save your checklists as templates, and teach it the terms and abbreviations your team uses. An admin approves each one before it is used.',
      },
      {
        icon: 'language',
        title: 'English, Dutch and Spanish',
        description: 'Speak, chat, read the app and get reports in English, Dutch or Spanish.',
      },
    ],
    stepsTitle: 'Three steps. One chat and one link.',
    steps: [
      {
        title: 'Brief it in WhatsApp',
        description:
          'Tell it the site and what to check, by text, voice note or photo. It drafts a short checklist from your brief and the site’s open findings. Nothing is used until you tap Confirm.',
      },
      {
        title: 'Walk and talk',
        description:
          'One tap opens the walk in your phone’s browser: no install, no password. It takes notes, ticks the checklist and answers out loud. With weak signal, photos, ticks and notes wait on the phone and send in order when signal returns; voice pauses until then.',
      },
      {
        title: 'Report in the chat',
        description:
          'Review every note, edit by tap or by voice, then submit. The AI-drafted report arrives in the chat as a PDF, for you and whoever asked for the visit.',
      },
    ],
    note:
      'No continuous video: it looks only when you ask or take a photo, or when you describe a defect if your organisation turns on auto-capture. Location is read on arrival and with each photo, never tracked. What you need: WhatsApp on a smartphone, and permission for the browser to use the camera and microphone.',
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
      title: 'Anyone whose work starts with a walk',
      items: [
        { icon: 'home', title: 'Property and valuation', description: 'Condition surveys and inspections for valuation reports, with dated, located photos.' },
        { icon: 'building', title: 'Facility management', description: 'Routine rounds, maintenance checks and contractor sign-off, with open findings carried to the next round.' },
        { icon: 'construction', title: 'Construction', description: 'Progress walks, snag lists and quality checks before handover.' },
        { icon: 'shield', title: 'Insurance', description: 'Claims surveys, loss assessment and risk inspections, with then-and-now photos.' },
        { icon: 'clipboard', title: 'Real estate', description: 'Handover inspections, property condition reports, move-in and move-out checks.' },
        { icon: 'warning', title: 'Safety', description: 'Safety walks and hazard spotting, with findings dated and filed by area.' },
      ],
      more:
        'Also road, bridge and utility inspections, repeated and compared over time. Don’t see your field? If your job is walk, look and record, it may fit. Tell us how you inspect today and we will tell you plainly whether it does.',
    },
    trust: {
      kicker: 'Privacy and data',
      title: 'Clear about your data. Clear about the AI.',
      items: [
        {
          icon: 'europe',
          title: 'Stored in Frankfurt',
          description:
            'Photos, notes and reports are stored in Frankfurt, and the app servers run there too. WhatsApp messages pass through Meta.',
        },
        {
          icon: 'eyeSlash',
          title: 'Walkthrough audio is not recorded',
          description:
            'Field Companion does not record your walkthrough audio: an EU speech service turns it into text, and we keep only the text.',
        },
        {
          icon: 'pencil',
          title: 'Always an AI, always said',
          description:
            'People are told they are talking to an AI. Every report is marked AI-drafted and is reviewed by you before it is submitted. We do not train or fine-tune AI models on your inspections, photos or reports.',
        },
        {
          icon: 'lock',
          title: 'Organisations kept apart',
          description:
            'Each organisation’s data is kept apart in the database and in every lookup. Our staff open it only when your admin asks for support or for a security incident, and every access is logged.',
        },
        {
          icon: 'archive',
          title: 'Export and erasure',
          description:
            'An admin can export the whole organisation, or delete it after a 7-day grace period. A person’s data can be exported or erased on request.',
        },
      ],
      note:
        'No certifications or external audits yet. Planned for launch: AI models used with zero data retention, through the EU endpoint.',
    },
    legal: [
      { label: 'Privacy notice', href: '/field-companion/privacy' },
      { label: 'Terms of service', href: '/field-companion/terms' },
      { label: 'Subprocessors', href: '/field-companion/subprocessors' },
    ],
    roadmap: {
      kicker: 'Where it stands',
      title: 'Built, and in a test phase',
      body:
        'Field Companion runs today on our business WhatsApp number, for a small group of verified phones, with sample data only. Next is a closed pilot for organisations we invite. The pilot build is reviewed in depth before it handles real customer data.',
      phases: [
        {
          label: 'Built today',
          items: [
            'Brief and checklist in WhatsApp',
            'Walkthrough link in the phone’s browser',
            'Voice walkthrough, with Look',
            'Photos filed and ticked',
            'Measurements and findings',
            'Then and now',
            'Review and submit',
            'PDF report in the chat',
            'Corrected versions',
            'Insights and period reports on request',
            'Search',
            'Follow-ups',
            'Hand-off to colleagues',
            'Continue or take over a walk',
            'Organisations with roles',
            'Templates and glossary',
            'English, Dutch and Spanish',
          ],
        },
        {
          label: 'From launch',
          items: [
            'Reminders, nudges and invitations as WhatsApp messages; in Dutch and Spanish once Meta approves them',
            'Reading the plans and earlier reports you attach',
            'AI models used with zero data retention, through the EU endpoint (planned)',
          ],
        },
      ],
    },
    video: {
      title: 'See it in three minutes',
      src: '/field-companion/field-companion-demo.mp4',
      poster: '/field-companion/field-companion-demo-poster.jpg',
    },
    brochure: {
      href: '/field-companion/field-companion-brochure.pdf',
      label: 'Download the brochure (PDF, 1.9 MB)',
    },
    provider: 'Field Companion is provided by Gnanalytica, Eindhoven, the Netherlands · KvK 98649035',
    closing: {
      title: 'Shape Field Companion with us.',
      subtitle:
        'We are looking for a small number of organisations in the EEA that do regular site visits to join the closed pilot. Tell us how you inspect today. Real buildings and real data come only once the pilot build has been reviewed in depth.',
      cta: { label: 'Join the waitlist', href: '/field-companion#waitlist' },
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
