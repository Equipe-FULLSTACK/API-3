/// NAV BAR MENU //

const menuIcon = document.getElementById('menu-icon'); // GET BY ID MENU ICON
const menu = document.getElementById('menu'); // GET BY ID MENU
const body = document.getElementById('body-container'); // GET BY ID BODY body-container

menuIcon.addEventListener('click', () => { // EVENT LIST CLICK ICON MENU

    if (menu.style.display === 'none') { // 
        menu.style.display = 'block';
        body.className = 'container-nav';
    } else {
        menu.style.display = 'none';
        body.className = 'container';
    }
});
