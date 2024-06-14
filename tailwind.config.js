/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 색상 설정
      colors: {
        primary: 'var(--primary)',
        sub: 'var(--sub)',
        error: 'var(--error)',
        background: 'var(--background)',
        dark: {
          accent1: 'var(--dark-accent1)',
          accent2: 'var(--dark-accent2)',
        },
        gray: {
          accent1: 'var(--gray-accent1)',
          accent2: 'var(--gray-accent2)',
        },
        grass: {
          100: 'var(--grass-100)',
          200: 'var(--grass-200)',
          300: 'var(--grass-300)',
          400: 'var(--grass-400)',
          500: 'var(--grass-500)',
        },
      },

      // 폰트 설정
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontWeight: {
        semibold: 600,
        medium: 500,
        regular: 400,
      },
    },
  },
  plugins: [],
};
