/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        zinc : {
          350 : "rgb(196, 196, 196)"
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
    }
  },
  plugins: [],
}
