/**
 * Tailwind CSS configuration.
 *
 * This file defines the paths to all of the template files in the project
 * so Tailwind can purge unused styles in production. It also extends the
 * default theme with custom colors that match Gnanalytica's brand.
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', 'Georgia', ...defaultTheme.fontFamily.serif],
        display: ['Playfair Display', 'Georgia', ...defaultTheme.fontFamily.serif],
        elegant: ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        'luxury': '0.15em',
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
        'premium-lg': '0 10px 40px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
        'premium-xl': '0 20px 60px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
        'corporate': '0 4px 20px rgba(30, 58, 138, 0.2)',
        'corporate-lg': '0 10px 40px rgba(30, 58, 138, 0.3)',
      },
      colors: {
        // Corporate Premium Elite Theme - Sophisticated Professional Palette
        editorial: {
          paper: '#fafafa', // Soft white base
          white: '#ffffff', // Pure white
          ink: '#0a0a0a', // Deep black text
          charcoal: '#2d2d2d', // Rich charcoal
          highlight: '#1e40af', // Corporate blue
          accent: '#3b82f6', // Royal blue
          border: '#e5e5e5', // Subtle borders
          muted: '#6b6b6b', // Muted text
          // Corporate premium color palette
          primary: '#1e3a8a', // Deep corporate blue
          secondary: '#2563eb', // Professional blue
          tertiary: '#1e40af', // Royal blue
          slate: '#475569', // Corporate slate
          steel: '#64748b', // Steel gray
          platinum: '#e5e4e2', // Platinum
        },
        primary: {
          DEFAULT: '#3b82f6', // Professional blue
          dark: '#2563eb',
          light: '#60a5fa',
        },
        secondary: {
          DEFAULT: '#06b6d4', // Teal/cyan
          dark: '#0891b2',
          light: '#22d3ee',
        },
        accent: {
          DEFAULT: '#8b5cf6', // Purple
          dark: '#7c3aed',
          light: '#a78bfa',
        },
        neutral: {
          50: '#FDFBF7',
          100: '#F9F7F3',
          200: '#E5E5E5',
          300: '#D0D0D0',
          400: '#9B9B9B',
          500: '#6B6B6B',
          600: '#4A4A4A',
          700: '#2D2D2D',
          800: '#1A1A1A',
          900: '#0F0F0F',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      minHeight: {
        '44': '44px',
        '48': '48px',
      },
      minWidth: {
        '44': '44px',
        '48': '48px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};