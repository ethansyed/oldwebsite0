const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const navlink = document.querySelector('.navbar__links');
const navlink1 = document.querySelector('#skillLink');
const navlink2 = document.querySelector('#projectLink');

const faceRecog = document.querySelector('#faceRecog');
const rest = document.querySelector('#rest');
const cscroller = document.querySelector('#cscroller');

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
    window.open('https://www.linkedin.com/in/ethan-syed-570b86186/', '_blank');
})

github.addEventListener('click', function(){
    window.open("https://github.com/ethansyed", '_blank');
})

doc.addEventListener('click', function(){
    window.open("images/ResumeEthanSyed.pdf", '_blank');
 })

 faceRecog.addEventListener('click', function(){
    window.open("https://github.com/ethansyed/facialRecognition", '_blank');
 })

 rest.addEventListener('click', function(){
    window.open("https://github.com/ethansyed/RESTapi", '_blank');
 })

 cscroller.addEventListener('click', function(){
    window.open("https://www.youtube.com/watch?v=uPfxQGI0XYg&t=1s", '_blank');
 })