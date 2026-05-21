import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Tailwind blue-500
        secondary: '#818cf8',
        background: '#1e293b',
        glass: 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: '0 28px 60px rgba(15, 23, 42, 0.18)',
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [forms],
};
