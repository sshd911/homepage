/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/{components, js}/*.{html, js}",
    "./index.php",
  ],
  theme: {
    screens: {
      sm: {'max': '433px'},
    },
    extend: {},
  },
  plugins: [],
}
