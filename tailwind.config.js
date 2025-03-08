/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        deep:'10px 10px 5px -2px #1D202680'
      }
    },
  },
  plugins: [],
}

