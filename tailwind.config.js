/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          accent1: 'var(--gray-1)',
          accent2: 'var(--gray-2)',
          accent3: 'var(--gray-3)',
        },
        dark: {
          accent1: 'var(--dark-1)',
          accent2: 'var(--dark-2)',
        },
        primary: {
          accent1: 'var(--primary-1)',
          accent2: 'var(--primary-2)',
        },
        grass: {
          100: '#F4FCE3',
          200: '#D8F5A2',
          300: '#94D82D',
          400: '#94D82D',
          500: '#5C940D',
        },
      },
    },
  },
  plugins: [],
};
