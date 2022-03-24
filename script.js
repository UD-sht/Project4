let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');

window.onscroll = () =>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
}

searchbtn.addEventListener('click', () =>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});


let loginbtn = document.querySelector('#login-btn');    
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#login-form-close');

loginbtn.addEventListener('click', () =>{
    loginform.classList.toggle('active');
});
formclose.addEventListener('click', () =>{
    loginform.classList.remove('active');
});


let menubtn = document.querySelector('#menu-bars');
let menubar = document.querySelector('nav ul');

menubtn.addEventListener('click', () =>{
    menubar.classList.toggle('active');
});