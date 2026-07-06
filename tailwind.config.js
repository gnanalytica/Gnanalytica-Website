/**
 * Tailwind CSS configuration — Gnanalytica neobrutalist theme.
 *
 * Cream paper base, hard black ink, flat candy accents and offset "print"
 * shadows. Display = Archivo Black, body = Space Grotesk, labels = JetBrains
 * Mono. Per-product accent colours stay in lib/products.js and are applied via
 * inline styles (kept out of Tailwind so the JIT purge never strips them).
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
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        display: ['"Archivo Black"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        tightish: '-0.015em',
        eyebrow: '0.16em',
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        // Cream paper base
        paper: {
          DEFAULT: '#F7F1E5', // warm cream canvas
          deep: '#EFE6D2',    // alt section band
          card: '#FFFCF5',    // card surface
        },
        ink: {
          DEFAULT: '#121212',
          muted: '#4E4A43',
          line: '#121212',
        },
        // Flat candy accents
        acid: '#FFC700',   // primary yellow highlight
        bubble: '#FF90E8', // pink
        limey: '#B8F25D',  // lime
        sky: '#53B7FF',    // blue
        grape: '#A78BFA',  // violet
        tang: '#FF7A48',   // orange
        // Dark band
        night: {
          DEFAULT: '#121212',
          soft: '#1C1B18',
          ink: '#F7F1E5',
          muted: '#B9B2A4',
        },
        // Brand accent (nav, logo, generic CTAs)
        brand: {
          DEFAULT: '#4F46E5',
          light: '#6366F1',
          dark: '#4338CA',
        },
        // Legacy aliases so older pages (privacy / terms) keep rendering.
        editorial: {
          paper: '#F7F1E5',
          white: '#FFFCF5',
          ink: '#121212',
          charcoal: '#2E2B26',
          highlight: '#4F46E5',
          accent: '#6366F1',
          border: '#121212',
          muted: '#4E4A43',
          primary: '#4F46E5',
          secondary: '#6366F1',
        },
        // Old token aliases still referenced by shared components
        canvas: {
          DEFAULT: '#F7F1E5',
          soft: '#EFE6D2',
          card: '#FFFCF5',
        },
      },
      boxShadow: {
        // Hard offset "print" shadows — the neobrutalist signature
        'neo-xs': '2px 2px 0 0 #121212',
        'neo-sm': '3px 3px 0 0 #121212',
        neo: '5px 5px 0 0 #121212',
        'neo-lg': '8px 8px 0 0 #121212',
        'neo-xl': '12px 12px 0 0 #121212',
        // Inverted (light) shadow for dark bands
        'neo-light': '5px 5px 0 0 #F7F1E5',
        'neo-light-lg': '8px 8px 0 0 #F7F1E5',
        // Legacy soft aliases (privacy / terms)
        soft: '3px 3px 0 0 #121212',
        lift: '5px 5px 0 0 #121212',
        liftlg: '8px 8px 0 0 #121212',
      },
      borderRadius: {
        // Neobrutalism keeps corners tight
        xl: '0.5rem',
        '2xl': '0.75rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 44s linear infinite',
        'marquee-reverse': 'marquee-reverse 36s linear infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        wiggle: 'wiggle 2.4s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        blink: 'blink 1.6s steps(2, start) infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
