/**
 * Starburst — the neobrutalist sticker star (SVG), optionally slow-spinning.
 *
 * Used as decoration around headlines and cards. Fill/stroke are plain props so
 * product accents can be passed straight from lib/products.js.
 */
export default function Starburst({
  size = 64,
  fill = '#FFC700',
  stroke = '#121212',
  spin = false,
  className = '',
  children,
}) {
  return (
    <span
      className={`relative inline-grid place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className={`absolute inset-0 ${spin ? 'animate-spin-slow' : ''}`}
      >
        <path
          d="M50 0 L59 32 L91 21 L68 46 L100 50 L68 54 L91 79 L59 68 L50 100 L41 68 L9 79 L32 54 L0 50 L32 46 L9 21 L41 32 Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
      {children && <span className="relative z-10">{children}</span>}
    </span>
  );
}
