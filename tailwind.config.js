/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B5CAD',
          dark: '#08457F',
          light: '#E6F0F9',
        },
        secondary: {
          DEFAULT: '#14A6A6',
        },
        background: {
          DEFAULT: '#FFFFFF',
          soft: '#F4F8FB',
        },
        text: {
          DEFAULT: '#172033',
          muted: '#64748B',
        },
        border: {
          DEFAULT: '#E2E8F0',
        },
        emergency: {
          DEFAULT: '#C62828',
          light: '#FFEBEE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        floating: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
