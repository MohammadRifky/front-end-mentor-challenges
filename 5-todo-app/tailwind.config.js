module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    colors: {
      primary: {
        'bright-blue': 'hsl(220, 98%, 61%)',
      },
      light : {
        'vl-gray': 'hsl(0, 0%, 98%)',
        'vl-grayish-blue': 'hsl(236, 33%, 92%)',
        'l-grayish-blue': 'hsl(233, 11%, 84%)',
        'd-grayish-blue': 'hsl(236, 9%, 61%)',
        'vd-grayish-blue': 'hsl(235, 19%, 35%)'
      },
      dark : {
        'vd-blue': 'hsl(235, 21%, 11%)',
        'vd-des-blue': 'hsl(235, 24%, 19%)',
        'l-grayish-blue': 'hsl(234, 39%, 85%)',
        'l-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'd-grayish-blue': 'hsl(234, 11%, 52%)',
        'vd-grayish-blue': 'hsl(233, 14%, 35%)',
        'vd-grayish-blue': 'hsl(237, 14%, 26%)'
      }
    },
    fontFamily: {
      'main': ['Josefin Sans', 'sans-serif']
    },
    fontWeight : {
      normal: 400,
      bold: 700,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
