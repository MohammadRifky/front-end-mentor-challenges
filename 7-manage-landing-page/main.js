var slider = tns({
    container: '.my-slider',
    slideBy: 'page',
    //autoplay: true,
    autoplayButtonOutput : false,
    controls : false,
    nav	: false,
    responsive: {
      0: {
        items: 1,
        nav : true,
        // navContainer : '#indicators',
        navPosition : 'bottom'
      },
      768 : {
        items : 3,
      }
    }
});
console.log(document.querySelector('#indicators'))