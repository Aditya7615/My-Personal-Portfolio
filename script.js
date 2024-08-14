let bars = document.querySelector('.bars .ri-menu-line');
let menu = document.querySelector('.menu');

bars.addEventListener('click', ()=>{
    menu.classList.toggle('Show_menu');
});

let mode = document.querySelector('.mode');

mode.addEventListener('click' ,() =>{
    document.body.classList.toggle('light_mode');
})


// Testimonial swiper

var swiper = new Swiper('.MySwiper' , {
    slidesPerView: 3,
    spaceBetween:10,
    loop:true,
    autoplay: true,
    breakpoints:{
        1300:{
            slidesPerView:3,
        },
        900:{
            slidesPerView:2,
        },
        0:{
            slidesPerView:1,
        },
    }
});