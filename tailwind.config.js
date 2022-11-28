/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#764AF1",
      },
      keyframes: {
        firstMove: {
          '100%': { transform: 'translateX(100%)' },
          '0%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        firstMove: '3s linear'
      }
    },
  },
  plugins: [],
}