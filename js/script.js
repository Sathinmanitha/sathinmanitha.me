document.getElementById("menu-toggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    var toggleButton = document.getElementById("menu-toggle");
    menu.classList.toggle("show");
    toggleButton.classList.toggle("show");
});

const dynamicText = document.querySelector("h3 span");
const words = ["Developer", "Designer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();


document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });

    // Set initial state based on saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        darkModeToggle.checked = true;
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
});

// Reveal elements with the 'reveal' class
sr.reveal('.services-text', { delay: 300 });
sr.reveal('.service-box', { delay: 500 });
sr.reveal('.skills-text', { delay: 300 });
sr.reveal('.skills-box', { delay: 500 });
sr.reveal('.portfolio-text', { delay: 300 });
sr.reveal('.portfolio-box', { delay: 500 });
sr.reveal('.resume-text', { delay: 300 });
sr.reveal('.education-timeline', { delay: 500 });

// function spark(event){
//     let i = document.createElement('i');
//     i.style.left = (event.pageX) + 'px';
//     i.style.top = (event.pageY) + 'px';
//     i.style.transform = `scale(${Math.random() * 2 + 1})`;
//     i.style.setProperty('--x', getRandomTransitionValue());
//     i.style.setProperty('--y', getRandomTransitionValue());

//     document.body.appendChild(i);

//     setTimeout(() => {
//         document.body.removeChild(i);
//     },2000)
// }

// function getRandomTransitionValue(){
//     return `${Math.random() * 400 - 200}px`;
// }
// document.addEventListener('mousemove', spark);

