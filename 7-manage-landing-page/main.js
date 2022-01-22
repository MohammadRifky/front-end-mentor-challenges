var slider = tns({
    container: '.my-slider',
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput : false,
    controls : false,
    responsive: {
      0: {
        items: 1,
        nav : true
      },
      768 : {
        items : 3,
        nav	: false
      }
    }
});