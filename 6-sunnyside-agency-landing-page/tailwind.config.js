module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': 'Barlow, sans-serif',
      'serif': 'Fraunces, serif'
    },
    colors: {
      transparent: 'transparent',
      primary : {
        'red': 'hsl(7, 99%, 70%)',
        'yellow': 'hsl(51, 100%, 49%)',
        'desaturated-cyan' : 'hsl(167, 40%, 24%)',
        'blue' : 'hsl(198, 62%, 26%)',
        'moderate-cyan' : 'hsl(168, 34%, 41%)'
      },
      blue: {
        'desaturated' : 'hsl(212, 27%, 19%)',
        'vd-grayish': 'hsl(213, 9%, 39%)',
        'd-grayish' : 'hsl(232, 10%, 55%)',
        'grayish' : 'hsl(210, 4%, 67%)'
      },
      'white': 'hsl(0, 0%, 100%)'
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('../images/desktop/image-header.jpg')",
        'hero-image-mobile': "url('../images/mobile/image-header.jpg')",
      }
    }
  },
  plugins: [],
}
