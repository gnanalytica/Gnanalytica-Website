import '../styles/globals.css';
import SmoothScroll from '../components/SmoothScroll';

/**
 * The custom App component initializes pages. Global styles are imported here,
 * and every page is wrapped in SmoothScroll so Lenis + GSAP ScrollTrigger share
 * one clock across the whole site.
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <SmoothScroll>
      <Component {...pageProps} />
    </SmoothScroll>
  );
}
