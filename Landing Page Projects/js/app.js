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

//global nav variable
const navigation = document.getElementById('navbar__list');

//global sections variable
const sections = document.querySelectorAll('section'); 


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

const nav = () => {
    let navUI = '';

    //looping over all sections
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;


        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`
    });

    //appends all elements to the nav
    navigation.innerHTML = navUI;
}


nav();
// Add class 'active' to section when near top of viewport

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

//removes the class active

const removeActive = (section) => {
    section.classList.remove('your-active-class');
}

//adds the class active
const addActive = (condition, section) => {
    if(condition){
        section.classList.add('your-active-class');
    };
    
};


const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);
         const inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(), section);
    });
};

window.addEventListener('scroll', sectionActivation);

// Scroll to anchor ID using scrollTO event
const scroll = () => {
    const links = document.querySelectorAll('.navbar_menu a');
    links.forEach(link => {
        link.addEventListener('clikk', () => {
            for(i = 0; i < sections; i++){
                sections[i].addEventListener('click', sectionScroll(link));
            }
        })
    })
};



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active