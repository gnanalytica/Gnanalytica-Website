/**
 * Scroll Progress Indicator
 *
 * Shows scroll progress at the top of the page
 */
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-editorial-border z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  );
}

