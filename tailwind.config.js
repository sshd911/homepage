/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.php",
    "./src/*.php",
    "./js/*.js"
  ],
  theme: {
    screens: {
      sm: {'max': '433px'},
    },
    extend: {},
  },
  plugins: [],
}
