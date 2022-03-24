
let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');

window.onscroll = () =>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
}

searchbtn.addEventListener('click', () =>{
    searchbtn.classList.toggle('fa-times');
    navbar.classList.remove('active');
    searchbar.classList.toggle('active');
});

let userbtn = document.querySelector('#user-btn');
let loginbox = document.querySelector('.login-form-container');

userbtn.addEventListener
(
    'click', () =>
    {
        loginbox.classList.toggle('active');
        navbar.classList.remove('active');
        searchbar.classList.remove('active');
        searchbtn.classList.remove('fa-times');
    }
);

let closeform = document.querySelector('#close-form');
closeform.addEventListener
(
    'click',() =>
    {
        loginbox.classList.remove('active');
    }
);

let menubars = document.querySelector('#menu-bars');
let navbar = document.querySelector('nav ul');

menubars.addEventListener
(
    'click',() =>
    {
        navbar.classList.toggle('active');
        searchbar.classList.remove('active');
        searchbtn.classList.remove('fa-times');
    }
);
window.onscroll = () =>{
    navbar.classList.remove('active');
}