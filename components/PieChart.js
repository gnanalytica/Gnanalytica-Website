/**
 * Pie Chart Component
 *
 * Animated pie/donut chart
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PieChart({ data, size = 200, innerRadius = 0.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = -90;

  const colors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-amber-500 to-orange-500',
    'from-indigo-500 to-purple-500',
  ];

  const segments = data.map((item, index) => {
    const percentage = (item.value / total) * 100;
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle += angle;

    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    const radius = size / 2;
    const innerR = radius * innerRadius;

    const x1 = radius + radius * Math.cos(startAngleRad);
    const y1 = radius + radius * Math.sin(startAngleRad);
    const x2 = radius + radius * Math.cos(endAngleRad);
    const y2 = radius + radius * Math.sin(endAngleRad);

    const x3 = radius + innerR * Math.cos(endAngleRad);
    const y3 = radius + innerR * Math.sin(endAngleRad);
    const x4 = radius + innerR * Math.cos(startAngleRad);
    const y4 = radius + innerR * Math.sin(startAngleRad);

    const largeArc = angle > 180 ? 1 : 0;

    const outerPath = `M ${radius} ${radius} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    const innerPath = `M ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`;
    const fullPath = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4} Z`;

    return {
      path: fullPath,
      percentage,
      label: item.label,
      color: colors[index % colors.length],
      startAngle,
      endAngle,
    };
  });

  return (
    <div ref={ref} className="relative">
      <svg width={size} height={size} className="transform -rotate-90">
        {segments.map((segment, index) => (
          <motion.path
            key={index}
            d={segment.path}
            fill={`url(#gradient-${index})`}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          />
        ))}
        <defs>
          {segments.map((segment, index) => (
            <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={segment.color.includes('blue') ? '#3b82f6' : segment.color.includes('purple') ? '#8b5cf6' : segment.color.includes('green') ? '#10b981' : '#f59e0b'} />
              <stop offset="100%" stopColor={segment.color.includes('cyan') ? '#06b6d4' : segment.color.includes('pink') ? '#ec4899' : segment.color.includes('emerald') ? '#10b981' : '#f97316'} />
            </linearGradient>
          ))}
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {total}
        </div>
        <div className="text-sm text-editorial-muted uppercase tracking-wider">Total</div>
      </div>
      <div className="mt-6 space-y-2">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded bg-gradient-to-r ${segment.color}`} />
            <span className="text-sm text-editorial-ink flex-1">{segment.label}</span>
            <span className="text-sm font-bold text-editorial-primary">{segment.percentage.toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

