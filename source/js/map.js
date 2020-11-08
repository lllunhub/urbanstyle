"use strict";
// Получаем нужный элемент
let element = document.querySelector('#map');

let Visible = function (target) {
  // Все позиции элемента
  let targetPosition = {
    top: window.pageYOffset + target.getBoundingClientRect().top,
    left: window.pageXOffset + target.getBoundingClientRect().left,
    right: window.pageXOffset + target.getBoundingClientRect().right,
    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
  },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top &&
    // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom &&
    // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left &&
    // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right
  ) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    console.clear();
    console.log('Вы видите элемент :)');
    ymaps.ready((function () {
      var e = new ymaps.Map("map", {
        center: [58.616074, 49.68386 - 0.00150],
        zoom: 16.5
      }),
        a = new ymaps.Placemark([58.616074, 49.68386], {
          hintContent: "URBAN STYLE"
        }, {
          iconLayout: "default#image",
          // iconImageHref: $('#path').val() + '/assets/img/map-pin.svg',
          iconImageSize: [48, 48],
          iconImageOffset: [-24, -24],
          iconContentOffset: [15, 15]
        });
      e.geoObjects.add(a), e.behaviors.disable("scrollZoom"),
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && e.behaviors
          .disable(
            "drag")
    }));
  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear();
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
  if (element.children.length < 1) {
    Visible(element)
  }
});
//# sourceMappingURL=map.min.js.map
