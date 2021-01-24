const toggleBtn = document.querySelector('#toggleBtn')
const navLinks = document.querySelector('.nav_links')

toggleBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show')
})