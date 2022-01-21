console.log("Hello World")
var slider = tns({
    container: '.my-slider',
    slideBy: 'page',
    autoplay: false,
    autoplayButtonOutput : false,
    controls : false,
    nav	: false,
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items : 3
      }
    }
});