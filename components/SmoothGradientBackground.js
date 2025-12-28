/**
 * Smooth Gradient Background - Scroll-based transitioning
 * Creates a continuous gradient that smoothly transitions as you scroll
 */
import { useEffect, useState } from 'react';

export default function SmoothGradientBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth color interpolation based on scroll
  const getGradient = (progress) => {
    // Clamp progress between 0 and 1
    const p = Math.max(0, Math.min(1, progress));

    // Define color stops - Premium neutral gradient
    const stops = [
      { pos: 0.0, colors: ['#fafafa', '#f5f5f5', '#f0f0f0'] },      // Soft white
      { pos: 0.15, colors: ['#f5f5f5', '#f0f0f0', '#ebebeb'] },     // Light gray
      { pos: 0.3, colors: ['#f0f0f0', '#ebebeb', '#e5e5e5'] },     // Platinum
      { pos: 0.45, colors: ['#ebebeb', '#e5e5e5', '#e0e0e0'] },     // Silver
      { pos: 0.6, colors: ['#e5e5e5', '#e0e0e0', '#faf8f3'] },     // Warm gray
      { pos: 0.75, colors: ['#e0e0e0', '#faf8f3', '#f5f3ed'] },     // Cream
      { pos: 0.9, colors: ['#faf8f3', '#f5f3ed', '#f0efe8'] },      // Warm white
      { pos: 1.0, colors: ['#f5f3ed', '#f0efe8', '#fafafa'] },      // Soft white
    ];

    // Find the two stops to interpolate between
    let startStop = stops[0];
    let endStop = stops[stops.length - 1];

    for (let i = 0; i < stops.length - 1; i++) {
      if (p >= stops[i].pos && p <= stops[i + 1].pos) {
        startStop = stops[i];
        endStop = stops[i + 1];
        break;
      }
    }

    // Interpolate between the two stops
    const range = endStop.pos - startStop.pos;
    const localProgress = range > 0 ? (p - startStop.pos) / range : 0;

    // Interpolate each color component
    const interpolateColor = (start, end, t) => {
      const startHex = start.replace('#', '');
      const endHex = end.replace('#', '');

      const r1 = parseInt(startHex.substring(0, 2), 16);
      const g1 = parseInt(startHex.substring(2, 4), 16);
      const b1 = parseInt(startHex.substring(4, 6), 16);

      const r2 = parseInt(endHex.substring(0, 2), 16);
      const g2 = parseInt(endHex.substring(2, 4), 16);
      const b2 = parseInt(endHex.substring(4, 6), 16);

      const r = Math.round(r1 + (r2 - r1) * t);
      const g = Math.round(g1 + (g2 - g1) * t);
      const b = Math.round(b1 + (b2 - b1) * t);

      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };

    const color1 = interpolateColor(startStop.colors[0], endStop.colors[0], localProgress);
    const color2 = interpolateColor(startStop.colors[1], endStop.colors[1], localProgress);
    const color3 = interpolateColor(startStop.colors[2], endStop.colors[2], localProgress);

    return `linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`;
  };

  return (
    <div
      className="fixed inset-0 -z-10 transition-all duration-1000 ease-out"
      style={{
        background: getGradient(scrollProgress),
        backgroundAttachment: 'fixed',
      }}
    />
  );
}

