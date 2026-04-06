import { motion } from 'framer-motion';
import {
  RocketLaunchIcon,
  ChartBarIcon,
  CircleStackIcon,
  CpuChipIcon,
  ArrowTopRightOnSquareIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

/**
 * Application Card Component
 * Displays an application with icon, title, description, and launch button
 */
export default function ApplicationCard({ app, index }) {
  const icons = {
    'igvpl': RocketLaunchIcon,
    'analytics-dashboard': ChartBarIcon,
    'data-pipeline': CircleStackIcon,
    'ml-platform': CpuChipIcon,
  };

  const Icon = icons[app.id] || RocketLaunchIcon;

  const gradients = {
    'igvpl': 'from-blue-500 to-cyan-500',
    'analytics-dashboard': 'from-purple-500 to-pink-500',
    'data-pipeline': 'from-green-500 to-emerald-500',
    'ml-platform': 'from-orange-500 to-red-500',
  };

  const gradient = gradients[app.id] || 'from-editorial-primary to-editorial-secondary';

  return (
    <motion.div
      className="group relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-premium hover:shadow-premium-xl transition-all duration-500 overflow-hidden border border-gray-200/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient Header */}
      <div className={`h-32 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-white/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-premium"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-12 h-12 text-white" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-editorial-ink mb-2 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          {app.name}
        </h3>
        <p className="text-sm text-editorial-muted mb-4 line-clamp-2">
          {app.description}
        </p>

        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
            app.status === 'active'
              ? 'bg-green-100 text-green-700'
              : app.status === 'beta'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-gray-100 text-gray-700'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              app.status === 'active'
                ? 'bg-green-500 animate-pulse'
                : app.status === 'beta'
                ? 'bg-yellow-500'
                : 'bg-gray-500'
            }`} />
            {app.status === 'active' ? 'Active' : app.status === 'beta' ? 'Beta' : 'Coming Soon'}
          </div>
        </div>

        {/* Launch Button */}
        {app.url ? (
          <motion.a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-lg shadow-premium hover:shadow-premium-lg transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Application
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </motion.a>
        ) : (
          <div className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-100 text-gray-400 font-semibold rounded-lg cursor-not-allowed">
            <LockClosedIcon className="w-5 h-5" />
            Coming Soon
          </div>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
      />
    </motion.div>
  );
}
