/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#351c75",
        "secondary": "#cc8b2a",
        "tertiary": "#f3e5f5",
      }
    },
  },
  plugins: [],
}