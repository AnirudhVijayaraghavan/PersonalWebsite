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
  //document.getElementById("footerspan").style.marginLeft = "-20%"; //style="margin-left: -20%;
  document.getElementsByClassName("mainprofilephotoleft")[0].style.marginLeft = "2%";
  document.getElementsByClassName("mainprofilephotoright")[0].style.marginRight = "2%";
  document.getElementsByClassName("mainprofilephotobottomleft")[0].style.marginLeft = "2%";
  document.getElementsByClassName("mainprofilephotobottomright")[0].style.marginRight = "2%";
}

function closeNav() {
  state = "closed";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementsByClassName("openbtn")[0].style.display = "inline";
  document.getElementsByTagName("footer")[0].style.width = "100%";
  //document.getElementById("footerspan").style.marginLeft = "0%";
  document.getElementsByClassName("mainprofilephotoleft")[0].style.marginLeft = "15%";
  document.getElementsByClassName("mainprofilephotoright")[0].style.marginRight = "10%";
  document.getElementsByClassName("mainprofilephotobottomleft")[0].style.marginLeft = "5%";
  document.getElementsByClassName("mainprofilephotobottomright")[0].style.marginRight = "5%";
}

function openorclose() {
  if (state === "open") {
    closeNav();

  }
  else if (state === "closed") {

    openNav();
    gsap.from("#mySidebar a", { opacity: 0, stagger: 0.2 });
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

// 
var form = document.getElementById("myForm");
form.addEventListener("submit", submitted);

//initializing valid variables for switch case.
var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validPhone = false;
var validZip = false;

//regex checks variables
var regExString = /^[a-zA-Z]+$/;
var regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
var regExEmailNEU = /[a-z0-9]+@[a-zA-Z].[a-zA-Z]/;
var regExPhone = /\d{10}$/;
var regExZip = /(^\d{5}$)/;

var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate);

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

function validate(e) {
  console.log("validate");
  var value = e.target.value;
  console.log(value);
  var type = this.id;
  var em = "error_" + type;

  switch (type) {
    case "firstName":
      if (!value.trim().match(regExString)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validFirstName = false;
      }
      else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validFirstName = true;
      }
      break;

    case "lastName":
      if (!value.trim().match(regExString)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validLastName = false;
      }
      else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validLastName = true;
      }
      break;

    case "emailId":
      if (!value.trim().match(regExEmailNEU)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validEmail = false;
      }
      else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
      }
      break;

    case "phoneNumber":
      if (!value.trim().match(regExPhone)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validPhone = false;
      }
      else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validPhone = true;
      }
      break;


    case "zipcode":
      if (!value.trim().match(regExZip)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validZip = false;
      }
      else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validZip = true;
      }
      break;
  }
}

//The following will be called in submit() function to return the value of source CBs
//selected.
function sourceCBValueSelected() {
  var sourceCB = document.getElementsByName('source');
  let arrayCB = [];
  for (i = 0; i < sourceCB.length; i++) {
    if (sourceCB[i].checked)
      arrayCB.push(sourceCB[i].value);
  }
  return arrayCB;
}
//The following is to make sure only 1 CB needs be checked.
function deRequireCb(cbcheck) {
  cb = document.getElementsByClassName(cbcheck);

  var atLeastOneChecked = false; //at least one cb is checked
  for (i = 0; i < cb.length; i++) {
    if (cb[i].checked === true) {
      atLeastOneChecked = true;
    }
  }

  if (atLeastOneChecked === true) {
    for (i = 0; i < cb.length; i++) {
      cb[i].required = false;
    }
  } else {
    for (i = 0; i < cb.length; i++) {
      cb[i].required = true;
    }
  }
}

//The following is to reset the form, variables and localStorage.
function resetButton() {
  console.log("resetButton() function called.")
  document.getElementById("myForm").reset();
  console.log("Form reset.");
  localStorage.clear();
  console.log("Data removed from localStorage.");
}

function addToLocalStorage() {
  //The following is to declare localStorage keys, using values inside the labels.

  var firstName = document.getElementById("firstName").value;
  localStorage.setItem("firstName", firstName);
  var lastName = document.getElementById("lastName").value;
  localStorage.setItem("lastName", lastName);
  var emailId = document.getElementById("emailId").value;
  localStorage.setItem("emailId", emailId);
  var phoneNumber = document.getElementById("phoneNumber").value;
  localStorage.setItem("phoneNumber", phoneNumber);
  var zipcode = document.getElementById("zipcode").value;
  localStorage.setItem("zipcode", zipcode);
  var source = sourceCBValueSelected();
  localStorage.setItem("source", source);
  var comments = document.getElementById("comments").value;
  localStorage.setItem("comments", comments);
  console.log("Data Saved to localStorage Successfully");
}

// EmailJS code.
function sendemailtome() {
  alert(localStorage.getItem("emailId"));
  emailjs.send("service_wtn042h", "template_bv4dacd", {
    firstName: localStorage.getItem("firstName"),
    lastName: localStorage.getItem("lastName"),
    emailId: localStorage.getItem("emailId"),
    phoneNumber: localStorage.getItem("phoneNumber"),
    zipcode: localStorage.getItem("zipcode"),
    source: localStorage.getItem("source"),
    comments: localStorage.getItem("comments"),
  });
}

function submitted(e) {
  e.preventDefault();
  console.log("submitted");
  console.log(validFirstName + "|" + validLastName + "|" + validEmail + "|" + validPhone + "|" + validZip);
  if (validFirstName && validLastName && validEmail && validPhone && validZip) {
    // The following adds the form details to localStorage.
    addToLocalStorage()
    // The following function sends the e-mail.
    sendemailtome();
    // The following function resets the form.
    resetButton();

  }
  else {
    alert("Please enter all the details, as prompted.");
  }
}

// The following code is for gsap Plugin.
gsap.registerPlugin(ScrollTrigger);
let animation = gsap.timeline();
gsap.from("#h1", {
  x: "-100%",
  duration: 3,
  scrollTrigger: "#h1"
});
gsap.from("#h2", {
  x: "100%",
  duration: 3,
  scrollTrigger: "#h2"
});


gsap.from(".formsection", {
  x: "100%",
  duration: 4,
  ease: "bounce.out",
  y: - 500,
  scrollTrigger: ".formsection"
});


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");

  document.getElementsByClassName("resume")[0].classList.toggle("light-mode-for-resume-btn");
  var btpsb = document.getElementsByClassName("back-to-top")[0].style.background;
  if (btpsb == "red") {
    document.getElementsByClassName("back-to-top")[0].style.background = "white";
  } else {
    document.getElementsByClassName("back-to-top")[0].style.background = "red";
  }
  
  
  var dtac = document.querySelectorAll(".dtaclass");
  for (var i = 0; i < dtac.length; i++) {
    if (dtac[i].style.color === "black") {
      dtac[i].style.color = "white";
    } else {
      dtac[i].style.color = "black";
    }
  }
});
