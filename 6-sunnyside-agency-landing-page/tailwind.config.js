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
        'transform-image': "url('../images/desktop/image-transform.jpg')",
        'transform-image-mobile': "url('../images/mobile/image-transform.jpg')",
        'stand-out-image': "url('../images/desktop/image-stand-out.jpg')",
        'stand-out-image-mobile': "url('../images/mobile/image-stand-out.jpg')",
        'graphic-design-image': "url('../images/desktop/image-graphic-design.jpg')",
        'graphic-design-image-mobile': "url('../images/mobile/image-graphic-design.jpg')",
        'photography-image': "url('../images/desktop/image-photography.jpg')",
        'photography-image-mobile': "url('../images/mobile/image-photography.jpg')",
        'gallery-orange-image': "url('../images/desktop/image-gallery-orange.jpg')",
        'gallery-orange-image-mobile': "url('../images/mobile/image-gallery-orange.jpg')",
        'gallery-cone-image': "url('../images/desktop/image-gallery-cone.jpg')",
        'gallery-cone-image-mobile': "url('../images/mobile/image-gallery-cone.jpg')",
        'gallery-milk-bottles-image': "url('../images/desktop/image-gallery-milkbottles.jpg')",
        'gallery-milk-bottles-image-mobile': "url('../images/mobile/image-gallery-milkbottles.jpg')",
      }
    }
  },
  plugins: [],
}
