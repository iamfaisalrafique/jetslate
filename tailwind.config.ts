import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Obsidian / Onyx Palette
        onyx: {
          DEFAULT: '#0b0c0c',
          100: '#020303',
          200: '#050505',
          300: '#070808',
          400: '#0a0b0b',
          500: '#0b0c0c',
          600: '#3b4040',
          700: '#697272',
          800: '#9aa2a2',
          900: '#cdd0d0',
        },
        // Jet Black Graphite Palette
        jet_black: {
          DEFAULT: '#2a2e34',
          100: '#08090a',
          200: '#101214',
          300: '#191b1f',
          400: '#212429',
          500: '#2a2e34',
          600: '#4e5661',
          700: '#747f8f',
          800: '#a2aab5',
          900: '#d1d4da',
        },
        // Platinum Palette
        platinum: {
          DEFAULT: '#e9eaec',
          100: '#2c2e32',
          200: '#575c64',
          300: '#858a95',
          400: '#b7bac0',
          500: '#e9eaec',
          600: '#eeeef0',
          700: '#f2f2f4',
          800: '#f6f7f7',
          900: '#fbfbfb',
        },
        // Deep Antique Dark Gold Palette (Richer, darker burnished luxury gold)
        bright_gold: {
          DEFAULT: '#9e721d',
          100: '#1c1302',
          200: '#382705',
          300: '#593e08',
          400: '#7a550c',
          500: '#9e721d',
          600: '#b08323',
          700: '#c59734',
          800: '#d9ad4f',
          900: '#edd187',
        },
        // Deep Warm Burnished Bronze / Saffron
        saffron: {
          DEFAULT: '#78490a',
          100: '#150d01',
          200: '#2c1b03',
          300: '#462b05',
          400: '#5f3a07',
          500: '#78490a',
          600: '#925a0e',
          700: '#ac6d16',
          800: '#c68424',
          900: '#dc9e3f',
        },
        // Compatibility Aliases
        'kadence-indigo': '#9e721d',
        'indigo-deep': '#78490a',
        'slate-ink': '#0b0c0c',
        'amber-pro': '#9e721d',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #a67916 0%, #684706 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #b5851b 0%, #785208 100%)',
        'violet-gradient': 'linear-gradient(135deg, #a67916 0%, #684706 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(42, 46, 52, 0.45) 0%, rgba(11, 12, 12, 0.75) 100%)',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        space: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(158, 114, 29, 0.35)',
        'gold-glow-lg': '0 0 40px -8px rgba(158, 114, 29, 0.5)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};

export default config;
