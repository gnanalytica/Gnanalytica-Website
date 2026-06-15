import Head from 'next/head';
import ModernNavBar from '../components/ModernNavBar';
import ModernHeroSection from '../components/ModernHeroSection';
import ProductsShowcase from '../components/ProductsShowcase';
import ModernFeatureSection from '../components/ModernFeatureSection';
import ModernProcessSection from '../components/ModernProcessSection';
import ModernCaseStudiesSection from '../components/ModernCaseStudiesSection';
import ModernAboutSection from '../components/ModernAboutSection';
import ModernSchedulingSection from '../components/ModernSchedulingSection';
import ModernSectionDivider from '../components/ModernSectionDivider';
import Footer from '../components/Footer';
import FloatingActionButton from '../components/FloatingActionButton';
import InfiniteScroll from '../components/InfiniteScroll';
import ScrollProgress from '../components/ScrollProgress';
import StatsInfographic from '../components/StatsInfographic';
import SmoothGradientBackground from '../components/SmoothGradientBackground';


/**
 * The home page of the Gnanalytica website. It stitches together
 * several composable sections and injects appropriate metadata via the
 * Head component. Each section is defined in the components folder.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Gnanalytica - Wisdom-Driven AI Products & Consulting</title>
        <meta
          name="description"
          content="Gnanalytica builds wisdom-driven AI products — Valytica for valuation, Standup for meeting memory, and Learn for AI workshops — and helps businesses become AI-ready."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen text-editorial-ink relative overflow-hidden">
        <SmoothGradientBackground />
        <ScrollProgress />
        <ModernNavBar />
        <main className="pt-16 sm:pt-20 relative z-10">
          <ModernHeroSection />
          <ModernSectionDivider />
          <ProductsShowcase />
          <ModernSectionDivider />
          <StatsInfographic />
          <ModernSectionDivider />
          <ModernFeatureSection />
          <ModernSectionDivider />
          <ModernProcessSection />
          <ModernSectionDivider />
          <ModernCaseStudiesSection />
          <ModernSectionDivider />
          <ModernAboutSection />
          <ModernSectionDivider />
          <ModernSchedulingSection />
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    </>
  );
}