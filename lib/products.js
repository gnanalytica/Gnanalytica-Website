/**
 * Central product catalogue for Gnanalytica.
 *
 * Each entry powers the homepage Products showcase, the nav/footer product
 * lists, and the dedicated product landing pages at /valytica, /standup and
 * /learn. Every product carries its own accent palette (raw colour
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
    tagline: 'Walk. Talk. Observe. Done.',
    chip: 'site visits, reported',
    summary:
      'An AI companion for professional site visits. Start on WhatsApp, walk the site while you talk and show, and get the full report back in the chat — no forms, no dashboards.',
    url: '/#contact',
    cta: 'Request early access',
    theme: {
      primary: '#0f766e',
      accent: '#14b8a6',
      soft: '#f0fdfa',
      glow: 'rgba(20, 184, 166, 0.35)',
      gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
      textGradient: 'linear-gradient(120deg, #0f766e 0%, #14b8a6 100%)',
    },
    hero: {
      kicker: 'Site visit intelligence',
      title: 'Walk the site.',
      highlight: 'Get the report.',
      subtitle:
        'Field Companion listens while you walk, looks when you show it, and remembers every earlier visit. Request a walkthrough on WhatsApp, talk through what you see, and the finished report lands back in the same chat.',
      ctaPrimary: { label: 'Request early access', href: '/#contact' },
      ctaSecondary: { label: 'How it works', href: '#how-it-works' },
      principle: 'You walk and talk. It writes it up.',
    },
    stats: [
      { value: 'WhatsApp', label: 'Start and finish in chat' },
      { value: 'Voice', label: 'Hands-free walkthroughs' },
      { value: 'EN · NL · ES', label: 'Multilingual from day one' },
      { value: 'EU', label: 'Built for GDPR' },
    ],
    features: [
      {
        icon: 'chat',
        title: 'Starts on WhatsApp',
        description:
          'Ask for a walkthrough in chat, share the plan and what needs checking, and get a link that opens the live session — or send it to a colleague on site.',
      },
      {
        icon: 'microphone',
        title: 'Continuous voice',
        description:
          'Talk naturally while you walk. Notes write themselves from what you say and attach to the right photos.',
      },
      {
        icon: 'eye',
        title: 'Remembers past visits',
        description:
          'Earlier photos of the same place surface with their dates, so changes and repeat issues are easy to spot.',
      },
      {
        icon: 'clipboard',
        title: 'Report in the chat',
        description:
          'Review, then submit. The full report, follow-ups and reminders come back to the WhatsApp conversation.',
      },
    ],
    steps: [
      { title: 'Request in chat', description: 'Message Field Companion on WhatsApp with the site, the plan and what needs doing.' },
      { title: 'Open the link', description: 'Start the walkthrough on your phone, or send it to whoever is on site.' },
      { title: 'Talk and show', description: 'Walk the site, describe what you see and capture photos when it matters.' },
      { title: 'Get the report', description: 'Review the notes and photos, submit, and the report arrives in the chat.' },
    ],
    closing: {
      title: 'Built for people who work on site.',
      subtitle:
        'Construction, real estate, facility management, insurance, manufacturing and safety teams — anyone who walks a site and has to write it up afterwards.',
      cta: { label: 'Request early access', href: '/#contact' },
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

export const getProduct = (slug) => products.find((p) => p.slug === slug) || null;
export const productSlugs = products.map((p) => p.slug);
