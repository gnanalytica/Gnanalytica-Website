/**
 * Floating Elements Component
 *
 * Decorative floating elements with smooth animations
 */
import { motion } from 'framer-motion';

export default function FloatingElements() {
  const elements = [
    { size: 20, x: '10%', y: '20%', duration: 8, color: 'rgba(59, 130, 246, 0.12)' }, // Blue
    { size: 15, x: '80%', y: '40%', duration: 10, color: 'rgba(6, 182, 212, 0.12)' }, // Cyan
    { size: 25, x: '50%', y: '70%', duration: 12, color: 'rgba(139, 92, 246, 0.12)' }, // Purple
    { size: 18, x: '20%', y: '80%', duration: 9, color: 'rgba(14, 165, 233, 0.12)' }, // Sky blue
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-xl"
          style={{
            width: element.size,
            height: element.size,
            left: element.x,
            top: element.y,
            backgroundColor: element.color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        />
      ))}
    </div>
  );
}

