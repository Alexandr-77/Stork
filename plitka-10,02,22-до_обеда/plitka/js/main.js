let burgerBlock = document.querySelector('.header__burger');
let burger = document.querySelector('.burger');

let nav = document.querySelector('.header__block-nav');



burgerBlock.addEventListener('click', miFunction);

function miFunction() {
  burger.classList.toggle('burger-active');
  
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}


// =====================================
$('.main__slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

// =====================
if (document.querySelector('.story__block')) {
$('.story__block').slick({
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 6,
   slidesToScroll: 2,
   responsive: [
     {
       breakpoint: 1380,
       settings: {
         slidesToShow: 5,
         slidesToScroll: 2,
         infinite: true,
         dots: false
       }
     },
     {
       breakpoint: 1100,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 850,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 650,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }

   ]
 });
}

