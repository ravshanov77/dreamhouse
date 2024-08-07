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

  var myPlacemark = new ymaps.Placemark([39.660082, 66.930446]);

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

function toggleDropdown() {
  var dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function selectCountry(flag, code, flagUrl) {
  document.getElementById("selectedCountry").innerHTML =
    '<img class="flag" src="' + flagUrl + '" alt="' + flag + '">' + " " + code;
  document.getElementById("dropdown").style.display = "none";
  document.getElementById("phoneInput").value = "";
}

document.addEventListener("click", function (event) {
  var dropdown = document.getElementById("dropdown");
  var selectedCountry = document.getElementById("selectedCountry");
  if (
    !selectedCountry.contains(event.target) &&
    !dropdown.contains(event.target) &&
    event.target.id !== "phoneInput"
  ) {
    dropdown.style.display = "none";
  }
});

document
  .getElementById("openFormButton")
  .addEventListener("click", function () {
    document.getElementById("contactForm").style.display = "flex";
  });

document
  .getElementById("closeFormButton")
  .addEventListener("click", function () {
    document.getElementById("contactForm").style.display = "none";
  });

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("contactForm")) {
    document.getElementById("contactForm").style.display = "none";
  }
});

document
  .getElementById("openFormButton")
  .addEventListener("click", function () {
    document.getElementById("contactForm").style.display = "flex";
    document.querySelector(".background-content").style.filter = "blur(5px)";
  });

document
  .getElementById("closeFormButton")
  .addEventListener("click", function () {
    document.getElementById("contactForm").style.display = "none";
    document.querySelector(".background-content").style.filter = "none";
  });

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("contactForm")) {
    document.getElementById("contactForm").style.display = "none";
    document.querySelector(".background-content").style.filter = "none";
  }
});

document
  .getElementById("exteriorButton")
  .addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("interiorButton").classList.remove("active");
  });

document
  .getElementById("interiorButton")
  .addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("exteriorButton").classList.remove("active");
  });

document
  .getElementById("exteriorButton")
  .addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("interiorButton").classList.remove("active");
    document.getElementById("displayImage").src = "static/images/exterior1.png";
  });

document
  .getElementById("interiorButton")
  .addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("exteriorButton").classList.remove("active");
    document.getElementById("displayImage").src =
      "../static/images/interior1.png";
  });

let slideIndex = 0;

function moveSlides(n) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

let startX;

document.querySelector(".carousel").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector(".carousel").addEventListener("touchmove", (e) => {
  if (!startX) return;

  const xDiff = startX - e.touches[0].clientX;

  if (xDiff > 0) {
    moveSlides(1);
  } else {
    moveSlides(-1);
  }
  startX = null;
});
