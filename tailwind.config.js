/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Baloo 2"', 'cursive'],
        body: ['"Nunito"', 'sans-serif'],
      },
      colors: {
        candy: {
          pink: '#ff86c8',
          peach: '#ffc39e',
          yellow: '#ffe58f',
          mint: '#9de7cb',
          sky: '#a9d8ff',
          violet: '#d9b8ff',
        },
      },
      boxShadow: {
        soft: '0 12px 32px rgba(255, 134, 200, 0.2)',
      },
      backgroundImage: {
        confetti:
          'radial-gradient(circle at 10% 20%, rgba(255, 134, 200, 0.35), transparent 45%), radial-gradient(circle at 90% 10%, rgba(169, 216, 255, 0.35), transparent 50%), radial-gradient(circle at 30% 80%, rgba(157, 231, 203, 0.3), transparent 50%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
