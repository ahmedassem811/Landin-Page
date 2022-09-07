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
let lastScrollTop;
navbar = document.getElementById('navbar__list');
window.addEventListener('scroll',function(){
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
  navbar.style.top='-80px';
}
else{
  navbar.style.top='0';
}
  lastScrollTop = scrollTop;
});

//Collapse button of the Sections
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
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
      listItem.innerHTML=`<a class = "menu__link" href ="#${itemLink}">${itemName}</a>`
      // The buttons created and the navbar as parent 
      menu.appendChild(listItem)
      //Add Event listnet for each link created when click on it scroll to relted section smoothly 
      listItem.addEventListener('click', function (e){
        e.preventDefault();
        item.scrollIntoView({
          behavior: "smooth"
        })
      })
    })
}

//The Method to get the position of the section and acctive class styles to it 
function addactiveStyle (){
  items.forEach((item) =>{  
    let sectionTopPosition = item.getBoundingClientRect().top
      if(sectionTopPosition >= 0 && sectionTopPosition < 375 ){
        item.classList.add("your-active-class")
      }else{
        item.classList.remove("your-active-class")
      }
    })
}



// Add eventlistner to scroll event to apply styles 
function addstyle(){
    document.addEventListener('scroll',
    addactiveStyle)
}

$(document).ready(function() {
  $("#navbar__list > li > a").click(function(){
      $("#navbar__list > li > a").each(function(){
          $(this).removeClass("highlighted");
      });
      $(this).addClass('highlighted');
  });
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createListItem();


// Scroll to section on link click

// Set sections as active
addstyle()


