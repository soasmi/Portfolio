import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FAF7F2',
          light: '#FDFCFA',
          warm: '#F3EDE4',
          card: '#FFFFFF',
          border: '#E6DFD5',
          borderDark: '#D2C8BA',
        },
        ink: {
          DEFAULT: '#111317',
          light: '#282C34',
          muted: '#5A606D',
          faint: '#8E94A0',
          border: '#E2DCD3',
        },
        terracotta: {
          DEFAULT: '#C84B31',
          hover: '#B53E26',
          soft: '#FDF1EE',
        },
        pine: {
          DEFAULT: '#255038',
          hover: '#1D402C',
          soft: '#EEF6F1',
        },
        cobalt: {
          DEFAULT: '#1D4ED8',
          hover: '#1E40AF',
          soft: '#EFF6FF',
        },
        amber: {
          DEFAULT: '#C07D2B',
          hover: '#A66A21',
          soft: '#FEF8EE',
        },
        noir: {
          DEFAULT: '#0C0E12',
          card: '#141720',
          elevated: '#1C212D',
          border: '#232938',
          muted: '#8D95A5',
          text: '#F5F7FA',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 1px 3px rgba(18, 19, 22, 0.04), 0 8px 24px rgba(18, 19, 22, 0.03)',
        'editorial-hover': '0 4px 12px rgba(18, 19, 22, 0.06), 0 16px 36px rgba(18, 19, 22, 0.06)',
        'noir-card': '0 4px 20px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
 