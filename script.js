// Variables
let userName = "ifahad-dev";
const age = 21;

// Welcome Function (Hire Me Button)
function welcome() {
    alert("Welcome to my Portfolio!");
}

// Console Message
console.log("Portfolio Loaded Successfully");

// Back to Top Button
let mybutton = document.getElementById("topBtn");

// Show/Hide Button While Scrolling
window.onscroll = function () {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// Scroll to Top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Welcome Alert on Page Load
window.onload = function () {
    alert("Welcome to ifahad-dev's Portfolio");
};
let title = document.getElementById("mainTitle");

title.style.color = "#2563eb";

title.innerHTML = "Fahad Ibrahim | Web Developer";

function changeTitle() {
    document.getElementById("mainTitle").innerHTML =
        "Future Full Stack Developer";
}