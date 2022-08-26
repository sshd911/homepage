/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html, php}",
    "./js/*.js",
    "./*.{html, php}",
  ],
  theme: {
    screens: {
      sm: {'max': '433px'},
    },
    extend: {},
  },
  plugins: [],
}
