# Gnanalytica Website Redesign — Product Family Theme

**Date:** 2026-06-15
**Status:** Approved (design); pending spec review
**Branch:** `redesign/product-family-theme`

## Goal

Redesign the Gnanalytica marketing site so it reads as the parent brand of a coherent
product family — Valytica, Standup, Learn, and Healthytica — matching the shared editorial
design DNA of those product apps, and refresh each product's on-site content from its actual
repo.

## Source material

Four product repos in the parent folder were analyzed for design + messaging:

| Product | Repo | Serif | Body | Accent | Mode |
|---|---|---|---|---|---|
| Valytica | `../valytica` | Instrument Serif | Geist/Inter | trust-blue `#3b82f6` | light/dark |
| Standup | `../Standup-AI` | Instrument Serif | Inter | indigo→violet `#6366F1`→`#A855F7` + cyan `#22D3EE` | dark |
| Learn | `../ai-workshop` | Fraunces | Inter Tight | terracotta `hsl(12 65% 48%)` | warm light/dark |
| Healthytica | `../Healthytica` | Instrument Serif | Inter | teal→leaf `#2492ab`→`#2fa84f` | dark/light |

**Shared family DNA** (the unifying basis):
- Serif display headlines + Inter-family body + **mono uppercase eyebrow labels at `0.18em` tracking**
- `rounded-lg/xl` cards, hairline borders, subtle **lift** shadows (no heavy glass on light surfaces)
- Generous editorial whitespace, `py-20`–`py-28` sections, `max-w-6xl` containers
- Exactly one accent color per product
- Wordmark logo: small gradient/colored `rounded-md` square mark + name in `font-semibold tracking-tight`

## Decisions (locked)

1. **Theme direction:** Light editorial base with **dark accent bands** (hero backdrop + final CTA).
2. **Display font:** **Instrument Serif** (matches Valytica + Standup). Inter for body, JetBrains Mono for eyebrows.
3. **Positioning:** Products **+ consulting** ("what we do" / AI-readiness retained).
4. **Scope:** Full design-layer rebuild. **Keep** Next.js 14 pages-router + Tailwind 3 (no framework migration). Build a fresh, cohesive component set; delete dead duplicate components.
5. **Products:** **Four** products, all refreshed from their repos and all shown as **Live** (no "coming soon"): Valytica, Standup, Learn (= `ai-workshop`), Healthytica (= `Healthytica`).

## Design language / tokens

Implemented via `tailwind.config.js` theme extension + CSS variables in `styles/globals.css`.

### Color
- **Canvas (light base):** warm off-white `hsl(38 24% 97%)`; soft surface `hsl(36 22% 94%)`; card `hsl(40 30% 99%)`.
- **Ink:** text `hsl(30 8% 12%)`; muted `hsl(30 6% 42%)`; hairline border `hsl(36 14% 84%)`.
- **Dark band:** background `#0B0D14`; ink-on-dark `hsl(0 0% 98%)`; subtle indigo→violet radial mesh glow + faint grid.
- **Gnanalytica brand accent (neutral, for nav/logo/generic CTAs):** ink-indigo `#4F46E5` — deliberately distinct from any single product so it doesn't compete.
- **Per-product accents** (used wherever a product appears — showcase card, product page):
  - Valytica: primary `#2563eb`, accent `#3b82f6`, soft `#eff6ff`
  - Standup: gradient `#6366F1`→`#A855F7`, live-cyan `#22D3EE`, soft `#f5f3ff`
  - Learn: terracotta primary `hsl(12 65% 48%)` (`#c9502e`), accent `hsl(14 70% 60%)`, soft `hsl(36 30% 95%)`
  - Healthytica: teal→leaf gradient `#2492ab`→`#2fa84f`, accent `#2492ab`, soft `#ecfdf5`

### Typography
- Display: **Instrument Serif** (400), `tracking-tight`, `leading-[1.05]` for hero.
- Body: **Inter** (300–700).
- Eyebrow/kicker: **JetBrains Mono**, `text-[11px]`/`text-xs`, `uppercase`, `tracking-[0.18em]`, muted.
- Loaded via Google Fonts `@import` in `globals.css` (replacing Playfair Display).

### Surface & motion
- Radius: cards `rounded-xl` (~14px), buttons `rounded-lg`.
- Shadows: `shadow-soft` (hairline) → `shadow-lift` on hover; `motion-safe:hover:-translate-y-px` float.
- Animations: fade-in / slide-up `cubic-bezier(0.16,1,0.3,1)`, respect `prefers-reduced-motion`.
- Dark bands only: radial spotlight + slow grid drift + soft blur orbs (Standup-style), used sparingly.

### Buttons
- Primary: solid accent, white text, subtle shadow, `active:scale-[0.98]`.
- Secondary: bg-soft + hairline border, hover lifts.
- Ghost: text-only, hover fills soft.

## Information architecture

### Homepage (`pages/index.js`) — sections top to bottom
1. **Nav** — wordmark, Products dropdown (3), About, Contact, primary CTA.
2. **Hero** (dark accent band) — Instrument Serif headline "Wisdom-driven AI products & consulting", sub, dual CTA, animated mesh backdrop.
3. **Positioning strip** — eyebrow row: "Built in Hyderabad · Data in India".
4. **Products showcase** — 4 cards (responsive grid: 1-col mobile → 2×2 → 4-up on wide), each in its own accent, tagline + one-line "what it does", link → product page. All Live (no status badges).
5. **What we do** — consulting / AI-readiness pillars.
6. **Process** — editorial 4-step "how we work".
7. **About** — Gnanalytica wisdom-driven thesis.
8. **Contact / scheduling** (dark CTA band) — book-a-call.
9. **Footer** — products, company, contact, "Made in India".

### Product pages (`pages/[product].js`)
Keep the dynamic `[product].js` + `lib/products.js` pattern, now driving **four** slugs
(`valytica`, `standup`, `learn`, `healthytica`). Restyle to the new system; each page adopts its
**own product accent**. Sections: hero → stats → features → how-it-works (steps) → closing CTA.
(Privacy / Terms pages restyled to new tokens, content unchanged.)

## Component plan

**New cohesive set** (replaces the Modern*/legacy duplicates). Working names:
- `SiteNav`, `Hero`, `EyebrowStrip`, `ProductsShowcase`, `ProductCard`, `WhatWeDo`,
  `ProcessSteps`, `About`, `ContactCTA`, `SiteFooter`
- `DarkBand` (reusable dark accent section wrapper with mesh/grid backdrop)
- Product-page parts restyled: `ProductHero`, `ProductStats`, `ProductFeatures`, `ProductSteps`, `ProductClosing`

**Delete** (dead/duplicate after rebuild): legacy `HeroSection`, `NavBar`, `FeatureSection`,
`AboutSection`, `CaseStudiesSection`, `ProcessSection`, `SchedulingSection`, `SectionDivider`,
plus unused chart/effect components not referenced by the new pages. Final delete list confirmed
against `grep` of imports during implementation — only remove what nothing imports.

**Single source of truth:** `lib/products.js` powers both the homepage showcase and product pages.

## Product content refresh (from repos)

### Valytica (live — already accurate, minor polish)
Keep: "Valuation reports in minutes, not days"; AI field extraction; state portal checks
(TS/AP/KA); mobile site evidence; IBA-aligned reports; DPDP / AWS Mumbai data residency.

### Standup (LIVE — substantive refresh)
Reframe from "meeting memory" to the **real** product (confirmed against freshly-pulled repo;
README status = Production, `standup.gnanalytica.com`): **"Live meeting intelligence."**
An autonomous bot (Recall.ai) that joins your Google Meet, captures the conversation, and every
~30s feeds it to Gemini 2.5 Flash to extract a living **knowledge graph**, structured summaries,
and proposed **action items** — which wait in a **human-reviewed queue** before becoming
**Linear** tickets — then posts a **Slack** digest, all streaming to a dashboard.
Tagline: "Live meeting intelligence." Features:
- **Autonomous Meet bot** — joins your call and captures every utterance, no note-taker needed.
- **Live knowledge graph** — entities, decisions and relationships stream onto a graph as people talk.
- **Action items → Linear** — proposed items wait for human confirm/ignore before a ticket is created.
- **Summaries + Slack** — a canonical summary and Block Kit digest posted the moment a meeting ends.

Steps: Bot joins the Meet → Live transcript & graph → Review action items (confirm → Linear) →
Summary posts to Slack. Status: **Live**, CTA "Open Standup" → `standup.gnanalytica.com`.
Accent: indigo→violet + cyan.

### Learn (refresh from ai-workshop)
Headline: **"30 days. One platform. From curious to capable."**
Sub: "Curriculum, capstones, attendance, grading, pods, and analytics — for students, faculty,
and admins. No spreadsheets, no scattered links."
Features: Daily curriculum (30 MDX-authored days) · Pods + faculty · Grading + analytics ·
Built for outcomes (capstone).
Steps: Enroll → Daily labs → Pod reviews → Capstone demo day.
**Accent corrected amber → terracotta** (`hsl(12 65% 48%)`). Status: **Live**, CTA "Enroll".

### Healthytica (LIVE — new fourth product)
From `../Healthytica`. Category: Health Intelligence. Tagline: **"Your biomarkers, over time."**
(kicker: "AI-assisted longitudinal biomarker intelligence"). What it does: turns your lab reports
into clear, longitudinal, preventive insights — tracking how biomarkers change over time with
explainable AI, no medical jargon. Features:
- **Longitudinal trends** — see how each biomarker improves, stabilizes or worsens across every report, not just one snapshot.
- **Explainable flags** — transparent, rule-based findings with the clinical evidence behind them; no black-box scores.
- **LLM report ingestion** — drop in a PDF and values are extracted, normalised onto a common scale, and aligned to your history.
- **Preventive & personalised** — insights weigh your age, sex, lifestyle and family history to surface what's worth a doctor conversation.

Steps: Set your profile → Upload a report → Review extracted values → Track trends & insights.
Includes a "not a medical device" disclaimer line. Status: **Live**, CTA "Try Healthytica" →
`healthytica.gnanalytica.com`. Accent: teal→leaf (`#2492ab`→`#2fa84f`).

## Out of scope
- No framework/router migration (stays Next 14 pages + Tailwind 3).
- No backend, CMS, or form-submission changes.
- Adds a new `/healthytica` route (fourth product) via the existing dynamic pattern; no other new pages.
- Privacy/Terms copy unchanged (visual restyle only).

## Success criteria
- Homepage + **4** product pages (`/valytica`, `/standup`, `/learn`, `/healthytica`) render in the
  new unified theme (Instrument Serif + Inter + mono eyebrows, warm light base, dark accent bands,
  per-product accents).
- Each product card/page carries its correct accent; all four shown as Live (no "coming soon").
- Standup, Learn and Healthytica copy reflect their real repos; Learn accent is terracotta,
  Healthytica accent is teal→leaf.
- Dead duplicate components removed; `next build` passes with no broken imports.
- Responsive (mobile-first) and `prefers-reduced-motion` respected.
