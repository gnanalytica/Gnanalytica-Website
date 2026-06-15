/**
 * Central product catalogue for Gnanalytica.
 *
 * Each entry powers both the homepage Products showcase and the dedicated
 * product landing pages served at /valytica, /standup and /learn. Themes are
 * expressed as raw colour values (not Tailwind class names) so they can be
 * applied via inline styles and gradients without depending on the JIT
 * purge being aware of dynamic class names.
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
    theme: {
      primary: '#4338ca',
      accent: '#6366f1',
      soft: '#eef2ff',
      glow: 'rgba(99, 102, 241, 0.35)',
      gradient: 'linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #818cf8 100%)',
      textGradient: 'linear-gradient(120deg, #4338ca 0%, #6366f1 60%, #818cf8 100%)',
    },
    hero: {
      badge: 'Built for the Indian valuation workflow',
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
    comingSoon: true,
    tagline: 'A memory for every meeting.',
    summary:
      'Meeting intelligence that turns every standup and call into a searchable, decision-aware record — so nothing said is ever lost.',
    url: 'https://standup.gnanalytica.com',
    theme: {
      primary: '#7c3aed',
      accent: '#a855f7',
      soft: '#f5f3ff',
      glow: 'rgba(168, 85, 247, 0.35)',
      gradient: 'linear-gradient(135deg, #6d28d9 0%, #a855f7 50%, #c084fc 100%)',
      textGradient: 'linear-gradient(120deg, #6d28d9 0%, #a855f7 60%, #c084fc 100%)',
    },
    hero: {
      badge: 'Meeting intelligence · Coming soon',
      title: 'A memory for',
      highlight: 'every meeting',
      subtitle:
        'Standup captures, transcribes and remembers your meetings — turning scattered conversations into a single, searchable source of truth your whole team can rely on. Launching soon.',
      ctaPrimary: { label: 'Join the waitlist', href: 'https://standup.gnanalytica.com' },
      ctaSecondary: { label: 'See what’s coming', href: '#how-it-works' },
      principle: 'Capture everything. Recall anything.',
    },
    stats: [
      { value: '100%', label: 'Of conversations captured' },
      { value: 'Searchable', label: 'Across every meeting' },
      { value: 'Auto', label: 'Summaries & action items' },
      { value: 'Always-on', label: 'Persistent meeting memory' },
    ],
    features: [
      {
        icon: 'microphone',
        title: 'Capture & transcribe',
        description:
          'Every standup and call is recorded and transcribed accurately, so the record is complete without anyone taking notes.',
      },
      {
        icon: 'search',
        title: 'Searchable memory',
        description:
          'Ask what was decided three weeks ago and get the answer instantly — Standup remembers across every meeting.',
      },
      {
        icon: 'clipboard',
        title: 'Summaries & actions',
        description:
          'Each meeting ends with a crisp summary and a clear list of decisions and action items, assigned and tracked.',
      },
      {
        icon: 'team',
        title: 'Shared team context',
        description:
          'Bring everyone onto the same page — newcomers and absentees catch up in minutes, not meetings.',
      },
    ],
    steps: [
      { title: 'Connect your meetings', description: 'Bring Standup into your calls and recurring standups.' },
      { title: 'It captures everything', description: 'Conversations are transcribed and organised automatically.' },
      { title: 'Get the summary', description: 'Receive decisions and action items the moment a meeting ends.' },
      { title: 'Recall anything', description: 'Search across all meetings to find exactly what was said and agreed.' },
    ],
    closing: {
      title: 'Never lose what was said again.',
      subtitle:
        'Standup is launching soon. Join the waitlist to give your team a persistent memory that turns meetings from time spent into knowledge kept.',
      cta: { label: 'Join the waitlist', href: 'https://standup.gnanalytica.com' },
    },
  },
  {
    slug: 'learn',
    name: 'Learn',
    category: 'AI Workshops',
    tagline: 'From curious to capable in 30 days.',
    summary:
      'A learning platform for AI workshops — curriculum, capstones, attendance, grading, pods and analytics in one place. No spreadsheets, no scattered links.',
    url: 'https://learn.gnanalytica.com',
    theme: {
      primary: '#d97706',
      accent: '#f59e0b',
      soft: '#fff7ed',
      glow: 'rgba(245, 158, 11, 0.35)',
      gradient: 'linear-gradient(135deg, #c2410c 0%, #f59e0b 50%, #fbbf24 100%)',
      textGradient: 'linear-gradient(120deg, #c2410c 0%, #f59e0b 60%, #fbbf24 100%)',
    },
    hero: {
      badge: 'AI Workshops',
      title: '30 days. One platform.',
      highlight: 'From curious to capable',
      subtitle:
        'Curriculum, capstones, attendance, grading, pods and analytics — for students, faculty and admins alike. One cohort, one platform, no spreadsheets and no scattered links.',
      ctaPrimary: { label: 'Enroll now', href: 'https://learn.gnanalytica.com' },
      ctaSecondary: { label: 'Explore the program', href: '#how-it-works' },
      principle: 'One CTA, one email, one cohort.',
    },
    stats: [
      { value: '30 Days', label: 'Structured curriculum' },
      { value: 'Pods', label: 'Small-group accountability' },
      { value: 'Real-time', label: 'Cohort & pod analytics' },
      { value: 'One', label: 'Platform for everyone' },
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
          'Small-group accountability with primary and support instructors, and auditable pod events throughout.',
      },
      {
        icon: 'chart',
        title: 'Grading + analytics',
        description:
          'Role-based, server-enforced grading with real-time cohort and pod analytics for administrators.',
      },
      {
        icon: 'rocket',
        title: 'Built for outcomes',
        description:
          'Everything points at one thing — getting every student from curious to genuinely capable in a month.',
      },
    ],
    steps: [
      { title: 'Enroll the cohort', description: 'One CTA, one email, one cohort — onboarding without the busywork.' },
      { title: 'Work the daily rail', description: 'Students move through gated days of labs, capstones and reflections.' },
      { title: 'Stay accountable in pods', description: 'Faculty support small groups with auditable pod events.' },
      { title: 'Track every outcome', description: 'Admins watch real-time analytics across cohorts and pods.' },
    ],
    closing: {
      title: 'Curiosity in. Capability out.',
      subtitle:
        'Replace spreadsheets and scattered links with one platform built end-to-end for AI workshops.',
      cta: { label: 'Enroll now', href: 'https://learn.gnanalytica.com' },
    },
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug) || null;
export const productSlugs = products.map((p) => p.slug);
