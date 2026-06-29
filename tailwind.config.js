/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#111111',
        'surface-2': '#1A1A1A',
        accent: '#D4A017',
        'accent-muted': '#A07810',
        foreground: '#F5F5F5',
        'foreground-muted': '#A0A0A0',
        'foreground-subtle': '#555555',
        metal: '#1C1C1C',
        'metal-light': '#2A2A2A',
        folder: '#C4A862',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        accent: '0 0 20px rgba(212, 160, 23, 0.1)',
        'accent-lg': '0 0 30px rgba(212, 160, 23, 0.25)',
      },
      borderRadius: {
        DEFAULT: '10px',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
}
