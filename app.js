const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
const background = document.querySelector('.background-img-container');
const title = document.querySelector('.name');
const sports = document.querySelector('.sports')
const sportsTitle = document.querySelector('.sport-title')
const portrait = document.querySelector('.portrait')
const portraitTitle = document.querySelector('.portrait-name')
const landscapes = document.querySelector('.landscapes')
const landscapesTitle = document.querySelector('.landscapes-name')

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
document.addEventListener('DOMContentLoaded',e => {
    setTimeout(function () {
        sportsTitle.style.transition = 'top 1s ease'; // Set the transition property
        sportsTitle.style.top = '30%';
        console.log('hello')
    }, 100);
})
// portrait.addEventListener('mouseover',e => {
//     setTimeout(function () {
//         portraitTitle.style.transition = 'top 1s ease'; // Set the transition property
//         portraitTitle.style.top = '145%';
//     }, 100);
// })
// landscapes.addEventListener('mouseover',e => {
//     setTimeout(function () {
//         landscapesTitle.style.transition = 'top 1s ease'; // Set the transition property
//         landscapesTitle.style.top = '240%';
//     }, 100);
// })
