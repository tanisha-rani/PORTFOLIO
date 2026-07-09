/*=========================================
        MOBILE NAVIGATION
=========================================*/

function myMenuFunction() {

    const menu = document.getElementById("myNavMenu");

    menu.classList.toggle("responsive");

}


/*=========================================
        STICKY NAVBAR
=========================================*/

window.addEventListener("scroll", () => {

    const nav = document.getElementById("header");

    if (window.scrollY > 50) {

        nav.classList.add("sticky");

    }

    else {

        nav.classList.remove("sticky");

    }

});


/*=========================================
        ACTIVE NAVIGATION LINK
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});


/*=========================================
        TYPING EFFECT
=========================================*/

var typingEffect = new Typed(".typedText", {

    strings: [

        "Tanisha Rani",

        "Java Backend Developer",

        "Spring Boot Developer",

        "Software Engineer",

        "Full Stack Developer"

    ],

    loop: true,

    typeSpeed: 90,

    backSpeed: 50,

    backDelay: 1800

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*=========================================
        SCROLL REVEAL
=========================================*/

const sr = ScrollReveal({

    origin: "bottom",

    distance: "60px",

    duration: 1500,

    delay: 200,

    reset: false

});


sr.reveal(".featured-text", {

    origin: "left"

});

sr.reveal(".featured-image", {

    origin: "right"

});

sr.reveal(".about-info", {

    origin: "left"

});

sr.reveal(".stats-container", {

    origin: "bottom"

});

sr.reveal(".skills-box", {

    interval: 150

});

sr.reveal(".experience-card", {

    interval: 200

});

sr.reveal(".project-box", {

    interval: 200

});

sr.reveal(".contact-info", {

    origin: "left"

});

sr.reveal(".contact-form", {

    origin: "right"

});


/*=========================================
        PROJECT CARD ANIMATION
=========================================*/

const cards = document.querySelectorAll(".project-box");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

        card.style.transition = "0.3s ease";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


/*=========================================
        SKILL TAG HOVER EFFECT
=========================================*/

const skills = document.querySelectorAll(".skills-list span");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.transform = "scale(1.08)";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.transform = "scale(1)";

    });

});


/*=========================================
        SCROLL TO TOP BUTTON
=========================================*/

const scrollBtn = document.querySelector(".scroll-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show-scroll");

    }

    else {

        scrollBtn.classList.remove("show-scroll");

    }

});


/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".stat-box h2");

const speed = 100;

const animateCounters = () => {

    counters.forEach(counter => {

        const target = counter.innerText.replace("+", "").replace("%", "");

        let count = 0;

        const updateCounter = () => {

            const increment = target / speed;

            if (count < target) {

                count += increment;

                if (counter.innerText.includes("%")) {

                    counter.innerText = Math.ceil(count) + "%";

                }

                else if (counter.innerText.includes("+")) {

                    counter.innerText = Math.ceil(count) + "+";

                }

                else {

                    counter.innerText = Math.ceil(count);

                }

                requestAnimationFrame(updateCounter);

            }

            else {

                if (counter.innerText.includes("%")) {

                    counter.innerText = target + "%";

                }

                else if (counter.innerText.includes("+")) {

                    counter.innerText = target + "+";

                }

                else {

                    counter.innerText = target;

                }

            }

        };

        updateCounter();

    });

};


const statSection = document.querySelector(".stats-container");

let started = false;

window.addEventListener("scroll", () => {

    if (!started &&
        statSection &&
        window.scrollY >
        statSection.offsetTop - 500) {

        animateCounters();

        started = true;

    }

});