let ham= document.querySelector('#hamburger');
let navlist= document.querySelector('#nav-list');
ham.addEventListener('click',()=>{
    navlist.classList.toggle('active');
});