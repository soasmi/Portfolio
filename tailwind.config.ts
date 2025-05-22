import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        'dark-lighter': '#181A1B',
        'accent-blue': '#4FD1FF',
        'accent-green': '#6EE7B7',
        'accent-purple': '#A78BFA',
        'accent-white': '#F5F5F5',
        'glass': 'rgba(30, 41, 59, 0.7)',
        'glass-light': 'rgba(30, 41, 59, 0.4)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-blue': '0 2px 12px 0 #4FD1FF33',
        'soft-green': '0 2px 12px 0 #6EE7B733',
        'soft-purple': '0 2px 12px 0 #A78BFA33',
        'glass': '0 4px 24px 0 rgba(31, 38, 135, 0.10)',
        'card': '0 2px 8px 0 rgba(0,0,0,0.10)',
      },
      backdropBlur: {
        glass: '8px',
      },
      animation: {
        'gradient-x': 'gradient-x 12s ease-in-out infinite',
        'gradient-y': 'gradient-y 12s ease-in-out infinite',
        'gradient-xy': 'gradient-xy 18s ease-in-out infinite',
        'soft-glow': 'soft-glow 2.5s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': 'left center' },
          '50%': { 'background-position': 'right center' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-position': 'center top' },
          '50%': { 'background-position': 'center center' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-position': 'left top' },
          '50%': { 'background-position': 'right bottom' },
        },
        'soft-glow': {
          '0%, 100%': { boxShadow: '0 0 0px 0px #4FD1FF00' },
          '50%': { boxShadow: '0 0 8px 2px #4FD1FF44' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 