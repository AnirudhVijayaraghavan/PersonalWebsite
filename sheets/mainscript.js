// Code to add functionalities and style to progress bar and back to home page button.
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

const goToTop = () => {
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
    } else {
        backToTopButton.classList.add("hidden");
    }
});

backToTopButton.addEventListener("click", goToTop);

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