// Typing -> Deleting Animation
const dynamicText = document.querySelector(".hero-section .animated-typing span");
const words = ["Love", "Like Art", "the Future", "Everything"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false; 

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length) {
        // if true, type next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // if true, remove previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // if word is deleted, switch to next word
        isDeleting = !isDeleting;

        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
          } else {
            wordIndex = wordIndex;
          }
          
        dynamicText.classList.remove("stop-blinking");
        setTimeout(typeEffect, 1200);
    }
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

const hiddenElements = document.querySelectorAll(".hero-section, .skills-section, .testimony-section");
hiddenElements.forEach((el) => observer.observe(el));

typeEffect();
