/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'hikari-bg': '#080b11',
        'hikari-bg-1': '#0c1018',
        'hikari-bg-2': '#10151f',
        'hikari-bg-3': '#151c29',
        'hikari-surface': '#1a2233',
        'hikari-border': '#1e2a3d',
        'hikari-border-soft': '#161f2e',
        'hikari-text': '#d8e0ec',
        'hikari-text-strong': '#eef2f8',
        'hikari-muted': '#7e8fa6',
        'hikari-dim': '#4a5a72',
        'hikari-accent': '#3dd8b0',
        'hikari-warn': '#e8a84c',
        'hikari-danger': '#d4605e',
      },
      fontFamily: {
        body: ["'Instrument Sans'", '-apple-system', 'sans-serif'],
        mono: ["'DM Mono'", "'SF Mono'", 'monospace'],
      },
      animation: {
        'blink': 'blink 2s ease infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
