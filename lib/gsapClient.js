/**
 * gsapClient — single place where GSAP plugins are registered.
 *
 * Import { gsap, ScrollTrigger } from here everywhere so registration happens
 * exactly once and only in the browser (the dist builds are CJS-safe for the
 * Next.js pages router).
 */
import { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/** useLayoutEffect that quietly downgrades to useEffect during SSR. */
export const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/** True when the user prefers reduced motion; guard fancy effects with this. */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
