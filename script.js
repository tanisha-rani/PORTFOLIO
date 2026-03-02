function myMenuFunction(){
let menu = document.getElementById("myNavMenu");
menu.classList.toggle("responsive");
}

/* NAV SHADOW */
window.onscroll = function(){
let nav = document.getElementById("header");

if(document.documentElement.scrollTop > 50){
nav.style.boxShadow="0 5px 15px rgba(0,0,0,0.08)";
}else{
nav.style.boxShadow="none";
}
};

/* TYPING EFFECT */
var typingEffect = new Typed(".typedText",{
strings:[
"Software Engineer Intern",
"Java Full Stack Developer",
"AI/ML Enthusiast"
],
loop:true,
typeSpeed:100,
backSpeed:80,
backDelay:2000
});

/* SCROLL REVEAL */
const sr = ScrollReveal({
origin:'top',
distance:'60px',
duration:2000,
reset:false
});

sr.reveal('.featured-text',{delay:200});
sr.reveal('.image',{delay:300});
sr.reveal('.top-header',{delay:200});
sr.reveal('.exp-card',{interval:200});
sr.reveal('.project-box',{interval:200});
sr.reveal('.about-info',{delay:200});

/* ACTIVE LINK */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
let scrollY = window.pageYOffset;

sections.forEach(current=>{
const sectionHeight = current.offsetHeight;
const sectionTop = current.offsetTop - 100;
const sectionId = current.getAttribute("id");

if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
document.querySelector('.nav-menu a[href*=' + sectionId + ']')
.classList.add("active-link");
}else{
document.querySelector('.nav-menu a[href*=' + sectionId + ']')
.classList.remove("active-link");
}
});
});