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
       <h6 class="new">${product.isNew ? "<span>New</span>" : ""}</h6>
        <div class="img-div">
          <img src="${product.image}" alt="">
        </div>
        <div class="quick"><a class="quick-btn" href="#">QUICK LOOK</a><i class="fa-solid fa-heart"></i></div>
        <div class="content">
          <h3 class="title">${product.name}</h3>
          <h2 class="price"><span>$</span>${product.price}</h2>
        </div>
        <div class="addbasket-btn-div">
          <button data-price=${product.price} data-id="${product.id}" class="addbasket">Add To Cart</button>
        </div>
       </div>
      </div>
      <div class="quick-dropdown">
<div class="container">
  <div class="row">
    <div class="col-lg-6">
      <img src="${product.image}" alt="">
    </div>
    <div class="col-lg-6">
      <div class="content">
        <h3 class="title">${product.name}</h3>
        <h2 class="price"><span>$</span>${product.price}</h2>
      </div>
      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.      </p>
      
    </div>
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

    localStorage.setItem("basket", JSON.stringify(basket))
    })
    })
})






let menu_btn = document.querySelector(" .menu-btn");
let menu_dropdown = document.querySelector(".dropdown");

menu_btn.addEventListener("click", function(event) {
    event.stopPropagation(); 
    menu_dropdown.classList.toggle("active");
});

document.body.addEventListener("click", function(event) {
    if (!menu_btn.contains(event.target) && !menu_dropdown.contains(event.target)) {
        menu_dropdown.classList.remove("active");
    }
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

search_btn.addEventListener("click", function(event) {
    event.stopPropagation(); 
    search_dropdown.classList.toggle("active");
});

document.body.addEventListener("click", function(event) {
    if (!search_btn.contains(event.target) && !search_dropdown.contains(event.target)) {
        search_dropdown.classList.remove("active");
    }
});







let card_btn = document.querySelector(".card-btn");
let card_dropdown = document.querySelector(".card-add");

card_btn.addEventListener("click", function(event) {
    event.stopPropagation(); 
    card_dropdown.classList.toggle("active");
});

document.body.addEventListener("click", function(event) {
    if (!card_btn.contains(event.target) && !card_dropdown.contains(event.target)) {
        card_dropdown.classList.remove("active");
    }
});


let filter = document.querySelector(".filter");
let filter_dropdown = document.querySelector(" .filter-dropdown");


filter.addEventListener("mouseover", function(){
    filter_dropdown.classList.add("active");
    
});
filter.addEventListener("mouseout", function(){
    filter_dropdown.classList.remove("active");

});





$(document).ready(function() {
    var windowHeight = $(window).height();
    var halfHeight = windowHeight / 2; 

    $(window).on('scroll', function() {
        var scroll = $(this).scrollTop();
        
        if (scroll > halfHeight) {
            $('.fixed .navbar-brand').fadeIn(); 
        } else {
            $('.fixed .navbar-brand').fadeOut(); 
        }
    });
});


let carousel = document.getElementById("carouselExampleCaptions");

let slideIndex = 0;

function showNextSlide() {
    slideIndex++;

    if (slideIndex >= carousel.querySelectorAll(".carousel-item").length) {
        slideIndex = 0;
    }

    carousel.querySelector(".carousel-item.active").classList.remove("active");
    carousel.querySelectorAll(".carousel-item")[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 3000);


carousel.addEventListener('slide.bs.carousel', function (event) {
    let slideIndex = event.to;

    img1.style.display = 'none';
    img2.style.display = 'none';
    img2_2.style.display = 'none';
    img3.style.display = 'none';

    if (slideIndex === 0) {
        img1.style.display = 'block';
    } else if (slideIndex === 1) {
        img2.style.display = 'block';
        img2_2.style.display = 'block';
    } else if (slideIndex === 2) {
        img3.style.display = 'block';
    }
});

carousel.addEventListener('slid.bs.carousel', function (event) {
    let slideIndex = event.to;

    if (slideIndex === 0) {
        img1.style.display = 'block';
    } else if (slideIndex === 1) {
        img2.style.display = 'block';
        img2_2.style.display = 'block';
    } else if (slideIndex === 2) {
        img3.style.display = 'block';
    }
});


let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");

let carousels = document.getElementById("carouselExampleCaptions");

line1.addEventListener('click', function() {
    carousels.querySelector(".carousel-item.active").classList.remove("active");
    carousels.querySelectorAll(".carousel-item")[0].classList.add("active");
});

line2.addEventListener('click', function() {
    carousels.querySelector(".carousel-item.active").classList.remove("active");
    carousels.querySelectorAll(".carousel-item")[1].classList.add("active");
});

line3.addEventListener('click', function() {
    carousels.querySelector(".carousel-item.active").classList.remove("active");
    carousels.querySelectorAll(".carousel-item")[2].classList.add("active");
});



document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.querySelector('.close-button');
    const dropdown = document.querySelector('.dropdown');

    closeButton.addEventListener('click', function() {
        dropdown.classList.remove('active');
    });
});





let login_btn = document.querySelector(" .login-btn");
let login_dropdown = document.querySelector(".login-dropdown");


login_btn.addEventListener("click", function(){
    login_dropdown.classList.toggle("active");
});
document.addEventListener('DOMContentLoaded', function() {
    const loginToggleBtn = document.getElementById('login-toggle');
    const registerToggleBtn = document.getElementById('register-toggle');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    function showLoginForm() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }

    function showRegisterForm() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }

    loginToggleBtn.addEventListener('click', function() {
        showLoginForm();
    });

    registerToggleBtn.addEventListener('click', function() {
        showRegisterForm();
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    const loginDropdown = document.querySelector('.login-dropdown');

    function openDropdown() {
        loginDropdown.style.display = 'block';
    }

    function closeDropdown() {
        loginDropdown.style.display = 'none';
    }

    loginBtn.addEventListener('click', function(event) {
        event.stopPropagation();

        if (loginDropdown.style.display === 'none' || loginDropdown.style.display === '') {
            openDropdown();
        } else {
            closeDropdown();
        }
    });

    document.addEventListener('click', function(event) {
        if (!loginDropdown.contains(event.target) && loginDropdown.style.display === 'block') {
            closeDropdown();
        }
    });

    loginDropdown.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const quickBtns = document.querySelectorAll('.quick-btn');

    quickBtns.forEach(quickBtn => {
        quickBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = e.target.dataset.id; 
            const quickDropdown = document.getElementById(`quick-dropdown-${productId}`);
            if (quickDropdown.style.display === 'block') {
                quickDropdown.style.display = 'none';
            } else {
                document.querySelectorAll('.quick-dropdown').forEach(dropdown => {
                    dropdown.style.display = 'none';
                });
                quickDropdown.style.display = 'block';
            }
        });
    });
});