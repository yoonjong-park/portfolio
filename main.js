'use strict';  // strict Mode // ES5부터 추가됨. IE10부터 지원.  https://bit.ly/3kIfpms

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');  // 왜 getElementById를 안쓰고 querySelector를 쓰는 걸까? 정확히 모르겠다.
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {   // "() => { "  = "function() {" // 익명함수임.
    if(window.scrollY > navbarHeight * 4) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});



// Control when navbar menu clicked
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', function(event) {
    // if(event.target.innerText === 'Home') // 처음에는 이렇게 하려 했으나..  이건 굉장히 비효율 적.
    const target = event.target;
    const link = event.target.dataset.link;

    if(link == null)  // 빈 곳 클릭 시 넘기기.
        return;

    const scrollMove = document.querySelector(link);
    // scrollMove.scrollIntoView({behavior: "smooth"});
    const top = scrollMove.offsetTop - navbarHeight < 0 ? 0 : scrollMove.offsetTop - navbarHeight;  // top - navbarHeight < 0 일 때 0으로 입력.
    window.scrollTo({
        top:top,
        left:0,
        behavior: 'smooth'
    });
});


// ScrollTo Contact when you clicked "Contact Me" button.
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});


// Home opacity
const homeContainer = document.querySelector('.home__container');
const homeContainerHeight = homeContainer.getBoundingClientRect().height;

document.addEventListener('scroll', function(event) {
    homeContainer.style.opacity = 1.1 - window.scrollY / homeContainerHeight;
});


// Show "arrow up" Button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', function(event) {
    if(window.scrollY > navbarHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});
arrowUp.addEventListener('click',function(event){
    scrollIntoView('#home');
});

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', function(event) {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    // console.log(filter);
    if(filter == null) {  // 빈 곳 클릭 시 넘기기.
        return;
    }
    projects.forEach((project) => {
        console.log(project.dataset.type);
        if(filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });
});



// setup Function - scrollIntoView
function scrollIntoView(selector) {
    const scrollMove = document.querySelector(selector);
    scrollMove.scrollIntoView({behavior: 'smooth'});
}

