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
 * Gnanalytica homepage. A warm editorial light base bookended by dark accent
 * bands (hero + contact), showcasing the three live products (plus one in
 * stealth) and the consulting side of the studio. Sections are composed from the components folder.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Gnanalytica — Wisdom-Driven AI Products &amp; Consulting</title>
        <meta
          name="description"
          content="Gnanalytica builds focused AI products — Valytica for valuation, Standup for meetings and Learn for AI skills — and helps businesses become genuinely AI-ready."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta property="og:title" content="Gnanalytica — Wisdom-Driven AI Products & Consulting" />
        <meta
          property="og:description"
          content="AI that carries wisdom: focused products for valuation, meetings and learning — plus consulting to make your business AI-ready."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-canvas text-ink">
        <SiteNav heroOnDark />
        <main>
          <Hero />
          <About />
          <ProductsShowcase />
          <WhatWeDo />
          <ProcessSteps />
          <ContactCTA />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
