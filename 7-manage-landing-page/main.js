var slider = tns({
    container: '.my-slider',
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput : false,
    controls : false,
    responsive: {
      0: {
        items: 1,
        nav : true,
        navContainer : document.querySelector('#indicators'),
        navPosition : 'bottom'
      },
      768 : {
        items : 3,
        nav	: false,
      }
    }
});
// console.log(document.querySelector('#indicators'))