let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');

searchbtn.addEventListener('click', () =>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});