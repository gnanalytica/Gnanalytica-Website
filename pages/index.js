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
 * Gnanalytica homepage — brand-refresh theme drawn from the logo's navy + red.
 *
 * The .gn-home wrapper scopes the theme tokens: light by default, dark via
 * the OS preference or the nav's ThemeToggle (data-theme on <html>). The
 * inline script below applies a saved theme choice before first paint so
 * there is no flash. Sections are composed from the components folder.
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
        <script
          // Apply the saved theme before paint so the page never flashes the wrong theme.
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('gna-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}",
          }}
        />
      </Head>
      <div className="gn-home min-h-screen">
        <SiteNav themed />
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
