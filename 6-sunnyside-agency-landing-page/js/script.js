const navbar = document.getElementById('navbar')
const toggleNavbar = () => {
    navbar.classList.toggle('hidden')
}
window.onclick = (event) => {
    if (!event.target.matches('#toggleBtn') && !navbar.classList.contains('hidden')) {
        toggleNavbar()
    }
}