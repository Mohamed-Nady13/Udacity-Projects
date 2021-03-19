/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

const sections = document.querySelectorAll('section');

const frag = document.createDocumentFragment();

sections.forEach(element => {
    const newLi = document.createElement(`li`);

    const anchor = document.createElement('a');
    anchor.innerHTML = element.getAttribute("data-nav");
    anchor.setAttribute("href", "#" + element.id);
    anchor.className = "menu__link";

    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToElement(element.id);
    });

    newLi.appendChild(anchor);
    frag.appendChild(newLi);
    // myNav.appendChild(newLi);
});

const myNav = document.querySelector("#navbar__list");
myNav.appendChild(frag);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToElement(elementId) {
    const element = document.querySelector("#" + elementId);
    element.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active