/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     'pale-red':'#f8796c',
     'gray':'#616161'
    }
  },
  plugins: [require("daisyui")],
}