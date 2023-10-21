const header = document.querySelector("header");
function stickyNavbar(){
header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);





let searchForm = document.querySelector('#search-form');
searchForm.style.display = "none"
document.querySelector('#search-btn').onclick = () =>
{
    if (searchForm.style.display === "none") {
        searchForm.style.display = "flex";
    } else {
        searchForm.style.display = "none";
    }
}
/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})


/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});

let sideCart = document.querySelector('#sidecart');
sideCart.style.display = "none"
document.querySelector('#cart-btn').onclick = () =>
{
    if (sideCart.style.display === "none") {
        sideCart.style.display = "block";
    } else {
        sideCart.style.display = "none";
    }
}

const cart = document.getElementById('#sidecart')
const closeBtn = document.getElementById('close_btn')

closeBtn.addEventListener('click', closeCart)

function closeCart() {
    sideCart.style.display ="none";
}

