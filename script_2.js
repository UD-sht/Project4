let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar');

searchbtn.addEventListener
(
    'click', () =>
    {
        searchbtn.classList.toggle('fa-times');
        searchbar.classList.toggle('active');
    }
);

window.onscroll, () =>
{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
}

let loginbtn = document.querySelector('#login-btn');
let logincontainer = document.querySelector('.login-container');
let loginclose = document.querySelector('#close-login-btn');

loginbtn.addEventListener
(
    'click', () =>
    {
        logincontainer.classList.toggle('active');
        searchbtn.classList.remove('fa-times');
        searchbar.classList.remove('active');
    }   
);

loginclose.addEventListener
(
    'click', () =>
    {
        logincontainer.classList.remove('active');
    }
);

let menubars = document.querySelector('#menu-bars');
let navul = document.querySelector('nav ul')

menubars.addEventListener
(
    'click', ()=>
    {
        navul.classList.toggle('active');
        searchbtn.classList.remove('fa-times');
        searchbar.classList.remove('active');
        logincontainer.classList.remove('active');
    }
);