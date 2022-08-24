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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
 * 
*/
const sections = Array.from(document.querySelectorAll('section'))
const menu = document.getElementById('navbar__list')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var lastScrollTop;
navbar = document.getElementById('navbar__list');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-80px';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});

//Collapse the Sections
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// The function that build the nav bar of the webSite 
function createListItem(){
    for(section of sections){
        secName = section.getAttribute('data-nav');
        secLink = section.getAttribute('id')

        listItem = document.createElement('li');
        listItem.innerHTML=`<a class = "menu__link" href = "#${secLink}">${secName}</a>`

        menu.appendChild(listItem)
    }
}


// Add class 'active' to section when near top of viewport

//The Method to get the position of the section 
function getViewPort(elem){
    let sectionPos = elem.getBoundingClientRect()
    return(sectionPos.y);
}

//Check if the section has active class style or not
function checkActive(){
    for(section of sections){
        if(getViewPort(section) >= 0){
            if(!section.classList.contains("your-active-class")){
                section.classList.add("your-active-class")} 
        }else{
            section.classList.remove("your-active-class")
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(){
    document.addEventListener('scroll',checkActive)
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createListItem();


// Scroll to section on link click
scrollToSection()

// Set sections as active
checkActive()


