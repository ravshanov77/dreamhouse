function checkVisibility() {
  const elements = document.querySelectorAll(".content");
  const windowHeight = window.innerHeight;
  const offset = -200;

  elements.forEach((element) => {
    const positionFromTop = element.getBoundingClientRect().top;

    if (positionFromTop - windowHeight + offset <= 0) {
      element.classList.add("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", checkVisibility);
document.addEventListener("scroll", checkVisibility);

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [39.660082, 66.930446],
    zoom: 17,
  });

  var myPlacemark = new ymaps.Placemark([39.660082, 66.930446], {
    balloonContent: "Локация",
  });

  myMap.geoObjects.add(myPlacemark);
}

function checkVisibility2() {
  const elements = document.querySelectorAll(".content2");
  const windowHeight = window.innerHeight;
  const offset = 200;

  elements.forEach((element) => {
    const positionFromTop = element.getBoundingClientRect().top;

    if (positionFromTop - windowHeight + offset <= 0) {
      element.classList.add("visible2");
    }
  });
}

document.addEventListener("DOMContentLoaded", checkVisibility2);
document.addEventListener("scroll", checkVisibility2);
