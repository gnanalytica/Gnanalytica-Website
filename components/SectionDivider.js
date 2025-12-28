/**
 * Section Divider component - Editorial Design
 *
 * A minimal divider that matches the editorial aesthetic.
 */
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      className="relative py-8 sm:py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="h-px bg-editorial-border"></div>
        </div>
      </div>
    </motion.div>
  );
}
