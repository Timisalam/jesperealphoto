const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
const background = document.querySelector('.background-img-container');
const title = document.querySelector('.name');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
document.addEventListener('DOMContentLoaded',showName)
// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-120%';
}
function closeName(){
    title.style.top = '-120%';
}
function showName(){
    setTimeout(function () {
        title.style.transition = 'top 1s ease'; // Set the transition property
        title.style.top = '50%';
    }, 200);
}
