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
