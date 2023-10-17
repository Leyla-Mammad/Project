let productprice=document.getAnimations("prod-price")
let prodcount=document.getElementById("prod-all-count")

if(localStorage.getItem("basket")===null){
    localStorage.setItem("basket", JSON.stringify([]))
productprice.textContent="0";
prodcount.textContent="0";
}else{
    let basket=JSON.parse(localStorage.getItem("basket"))
    
}

fetch("db.json")
.then(res => res.json())
.then(data => {
    let html=" ";
    data.products.forEach(product => {
    html +=`
    <div class="col-lg-3 custom-box">
       <div class="custom-card">
        <div class="img-div">
          <img src="${product.image}" alt="">
        </div>
        <div class="content">
          <h3 class="title">${product.name}"></h3>
          <h2 class="price">${product.price}"></h2>
        </div>
        <div class="addbasket-btn-div">
          <button data-price=${product.price} data-id="${product.id}" class="addbasket">Add To Basket</button>
        </div>
       </div>
      </div>
    `
    
    })
    document.querySelector("#Products .container .row").innerHTML = html;
    let addBasketBtns=document.querySelectorAll("addbasket");
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
    productprice.innetText=price.toFixed(2)
    prodcount.innerText=basket.length

    localStorage.setItem("basket", JSON.stringify(basket))
    })
    })
})



let menu_btn = document.querySelector(".header-title .menu-btn");
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
let search_input = document.querySelector(".search-input");

search_btn.addEventListener("click", function(){
    search_input.classList.toggle("active");
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




const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  // do something...
})