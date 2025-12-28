/**
 * Chip Component
 *
 * Interactive chip/tag component with animations
 */
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Chip({
  label,
  onRemove,
  onClick,
  variant = 'default',
  size = 'md',
  className = ''
}) {
  const variants = {
    default: 'bg-white border-editorial-border text-editorial-ink shadow-sm',
    highlight: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white border-transparent shadow-lg',
    accent: 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white border-transparent shadow-lg',
    outline: 'bg-transparent border-2 border-editorial-border text-editorial-ink hover:border-emerald-500 hover:bg-emerald-50',
  };

  const sizes = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      onClick={onClick}
      className={`inline-flex items-center gap-2 border-2 rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      <span>{label}</span>
      {onRemove && (
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.8 }}
          className="rounded-full hover:bg-editorial-paper/20 p-0.5"
        >
          <XMarkIcon className="h-3 w-3" />
        </motion.button>
      )}
    </motion.div>
  );
}

