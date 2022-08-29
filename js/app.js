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
const items = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
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
    items.forEach(item => {
      // Function to get the data for the navigation buttons 
      itemName = item.getAttribute('data-nav');
      itemLink = item.getAttribute('id')
      // Creating navigation button method 
      listItem = document.createElement('li');
      listItem.innerHTML=`<a class = "menu__link" href = "#${itemLink}">${itemName}</a>`
      // The buttons created under navbar
      menu.appendChild(listItem)
    })
}

//The Method to get the position of the section 
function checkActive (){
  items.forEach((item) =>{  
    let sectionTopPosition = item.getBoundingClientRect().top
      if(sectionTopPosition >= 0 && sectionTopPosition < 375 ){
        item.classList.add("your-active-class")
      }else{
        item.classList.remove("your-active-class")
      }
    })
}



// Scroll to anchor ID using scrollTO event
function smoothScroll(){
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
smoothScroll()

// Set sections as active
checkActive()


