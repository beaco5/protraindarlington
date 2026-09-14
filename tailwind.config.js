/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        oxblood: {
          DEFAULT: '#6B1A1A',
          light: '#8A2626',
          dark: '#4E1010',
        },
        cream: {
          DEFAULT: '#F5F0EA',
          dark: '#EBE3D8',
        },
        gold: {
          DEFAULT: '#C9A24B',
          light: '#D9B968',
          dark: '#A9822F',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};
