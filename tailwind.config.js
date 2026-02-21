/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Tu nommes ta classe 'josefin' (ou ce que tu veux)
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeinup: 'fadeInUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

