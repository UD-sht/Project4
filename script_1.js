let searchbtn = document.querySelector('#search-btn');
let searchcontainer = document.querySelector('.search-container');
searchbtn.addEventListener
(
    'click', () =>
    {
        searchbtn.classList.toggle('fa-times');
        searchcontainer.classList.toggle('active');
        navul.classList.remove('active');
    }
);
window.onscroll, () =>
{
    searchbtn.classList.remove('fa-times');
    searchcontainer.classList.remove('active');  
    navul.classList.remove('active'); 
}
let userlogin = document.querySelector('#user-btn');
let logincontainer = document.querySelector('.login-container');
userlogin.addEventListener
(
    'click', () =>
    {
        logincontainer.classList.toggle('active');
        searchbtn.classList.remove('fa-times');
        searchcontainer.classList.remove('active'); 
        navul.classList.remove('active');
    }
);
let closelogin = document.querySelector('#close-login');
closelogin.addEventListener
(
    'click', () =>
    {
        logincontainer.classList.remove('active');
    }
);

let menubar = document.querySelector('#menu-bars');
let navul = document.querySelector('nav ul');

menubar.addEventListener
(
    'click', () =>
    {
        navul.classList.toggle('active');
        searchbtn.classList.remove('fa-times');
        searchcontainer.classList.remove('active'); 
        logincontainer.classList.remove('active');
    }
);