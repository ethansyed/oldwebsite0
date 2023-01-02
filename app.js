const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const navlink = document.querySelector('.navbar__links')
const navlink1 = document.querySelector('#skillLink')
const navlink2 = document.querySelector('#projectLink')

const linkedIn = document.querySelector('.bibi-linkedin');
const github = document.querySelector('.bibi-github');
const doc = document.querySelector('.bibi-doc');



menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

navlink.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

navlink1.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

navlink2.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

linkedIn.addEventListener('click', function(){
    window.location.assign('https://www.linkedin.com/in/ethan-syed-570b86186/');
})

github.addEventListener('click', function(){
   window.location.assign("https://github.com/ethansyed");
})

doc.addEventListener('click', function(){
    console.log("working");
    window.location.assign("images/ResumeEthanSyed.pdf");
 })
