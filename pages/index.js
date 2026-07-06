import Head from 'next/head';
import SiteNav from '../components/SiteNav';
import Hero from '../components/Hero';
import ProductsShowcase from '../components/ProductsShowcase';
import WhatWeDo from '../components/WhatWeDo';
import ProcessSteps from '../components/ProcessSteps';
import About from '../components/About';
import ContactCTA from '../components/ContactCTA';
import SiteFooter from '../components/SiteFooter';

/**
 * Gnanalytica homepage. Neobrutalist cream-paper base with hard black borders
 * between bands and an ink-black contact closer, showcasing the four products
 * and the consulting side of the studio. Sections are composed from the
 * components folder.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Gnanalytica — Wisdom-Driven AI Products &amp; Consulting</title>
        <meta
          name="description"
          content="Gnanalytica builds wisdom-driven AI products — Valytica for valuation, Standup for meetings, Learn for AI workshops and Healthytica for health — and helps businesses become AI-ready."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta property="og:title" content="Gnanalytica — Wisdom-Driven AI Products & Consulting" />
        <meta
          property="og:description"
          content="Focused AI products for valuation, meetings, learning and health — plus consulting to make your business AI-ready."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-paper text-ink">
        <SiteNav />
        <main>
          <Hero />
          <ProductsShowcase />
          <WhatWeDo />
          <ProcessSteps />
          <About />
          <ContactCTA />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
