/**
 * Tailwind CSS configuration — Gnanalytica product-family theme.
 *
 * A warm editorial light base with dark accent bands. Display = Instrument Serif,
 * body = Inter, eyebrow labels = JetBrains Mono. Per-product accent colours are
 * defined in lib/products.js and applied via inline styles (kept out of Tailwind
 * so the JIT purge never strips dynamic product gradients).
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Instrument Serif', 'Georgia', 'serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        tightish: '-0.015em',
        eyebrow: '0.18em',
        kicker: '0.14em',
      },
      colors: {
        // Warm editorial light base
        canvas: {
          DEFAULT: '#faf7f1', // hsl(38 24% 97%)
          soft: '#f1ece2',    // hsl(36 22% 94%)
          card: '#fdfbf7',    // hsl(40 30% 99%)
        },
        ink: {
          DEFAULT: '#211f1b', // hsl(30 8% 12%)
          muted: '#726c63',   // hsl(30 6% 42%)
          line: '#ddd5c9',    // hsl(36 14% 84%)
        },
        // Dark accent band
        night: {
          DEFAULT: '#0b0d14',
          soft: '#12141d',
          ink: '#f5f6fa',
          muted: '#a3a9bf',
        },
        // Gnanalytica's own neutral brand accent (nav, logo, generic CTAs)
        brand: {
          DEFAULT: '#4f46e5',
          light: '#6366f1',
          dark: '#4338ca',
        },
        // Legacy aliases remapped onto the new palette so older pages
        // (privacy / terms) keep rendering coherently.
        editorial: {
          paper: '#faf7f1',
          white: '#ffffff',
          ink: '#211f1b',
          charcoal: '#3a3630',
          highlight: '#4f46e5',
          accent: '#6366f1',
          border: '#ddd5c9',
          muted: '#726c63',
          primary: '#4f46e5',
          secondary: '#6366f1',
        },
      },
      boxShadow: {
        soft: '0 1px 2px hsl(30 8% 12% / 0.04), 0 1px 3px hsl(30 8% 12% / 0.04)',
        lift: '0 8px 24px -8px hsl(30 8% 12% / 0.12), 0 2px 6px -2px hsl(30 8% 12% / 0.06)',
        liftlg: '0 18px 50px -12px hsl(30 8% 12% / 0.18), 0 4px 12px -4px hsl(30 8% 12% / 0.08)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.9)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        marquee: 'marquee 36s linear infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
