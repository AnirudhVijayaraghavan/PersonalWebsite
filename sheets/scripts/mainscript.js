// Code to add functionalities and style to progress bar and back to home page button.
const showOnPx = 150;
const backToTopButton = document.querySelector(".back-to-top");
const resumeButton = document.querySelector(".resume");
const footerarea = document.querySelector("footer");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToHomePage = () => {
  window.location.href = "../index.html";
};

document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);
  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
    resumeButton.classList.remove("hidden");
    footerarea.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
    resumeButton.classList.add("hidden");
    footerarea.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToHomePage);

// Code to embed google map API.
function myMap() {
  // The location of Walnut avenue.
  const walnut = { lat: 42.312312864693176, lng: -71.09708490000003 };
  // The map, centered at Walnut avenue.
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 12,
    center: walnut,
  });
  // The marker, positioned at Walnut avenue.
  const marker = new google.maps.Marker({
    position: walnut,
    map: map,
  });
  window.initMap = initMap;
}

// Code to include ScrollFade.js functionality.
var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
  var viewportBottom = window.scrollY + window.innerHeight;

  for (var index = 0; index < fadeElements.length; index++) {
    var element = fadeElements[index];
    var rect = element.getBoundingClientRect();

    var elementFourth = rect.height / 4;
    var fadeInPoint = window.innerHeight - elementFourth;
    var fadeOutPoint = -(rect.height / 2);

    if (rect.top <= fadeInPoint) {
      element.classList.add('scrollFade--visible');
      element.classList.add('scrollFade--animate');
      element.classList.remove('scrollFade--hidden');
    } else {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }
  }
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function () {
  scrollFade();
});

// The following code is for the navbar collapse.
let state = "closed";
function openNav() {
  state = "open";
  document.getElementById("mySidebar").style.width = "20%";
  document.getElementById("main").style.marginLeft = "20%";
  document.getElementsByClassName("openbtn")[0].style.display = "none";
  document.getElementsByClassName("openbtn")[0].style.opacity = "100%";
  document.getElementsByTagName("footer")[0].style.width = "80%";
  document.getElementsByClassName("mainprofilephoto")[0].style.marginLeft = "2%";

}

function closeNav() {
  state = "closed";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementsByClassName("openbtn")[0].style.display = "inline";
  document.getElementsByTagName("footer")[0].style.width = "100%";
  document.getElementsByClassName("mainprofilephoto")[0].style.marginLeft = "15%";
}

function openorclose() {
  if (state === "open") {
    closeNav();
  }
  else if (state === "closed") {
    openNav();
  }
}

// The following is to fix the bug where hamburger icon does not respond to media query if used
// even once.
function myFunction(x) {
  if (x.matches) {
    document.getElementsByClassName("openbtn")[0].style.display = "none";
  } else {
    document.getElementsByClassName("openbtn")[0].style.display = "inline";
  }
}

var x = window.matchMedia("(max-width: 800px)")
myFunction(x)
x.addListener(myFunction)
