// carousel
const slider = tns({
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
//Navbar
const navbar = document.getElementById('navbar')
const toggleBtn = document.getElementById('toggleBtn')
const toggleNavbar = () => {
  const isNavHidden  = navbar.classList.contains('hidden')
  navbar.classList.toggle('hidden')
  if (isNavHidden) return toggleBtn.src = "./images/icon-close.svg"
  //Else
  return toggleBtn.src = "./images/icon-hamburger.svg"
}
//.addEventListener('click', toggleNavbar)
window.onclick = (event) => {
    if (!event.target.matches('#toggleBtn') && !navbar.classList.contains('hidden')) {
        toggleNavbar()
    }
}
//Form Validation
const validateForm = (e) => {
  e.preventDefault()
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isInputValid = emailRegex.test(document.getElementById('email').value) 
  const feedbackArea = document.getElementById('emailFeedback')
  if (isInputValid) return feedbackArea.innerText = "Successful"
  return feedbackArea.innerText = "Please insert a valid email"
}