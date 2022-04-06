const menuBtn = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')

window.onload = function() {
  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('is-active')
    mobileMenu.classList.toggle('is-active')
  })
}