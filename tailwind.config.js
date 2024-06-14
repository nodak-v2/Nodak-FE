/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          accent1: '#777777',
          accent2: '#a2a2a2',
        },
        dark: {
          accent1: '#1e1e1e',
          accent2: '#333333',
        },
        primary: '#ff614b',
        sub: '#53251d',
        error: '#ec323e',
        background: '#121212',
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
