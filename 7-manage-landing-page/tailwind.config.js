module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily : {
      main : 'Be Vietnam Pro, sans-serif'
    },
    colors: {
      transparent: 'transparent',
      primary : {
        red : 'hsl(12, 88%, 59%)',
        blue : 'hsl(228, 39%, 23%)'
      },
      blue : {
        grayish : 'hsl(227, 12%, 61%)',
        dark : 'hsl(233, 12%, 13%)'
      },
      red : 'hsl(13, 100%, 96%)',
      gray : 'hsl(0, 0%, 98%)',
      white : '#ffffff'
    },
    backgroundImage: {
      'simplify-mobile': "url(./images/bg-simplify-section-mobile.svg)",
      'simplify-desktop': "url(./images/bg-simplify-section-desktop.svg)",
    },
    extend: {},
  },
  plugins: [],
}
