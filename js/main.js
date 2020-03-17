// document.addEventListener('DOMContentLoaded', function(event) { 
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   };
  
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal);

//     document.addEventListener('keydown', function (event) {
//       if (event.key === 'Escape') {
//         modal.classList.remove('modal--visible');
//       }
//     });

//     document.onclick = function(event) {
//       if (event.target == modal) {
//         modal.classList.toggle('modal--visible');
//       }
//     };
// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

   jQuery(document).keyup(function(ev){
    if (ev.keyCode == 27) {
      modal.removeClass('modal--visible');
    }
  });

  
  $('.modal').click(function (e) {
    modal.removeClass('modal--visible');
 });
  $(".modal__dialog").click(function(e){
    e.stopPropagation();
  });

  


  var mySwiper = new Swiper ('.s1', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  
  bullets.css('left', prev.width() + 20 );
  next.css('left', prev.width() + 20 + bullets.width() + 20 );
 

  var yourSwiper = new Swiper ('.s2', {
   
    loop: true,
    pagination: {
      el: '.sp',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.bn',
      prevEl: '.bp',
    }, 
  });

  var bn = $('.bn');
  var bp = $('.bp');
  var sp = $('.sp');

  
  bullets.css('left', bp.width() + 20 );
  bn.css('left', bp.width() + 20 + sp.width() + 20 );

  
  
//   var counter = $('.swiper-counter');
//   var currentCount = $('<span class="count">1<span/>');
//     counter.append(currentCount);

// function photos_change(swiper) {
//   var index = swiper.activeIndex + 1,
//       $current = $(".photos-slide").eq(index),
//       dur = 0.8;

//   var prevCount = $('.count');
//   currentCount = $('<span class="count next">' + index + '<span/>');
//   currentCount.appendTo(counter);
//   TweenLite.to(prevCount, dur, {
//     y: -12,
//     opacity: 0,
//     onCompleteParams: [prevCount],
//     onComplete: function (prevCount) {
//       prevCount.remove();
//     },
//     ease: Power2.easeOut
//   });
//   TweenLite.fromTo(currentCount, dur, {
//     y: 12,
//     opacity: 0
//   }, {
//     y: 0,
//     opacity: 1,
//     ease: Power2.easeOut
//   });
// }



  
});






jQuery(document).ready(function() {
var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 800);
    });
  });


