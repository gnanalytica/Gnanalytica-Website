/**
 * Modern Section Divider - Smooth Transition
 */
import { motion } from 'framer-motion';

export default function ModernSectionDivider() {
  return (
    <motion.div
      className="relative py-8 sm:py-12 flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        className="w-32 h-px bg-gradient-to-r from-transparent via-editorial-primary/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
