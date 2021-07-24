const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './*.html',
    './js/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily : {
      main : ['Montserrat', 'sans-serif']
    },
    colors: {
      primary: 'var(--primary)',
      secondary : 'var(--secondary)',
      lightestBlue : 'var(--lightest-grayish-blue)',
      lightBlue : 'var(--light-grayish-blue)',
      default : 'var(--grayish-blue)',
      darkBlue : 'var(--dark-grayish-blue)',
      black: colors.black,
      white: colors.white,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
