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
        // Client Luxury Palette
        noir: {
          DEFAULT: '#111111',
          50: '#1a1a1a',
          100: '#151515',
          900: '#0a0a0a',
        },
        charcoal: {
          DEFAULT: '#2E2E2E',
          light: '#3a3a3a',
          dark: '#222222',
          border: '#383838',
        },
        antique_gold: {
          DEFAULT: '#C9A84C',
          light: '#d4b763',
          dark: '#b08f37',
          muted: 'rgba(201, 168, 76, 0.15)',
        },
        champagne: {
          DEFAULT: '#E8D6B3',
          light: '#f1e3c8',
          dark: '#d1bd93',
          glow: 'rgba(232, 214, 179, 0.2)',
        },
        ivory: {
          DEFAULT: '#F8F5EF',
          muted: '#ded9cf',
          dim: '#bfb9ad',
        },

        // Legacy / Component Compatibility Aliases
        onyx: {
          DEFAULT: '#111111',
          100: '#0a0a0a',
          200: '#0e0e0e',
          300: '#111111',
          400: '#1a1a1a',
          500: '#222222',
          600: '#2E2E2E',
          700: '#555555',
          800: '#999999',
          900: '#F8F5EF',
        },
        jet_black: {
          DEFAULT: '#2E2E2E',
          100: '#111111',
          200: '#181818',
          300: '#222222',
          400: '#282828',
          500: '#2E2E2E',
          600: '#3E3E3E',
          700: '#5E5E5E',
          800: '#A0A0A0',
          900: '#F8F5EF',
        },
        platinum: {
          DEFAULT: '#F8F5EF',
          100: '#2E2E2E',
          200: '#444444',
          300: '#777777',
          400: '#AAAAAA',
          500: '#E8D6B3',
          600: '#EFEAE1',
          700: '#F5F1E8',
          800: '#F8F5EF',
          900: '#FFFFFF',
        },
        bright_gold: {
          DEFAULT: '#C9A84C',
          100: '#261e0b',
          200: '#4c3c16',
          300: '#735b21',
          400: '#99792c',
          500: '#C9A84C',
          600: '#d4b763',
          700: '#dfc67b',
          800: '#e9d694',
          900: '#E8D6B3',
        },
        saffron: {
          DEFAULT: '#C9A84C',
          500: '#C9A84C',
          600: '#b08f37',
        },
        'kadence-indigo': '#C9A84C',
        'indigo-deep': '#2E2E2E',
        'slate-ink': '#111111',
        'amber-pro': '#C9A84C',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #9e7f2b 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #d8bc67 0%, #b08f37 100%)',
        'champagne-gradient': 'linear-gradient(135deg, #E8D6B3 0%, #C9A84C 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(46, 46, 46, 0.6) 0%, rgba(17, 17, 17, 0.85) 100%)',
        'noir-gradient': 'linear-gradient(180deg, #111111 0%, #161616 100%)',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        space: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(201, 168, 76, 0.35)',
        'gold-glow-lg': '0 0 45px -8px rgba(201, 168, 76, 0.55)',
        'champagne-glow': '0 0 25px -5px rgba(232, 214, 179, 0.25)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.85)',
      },
    },
  },
  plugins: [],
};

export default config;
