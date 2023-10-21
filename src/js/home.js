let productprice=document.getElementById("prod-price")
let prodcount=document.getElementById("prod-all-count")
let basket=JSON.parse(localStorage.getItem("basket"))

if(localStorage.getItem("basket")===null){
    localStorage.setItem("basket", JSON.stringify([]))
productprice.textContent="0";
prodcount.textContent="0";
}else{
    let price=0;
    basket.forEach(item=>{
        price+=item.price*item.count
        
    })
    productprice.innerText=price.toFixed(2)
}


fetch("db.json")
.then(res => res.json())
.then(data => {
    let html=" ";
    data.products.forEach(product => {
    html +=`
    <div class="col-lg-3 custom-box">
       <div class="custom-card">
       ${product.isNew ? "<span></span>" : ""}
        <div class="img-div">
          <img src="${product.image}" alt="">
        </div>
        <div class="content">
          <h3 class="title">${product.name}</h3>
          <h2 class="price"><span>$</span>${product.price}</h2>
        </div>
        <div class="addbasket-btn-div">
          <button data-price=${product.price} data-id="${product.id}" class="addbasket">Add To Basket</button>
        </div>
       </div>
      </div>
    `
    
    })
    document.querySelector("#Products .container .row").innerHTML = html;
    let addBasketBtns=document.querySelectorAll(".addbasket");
    addBasketBtns.forEach(btn=>{
    btn.addEventListener("click", function(e){
        if(localStorage.getItem("basket")===null){
            localStorage.setItem("basket", JSON.stringify([]))
        
        }
        let basket = JSON.parse(localStorage.getItem("basket"))
         let data_id=e.target.getAttribute("data-id")
         let data_price=e.target.getAttribute("data-price")
         let exsist=basket.find(p=>p.id==data_id)
    if(exsist){
        exsist.count++
    }
    else{
        basket.push({
            id: data_id,
            count:1,
            price:data_price
        })
    }
    let price=0;
    basket.forEach(item=>{
        price+=item.price*item.count
        
    })
    productprice.innerText=price.toFixed(2)
    // prodcount.innerText=basket.length

    localStorage.setItem("basket", JSON.stringify(basket))
    })
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


let search_btn = document.querySelector(".search-btn");
let search_dropdown = document.querySelector(".search-dropdown");

search_btn.addEventListener("click", function(){
    search_dropdown.classList.toggle("active");
});


let card_btn = document.querySelector(".card-btn");
let card_dropdown = document.querySelector(".card-add");

card_btn.addEventListener("click", function(){
    card_dropdown.classList.toggle("active");
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


// Get the carousel element by its ID
let carousel = document.getElementById("carouselExampleCaptions");

// Define the slide index
let slideIndex = 0;

// Function to show the next slide
function showNextSlide() {
    // Increment the slide index
    slideIndex++;

    // If the slide index exceeds the total number of slides, reset it to 0
    if (slideIndex >= carousel.querySelectorAll(".carousel-item").length) {
        slideIndex = 0;
    }

    // Show the slide at the updated index
    carousel.querySelector(".carousel-item.active").classList.remove("active");
    carousel.querySelectorAll(".carousel-item")[slideIndex].classList.add("active");
}

// Interval function to automatically show next slide every 3 seconds (adjust the interval time as needed)
setInterval(showNextSlide, 3000);


// Add an event listener for the slide event
carousel.addEventListener('slide.bs.carousel', function (event) {
    // Get the index of the current slide
    let slideIndex = event.to;

    // Hide all images initially
    img1.style.display = 'none';
    img2.style.display = 'none';
    img2_2.style.display = 'none';
    img3.style.display = 'none';

    // Show the corresponding image based on the slide index
    if (slideIndex === 0) {
        img1.style.display = 'block';
    } else if (slideIndex === 1) {
        img2.style.display = 'block';
        img2_2.style.display = 'block';
    } else if (slideIndex === 2) {
        img3.style.display = 'block';
    }
});

// Add an event listener for the slid event to show the initial slide content
carousel.addEventListener('slid.bs.carousel', function (event) {
    // Get the index of the current slide
    let slideIndex = event.to;

    // Show the corresponding image based on the initial slide index
    if (slideIndex === 0) {
        img1.style.display = 'block';
    } else if (slideIndex === 1) {
        img2.style.display = 'block';
        img2_2.style.display = 'block';
    } else if (slideIndex === 2) {
        img3.style.display = 'block';
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.close-button');
    const dropdown = document.querySelector('.dropdown');

    closeButton.addEventListener('click', function() {
        dropdown.classList.remove('active');
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const loginToggleBtn = document.getElementById('login-toggle');
    const registerToggleBtn = document.getElementById('register-toggle');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    // Function to show login form and hide register form
    function showLoginForm() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }

    // Function to show register form and hide login form
    function showRegisterForm() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }

    // Event listener for login toggle button click
    loginToggleBtn.addEventListener('click', function() {
        showLoginForm();
    });

    // Event listener for register toggle button click
    registerToggleBtn.addEventListener('click', function() {
        showRegisterForm();
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    const loginDropdown = document.querySelector('.login-dropdown');

    // Function to open the login dropdown
    function openDropdown() {
        loginDropdown.style.display = 'block';
    }

    // Function to close the login dropdown
    function closeDropdown() {
        loginDropdown.style.display = 'none';
    }

    // Open the dropdown when loginBtn is clicked
    loginBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from reaching the document

        // Toggle the dropdown visibility
        if (loginDropdown.style.display === 'none' || loginDropdown.style.display === '') {
            openDropdown();
        } else {
            closeDropdown();
        }
    });

    // Close the dropdown when clicking outside the dropdown
    document.addEventListener('click', function(event) {
        if (!loginDropdown.contains(event.target) && loginDropdown.style.display === 'block') {
            closeDropdown();
        }
    });

    // Prevent click events inside the dropdown from closing it
    loginDropdown.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

