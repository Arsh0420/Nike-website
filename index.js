const menuIcon = document.getElementById('menuIcon');
const links = document.getElementById('links');

menuIcon.addEventListener('click', () => {
    links.classList.toggle('show');
})