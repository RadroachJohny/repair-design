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
      closeBtn = $('.modal__close'),
      erro = $('.invalid');

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

  new WOW().init();


 // Валидация формы



 $('.modal__form').validate({
  errorClass: "invalid",
  // focusCleanup: true,
  rules: {
    // строчное правило
    userName: {required: true, minlength: 2, maxlength: 15},
    userPhone: {required: true, minlength: 11},
    // правило-объект
    userEmail: {
      required: true,
      email: true
    }
  }, /* сообщения */
  errorElement: "em",
  messages: {
    userName: {
    required: "Заполните поле",
    minlength: "Имя не короче двух букв",
    maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: {
    required: "Заполните поле",
    minlength: "Длина номера 11 цифр"},
    userEmail: {
      required: "Обязательно укажите email",
      email: "Введите корректный email"
    }
  }
  
  
 });

 
//  userPhone: "required",


//  Маска для номера телефона

$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"} );





});





var $window = $(window);
var $elem = $(".control__text");

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animate");
    }
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


  var validator = $( ".modal__form" ).close();
  validator.resetForm();




  
// $(document).ready(function () {
//   var modal = $('.modal'),
//       modalBtn = $('[data-toggle=modal]'),
//       closeBtn = $('.modal__close');

//   modalBtn.on('click', function () {
//     modal.toggleClass('modal--visible');
//   });
//   closeBtn.on('click', function () {
//     modal.toggleClass('modal--visible');
//   });

//    jQuery(document).keyup(function(ev){
//     if (ev.keyCode == 27) {
//       modal.removeClass('modal--visible');
//     }
    
//   });

  
//   $('.modal').click(function (e) {
//     modal.removeClass('modal--visible');
//     });
//   $(".modal__dialog").click(function(e){
//     e.stopPropagation();

  
//   });