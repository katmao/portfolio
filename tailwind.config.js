import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b0d11',
        accent: '#2f5dff',
        soft: '#f4f6fb',
        slateInk: '#3c3f46',
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        proseWide: '60rem',
      },
      boxShadow: {
        subtle: '0 20px 40px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
