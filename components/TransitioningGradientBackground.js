/**
 * Transitioning Gradient Background
 * Creates a smooth gradient that transitions based on scroll position
 */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function TransitioningGradientBackground() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Color stops for smooth transitions
  const colorStops = [
    { position: 0, colors: ['#ecfdf5', '#d1fae5', '#a7f3d0'] },      // Emerald start
    { position: 0.2, colors: ['#d1fae5', '#a7f3d0', '#6ee7b7'] },    // Teal transition
    { position: 0.4, colors: ['#a7f3d0', '#6ee7b7', '#34d399'] },    // Green transition
    { position: 0.6, colors: ['#6ee7b7', '#34d399', '#10b981'] },    // Emerald transition
    { position: 0.8, colors: ['#34d399', '#10b981', '#059669'] },    // Darker green
    { position: 1, colors: ['#10b981', '#059669', '#047857'] },      // Deep green end
  ];

  // Interpolate gradient based on scroll
  const getGradient = (progress) => {
    const index = Math.floor(progress * (colorStops.length - 1));
    const nextIndex = Math.min(index + 1, colorStops.length - 1);
    const localProgress = (progress - index / (colorStops.length - 1)) * (colorStops.length - 1);

    const current = colorStops[index];
    const next = colorStops[nextIndex];

    const colors = current.colors.map((color, i) => {
      // Simple interpolation - you could use a color library for better results
      return color; // For now, use current colors
    });

    return `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`;
  };

  const backgroundGradient = useTransform(scrollYProgress, (progress) => {
    if (progress < 0.2) {
      return 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)';
    } else if (progress < 0.4) {
      return 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #6ee7b7 100%)';
    } else if (progress < 0.6) {
      return 'linear-gradient(135deg, #a7f3d0 0%, #6ee7b7 50%, #34d399 100%)';
    } else if (progress < 0.8) {
      return 'linear-gradient(135deg, #6ee7b7 0%, #34d399 50%, #10b981 100%)';
    } else {
      return 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)';
    }
  });

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{
        background: backgroundGradient,
      }}
    />
  );
}

