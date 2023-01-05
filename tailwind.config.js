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
      animation: {
        "flip": "rotate 2s linear"
      },
      keyframes: {
        rotate: {
          "0%": {transform: "rotateY(0deg)"},
          "100%": { transform: "rotateY(360deg)"},

        }
      },
    },
  },
  plugins: [],
}