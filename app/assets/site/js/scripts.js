function smooth_anchor_scroll() {
  /*const header = document.querySelector('header');
  if((window.location.hash && window.location.pathname != "/privacy-policy/") && (window.location.hash && window.location.pathname != "/privacy-policy.html")) {
    let offset; 
    let target = document.querySelector(`${window.location.hash}`);
    offset = target.offsetTop - header.clientHeight - 30;
    window.scrollTo({
      top: offset,
      behavior: 'instant'
    });
  } */
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetLink = this.getAttribute('href');
      if (document.getElementById(targetLink.match(/#(.*)/)[1])) {
        e.preventDefault();
        const target = document.querySelector(`#${targetLink.substring(targetLink.indexOf('#') + 1)}`);
        let offset;  
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      } else {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      // Проверяем, существует ли элемент с указанным ID
    });
  });
}

function header_toggle() {
  document.querySelectorAll('.menu-toggle').forEach(el => el.addEventListener('click', function(){
    document.querySelector('.header').classList.toggle('active');
    document.querySelector('body').classList.toggle('overflow-hidden');
    document.documentElement.classList.toggle('overflow-hidden');
  }));
}

function category_preview() {
  const containers = document.querySelectorAll('.category-preview');
  containers.forEach(container => {
    const cards = container.querySelectorAll('.product-card');
    const show_more = container.querySelector('.show-more');
    cards.forEach((card, i) => {
      if(i >= 8) {
        card.classList.add('d-none');
      }
    });
    show_more.addEventListener('click', function(){
        container.querySelectorAll('.d-none').forEach((hidden_element, k, arr) => {
          if(k >= 0 && k < 8) {
            hidden_element.classList.remove('d-none');
            return;
          }
        })
        if(!container.querySelectorAll('.d-none').length) {
          show_more.classList.add('d-none');
        }
    })
  })
}

function preloader() {
  document.querySelector('.preloader').classList.add('hide');
  document.documentElement.classList.remove('overflow-hidden');
  document.querySelector('body').classList.remove('overflow-hidden');
}


window.onload = function () {
  smooth_anchor_scroll();
  header_toggle();
  preloader();
  category_preview();


  new Accordion('.faq .accordion-container');
  new Accordion('.about .accordion-container', {
    onOpen: function() {

    },
    onClose: function() {

    },
  });
}

window.onscroll = function(e) {

}

window.onresize = function(e) {

}





var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});