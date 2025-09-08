// Reusable Typing -> Deleting Animation
const TYPE_MS = 100;
const DELETE_MS = 50;
const PAUSE_MS = 1000;

function startTypeDelete(el, words) {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false; 
    function typeEffect() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        el.textContent = currentChar;
        el.classList.add("stop-blinking");
    
        if(!isDeleting && charIndex < currentWord.length) {
            // if true, type next character
            charIndex++;
            setTimeout(typeEffect, TYPE_MS);
        } else if (isDeleting && charIndex > 0) {
            // if true, remove previous character
            charIndex--;
            setTimeout(typeEffect, DELETE_MS);
        } else {
            // if word is deleted, switch to next word
            isDeleting = !isDeleting;
    
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
              } else {
                wordIndex = wordIndex;
              }
              
            el.classList.remove("stop-blinking");
            setTimeout(typeEffect, PAUSE_MS);
        }
    }
    typeEffect();
}


function initTyping(selector, words) {
    let els = [];
    if (typeof target === 'string') els = document.querySelectorAll(target);
    else if (target instanceof Element) els = [target];
    else if (target && typeof target.length === 'number') els = Array.from(target);
    els.forEach(el => startTypeDelete(el, words));
}

// Ensures form resets after success submission page
window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hero-section, .skills-section, .experience-section, .testimony-section");
hiddenElements.forEach((el) => observer.observe(el));

const dynamicText1 = document.querySelector(".hero-section .animated-typing span");
const dynamicText2 = document.querySelector(".experience-section .cells .certification-cell .certification:nth-child(2) span");
const dynamicText3 = document.querySelector(".experience-section .cells .certification-cell .certification:nth-child(3) span");
const words1 = ["Love", "Like Art", "the Future", "Everything"];
const words2 = ["Inbound Certified", "Content Marketing Certified", "Email Marketing Certified"];
const words3 = ["Get Started using Google Analytics (GA4)", "Manage GA4 Data and Learn to Read Reports"];
startTypeDelete(dynamicText1, words1);
startTypeDelete(dynamicText2, words2);
startTypeDelete(dynamicText3, words3);
