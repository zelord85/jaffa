document.addEventListener("DOMContentLoaded", function(event) { 

  var introSwiper = new Swiper('#intro-carousel .swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    // effect: 'fade',
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });

  var swiper = new Swiper('#smuzi-slider .swiper-container', {
    slidesPerView: 1,
    speed: 1000,
    pagination: {
      el: '.pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'bullet',
      bulletActiveClass: 'active',
    },
  });

  var filterName = {
    1: 'зарядись',
    2: 'освіжись',
    3: 'носолодись',
    4: 'оздоровись',
  } 

  var swiper = new Swiper('#slider-filter .swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 1000,
    spaceBetween: 0,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    pagination: {
      el: '.filter-buttons',
      bulletClass: 'filter-item',
      bulletActiveClass: 'active',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="filter-item slide-' + (index + 1) + '">' + filterName[index + 1] + '</div>';
      },
    },
  });

  var introSwiper = new Swiper('#slider-news .swiper-container', {
    // slidesPerView: 'auto',
    slidesPerView: 3,
    slidesOffsetBefore: 230, // 160 px
    speed: 1000,
    spaceBetween: 0,
    grabCursor: true,
    navigation: {
      nextEl: '.button-next',
      // prevEl: '.button-prev',
    },
    breakpoints: {
      1024: {
        slidesOffsetBefore: 90,
      },
      1280: {
        slidesOffsetBefore: 112,
      },
      1366: {
        slidesOffsetBefore: 117,
      },
      1440: {
        slidesOffsetBefore: 126,
      },
      1680: {
        slidesOffsetBefore: 147,
      }
    },
  });

  if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  function preloader(elementId) {
    var element = document.getElementById(elementId);
    element.classList.add('animated');
    element.classList.add('fadeOut');
    element.classList.remove('visible');
    // element.remove(element);
  }

  function loader(elementId) {
    var element = document.getElementById(elementId);
    element.remove(element);
  }

  setTimeout(loader, 2000, 'loader');
  setTimeout(preloader, 2500, 'preloader');

});
