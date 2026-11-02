/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#040609',
          900: '#070A10',
          850: '#0B1018',
          800: '#101722',
          700: '#182232',
        },
        gold: {
          50: '#FCF8EE',
          100: '#F6EBD0',
          200: '#EBD5A3',
          300: '#DFBE78',
          400: '#CFA657',
          500: '#B88D3E',
          600: '#946E2B',
          700: '#70511D',
        },
        ivory: {
          50: '#FCFBF8',
          100: '#F7F3EA',
          200: '#EDE6D6',
          300: '#DDD2BC',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        gold: '0 24px 70px -24px rgba(207, 166, 87, 0.22)',
        obsidian: '0 30px 80px -28px rgba(4, 6, 9, 0.78)',
        ivory: '0 24px 60px -24px rgba(16, 23, 34, 0.10)',
      },
    },
  },
  plugins: [],
};
