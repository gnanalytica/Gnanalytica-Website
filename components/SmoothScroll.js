/**
 * SmoothScroll — Lenis smooth scrolling wired into GSAP's ticker.
 *
 * Lenis owns the scroll easing (including #anchor links via `anchors`), GSAP's
 * ticker drives its raf so ScrollTrigger and Lenis share one clock and never
 * drift. Disabled entirely for reduced-motion users. On route change the scroll
 * position snaps back to the top immediately.
 */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsapClient';

let lenis = null;

export default function SmoothScroll({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    lenis = new Lenis({
      lerp: 0.11,
      anchors: { offset: -96 }, // clear the fixed nav when jumping to #sections
    });
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenis = null;
    };
  }, []);

  useEffect(() => {
    const onRouteDone = () => {
      if (lenis) lenis.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh();
    };
    router.events.on('routeChangeComplete', onRouteDone);
    return () => router.events.off('routeChangeComplete', onRouteDone);
  }, [router.events]);

  return children;
}
