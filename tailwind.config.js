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
        gray: {
          accent1: 'var(--gray-accent1)',
          accent2: 'var(--gray-accent2)',
          accent3: 'var(--gray-accent3)',
          accent4: 'var(--gray-accent4)',
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
