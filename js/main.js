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
    spaceBetween: 2,
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 1,
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
    
    spaceBetween: 2,
    slidesPerView: 1,
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


  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
    }

     error.insertAfter($(element));
  },

  errorClass: "invalid",
    // focusCleanup: true,
  rules: {
    // строчное правило
    userName: {required: true, minlength: 2, maxlength: 15},
    userPhone: {required: true, minlength: 17},
    // правило-объект
    userEmail: {
      required: true,
      email: true
    },
    policymodalCheckbox: {required: true}
  }, /* сообщения */
  errorElement: "div",
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
    },
    policymodalCheckbox: "Вы должны согласиться на обработку данных"
  }
  
 
  
 });




 
  $('.footer__form').validate({

    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
  },


   errorClass: "invalid",
     // focusCleanup: true,
   rules: {
     // строчное правило
     userName: {required: true, minlength: 2, maxlength: 15},
     userPhone: {required: true, minlength: 17},
     policyfootCheckbox: {required: true}
   }, /* сообщения */
   errorElement: "div",
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
    },
    policyfootCheckbox: "Вы должны согласиться на обработку данных"
  }
  
 
  
 });

 $('.control__form').validate({

  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
    }

     error.insertAfter($(element));
},


 errorClass: "invalid",
   // focusCleanup: true,
 rules: {
   // строчное правило
   userName: {required: true, minlength: 2, maxlength: 15},
   userPhone: {required: true, minlength: 17},
   policycontrolCheckbox: {required: true}
 }, /* сообщения */
 errorElement: "div",
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
  },
  policycontrolCheckbox: "Вы должны согласиться на обработку данных"
}



});




$('.control__form').validate({

  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
    }

     error.insertAfter($(element));
},

  errorClass: "invalid",
    // focusCleanup: true,
  rules: {
    // строчное правило
    userName: {required: true, minlength: 2, maxlength: 15},
    userPhone: {required: true, minlength: 17}
  }, /* сообщения */
  errorElement: "div",
  messages: {
    userName: {
    required: "Заполните поле",
    minlength: "Имя не короче двух букв",
    maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: {
    required: "Заполните поле",
    minlength: "Длина номера 11 цифр"},
    
   }
  
});


//  Маска для номера телефона

$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона"} );









// var player;
// $('.video__play').on('click', function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '360',
//     width: '100%',
//     videoId: 'P0paEDXIwgY',
//     events: {
//       'onReady': videoPlay,
//     }
//   });
// })

// function videoPlay(event) {
//   event.target.playVideo();
// }






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






//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [55.730138, 37.594238], // координаты центра на карте
    zoom: 7, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([55.730138, 37.594238], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-marker.png',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});