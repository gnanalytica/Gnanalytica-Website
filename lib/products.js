/**
 * Central product catalogue for Gnanalytica.
 *
 * Each entry powers the homepage Products showcase, the nav/footer product
 * lists, and the dedicated product landing pages at /valytica, /standup, /learn
 * and /healthytica. Every product carries its own accent palette (raw colour
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
    summary:
      'An AI-assisted valuation workspace that replaces fragmented tools with one focused flow — from document extraction to an IBA-aligned PDF.',
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
    tagline: 'Live meeting intelligence.',
    summary:
      'An autonomous bot that joins your Google Meet, captures the conversation, and turns it into a live knowledge graph, summaries and tracked action items — synced to Linear and Slack.',
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
    summary:
      'A 30-day cohort platform for AI workshops — curriculum, capstones, attendance, grading, pods and analytics in one place. No spreadsheets, no scattered links.',
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
    slug: 'healthytica',
    name: 'Healthytica',
    category: 'Health Intelligence',
    tagline: 'Your biomarkers, over time.',
    summary:
      'Healthytica turns your lab reports into clear, longitudinal insights — tracking how your biomarkers change over time with explainable AI, no medical jargon required.',
    url: 'https://healthytica.gnanalytica.com',
    cta: 'Try Healthytica',
    note: 'Healthytica is a wellness tool, not a medical device. Always consult a qualified clinician.',
    theme: {
      primary: '#1f7e93',
      accent: '#2fa84f',
      soft: '#ecfdf5',
      glow: 'rgba(36, 146, 171, 0.35)',
      gradient: 'linear-gradient(135deg, #2492ab 0%, #2fa84f 100%)',
      textGradient: 'linear-gradient(120deg, #2492ab 0%, #2fa84f 100%)',
    },
    hero: {
      kicker: 'Biomarker intelligence',
      title: 'Your biomarkers,',
      highlight: 'over time',
      subtitle:
        "Medical reports are confusing, and tracking your health over time shouldn't feel like a math problem. Healthytica brings every lab result together in one place and shows exactly how your health is changing — clear, personalised insights for smarter conversations with your doctor.",
      ctaPrimary: { label: 'Try Healthytica', href: 'https://healthytica.gnanalytica.com' },
      ctaSecondary: { label: 'How it works', href: '#how-it-works' },
      principle: 'Clear insights, not medical jargon.',
    },
    stats: [
      { value: 'Longitudinal', label: 'Every report, one timeline' },
      { value: 'Explainable', label: 'Evidence behind every flag' },
      { value: 'AI', label: 'Reads your PDF reports' },
      { value: 'Personalised', label: 'Weighed to your profile' },
    ],
    features: [
      {
        icon: 'trend',
        title: 'Longitudinal trends',
        description:
          'See how each biomarker moves over time across every report — improving, stable or worsening, not just one snapshot.',
      },
      {
        icon: 'eye',
        title: 'Explainable flags',
        description:
          "Rule-based, transparent findings with the evidence behind them — no black-box scores you can't interrogate.",
      },
      {
        icon: 'document',
        title: 'LLM report ingestion',
        description:
          'Drop in a PDF and we read it: values are extracted, normalised onto a common scale and aligned to your history.',
      },
      {
        icon: 'heart',
        title: 'Preventive & personalised',
        description:
          "Insights weigh your age, sex, lifestyle and family history to surface what's worth a conversation with your clinician.",
      },
    ],
    steps: [
      { title: 'Set your profile', description: 'Add your demographics, lifestyle and family history so insights are personalised.' },
      { title: 'Upload a report', description: 'Drop in a lab PDF and AI extracts the biomarker readings for you.' },
      { title: 'Review the values', description: 'Confirm the extracted readings before they join your timeline.' },
      { title: 'Track & act', description: 'Watch trends, read explainable flags and walk into your next appointment prepared.' },
    ],
    closing: {
      title: 'Understand your health over time.',
      subtitle:
        'Bring every lab report into one timeline and turn confusing numbers into clear, preventive insight. Healthytica is a wellness tool, not a medical device.',
      cta: { label: 'Try Healthytica', href: 'https://healthytica.gnanalytica.com' },
    },
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug) || null;
export const productSlugs = products.map((p) => p.slug);
