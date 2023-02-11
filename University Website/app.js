//Defining selectors

const navLinks = document.querySelector('.nav-links');
const menuButton = document.querySelector('#menu-btn');
const closeMenuButton = document.querySelector('#close-menu-btn')

//Menu button toggle
menuButton.addEventListener('click', function(){
    navLinks.classList.toggle("active");
})

//Close-menu toggle
closeMenuButton.addEventListener('click', function() {
  navLinks.classList.toggle("active");
})