// Toogle 
const navbarNav = document.querySelector ('.navbar-nav');

// ketika menu di click
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
