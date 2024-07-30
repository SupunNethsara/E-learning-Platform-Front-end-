document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }
  
  document.querySelector('#cart-close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
  }

  document.querySelector('#loginbtn').onclick = () =>{
    document.querySelector('#loginform').classList.toggle('active');
  }
  
  document.querySelector('#cart-closing').onclick = () =>{
    document.querySelector('#loginform').classList.remove('active');
  }
  
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  ScrollReveal({ reset: true });
  ScrollReveal().reveal('.about', { delay: 300 });
  ScrollReveal().reveal('.grid-list .one', { delay: 100 });
  ScrollReveal().reveal('.card', { delay: 200 });
  ScrollReveal().reveal('.corces', { delay: 100 });
  ScrollReveal().reveal('.lectures .one', { delay: 100 });
