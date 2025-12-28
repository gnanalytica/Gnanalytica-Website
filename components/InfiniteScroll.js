/**
 * Infinite Scroll Component
 *
 * Creates an infinite scrolling effect for logos or content
 */
import { motion } from 'framer-motion';

export default function InfiniteScroll({ items, speed = 50, direction = 'left' }) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex gap-8"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

