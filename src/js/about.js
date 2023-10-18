
$(document).ready(function() {
    var windowHeight = $(window).height();
    var halfHeight = windowHeight / 2; // Calculate half of the window height

    $(window).on('scroll', function() {
        var scroll = $(this).scrollTop();
        
        if (scroll > halfHeight) {
            $('.fixed .navbar-brand').fadeIn(); // Show .navbar-brand when scrolling past half the page
        } else {
            $('.fixed .navbar-brand').fadeOut(); // Hide .navbar-brand when scrolling back to the first half of the page
        }
    });
});

// Add click event listener to the next button
nextButton.addEventListener('click', function() {
    // Get the active carousel item
    const activeItem = document.querySelector('.carousel-item.active');

    // Get the next sibling of the active item, or the first item if there is no next sibling
    const nextItem = activeItem.nextElementSibling || carousel.querySelector('.carousel-item:first-child');

    // Remove 'active' class from the current active item
    activeItem.classList.remove('active');

    // Add 'active' class to the next item
    nextItem.classList.add('active');
});

// Add click event listener to the previous button
prevButton.addEventListener('click', function() {
    // Get the active carousel item
    const activeItem = document.querySelector('.carousel-item.active');

    // Get the previous sibling of the active item, or the last item if there is no previous sibling
    const prevItem = activeItem.previousElementSibling || carousel.querySelector('.carousel-item:last-child');

    // Remove 'active' class from the current active item
    activeItem.classList.remove('active');

    // Add 'active' class to the previous item
    prevItem.classList.add('active');
});

// Get the carousel element and the next button
const carousel = document.getElementById('carouselExampleControlsNoTouching');
const nextButton = document.querySelector('.carousel-control-next');

// Function to simulate a click on the next button
function clickNextButton() {
    const event = new Event('click');
    nextButton.dispatchEvent(event);
}

// Set an interval to simulate a click on the next button every 3000 milliseconds (3 seconds)
const interval = setInterval(clickNextButton, 3000);

// Optionally, you can stop the automatic sliding when the user interacts with the carousel
carousel.addEventListener('mouseenter', () => {
    clearInterval(interval); // Stop automatic sliding when the mouse enters the carousel
});

carousel.addEventListener('mouseleave', () => {
    // Resume automatic sliding when the mouse leaves the carousel
    interval = setInterval(clickNextButton, 3000);
});

const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})




let menu_btn = document.querySelector(" .menu-btn");
let menu_dropdown = document.querySelector(".dropdown");

menu_btn.addEventListener("click", function(){
    menu_dropdown.classList.toggle("active");
});




let home_btn = document.querySelector(".home-btn");
let dropdown_home_ul = document.querySelector(" .dropdown-home-ul");
let dropdown_home_li = document.querySelectorAll(".dropdown-home-li");

home_btn.addEventListener("mouseover", function(){
    dropdown_home_ul.classList.add("active");
    
});


home_btn.addEventListener("mouseout", function(){
    dropdown_home_ul.classList.remove("active");

});

let shop_btn = document.querySelector(".shop-btn");
let dropdown_shop = document.querySelector(" .dropdown-shop");

shop_btn.addEventListener("mouseover", function(){
    dropdown_shop.classList.add("active");
    
});

shop_btn.addEventListener("mouseout", function(){
    dropdown_shop.classList.remove("active");

});

let elements_btn = document.querySelector(".elements-btn");
let dropdown_elements = document.querySelector(" .dropdown-elements");

elements_btn.addEventListener("mouseover", function(){
    dropdown_elements.classList.add("active");
    
});

elements_btn.addEventListener("mouseout", function(){
    dropdown_elements.classList.remove("active");

});

let pages_btn = document.querySelector(".pages-btn");
let dropdown_pages = document.querySelector(" .dropdown-pages");

pages_btn.addEventListener("mouseover", function(){
    dropdown_pages.classList.add("active");
    
});

pages_btn.addEventListener("mouseout", function(){
    dropdown_pages.classList.remove("active");

});


$(document).ready(function() {
    var windowHeight = $(window).height();
    var halfHeight = windowHeight / 2; // Calculate half of the window height

    $(window).on('scroll', function() {
        var scroll = $(this).scrollTop();
        
        if (scroll > halfHeight) {
            $('.fixed .navbar-brand').fadeIn(); // Show .navbar-brand when scrolling past half the page
        } else {
            $('.fixed .navbar-brand').fadeOut(); // Hide .navbar-brand when scrolling back to the first half of the page
        }
    });
});

