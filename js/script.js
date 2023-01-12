// base js
const body = document.querySelector("body");
const main =document.querySelectorAll(".main")
const header = document.querySelector("#header");
const projects = document.querySelector(".projects")
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const CardToDark = document.querySelector("#CardToDark");
const projectCard = document.querySelector(".project-card");
const projectImage = document.querySelector('.project-image');
const Page_1_Transition = document.querySelector('#Page_1_Transition')
const Page_2_Transition = document.querySelector('#Page_2_Transition')
const Page_3_Transition = document.querySelector('#Page_3_Transition')
// ------------------------------------------------------------------------------
// To Dark mode theme.
toggle.addEventListener("change", () => {
    header.classList.toggle("dark");
    body.classList.toggle("dark");
    projects.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});
// of replace on page1
Page_1_Transition.addEventListener("click", () => {
    // // Simulate a mouse click:
    window.location.href = "page1.html";
    // // Simulate an HTTP redirect:
    // window.location.replace("page1.html");
    // window.location.assign("page1.html");
});
// of replace on page2
Page_2_Transition.addEventListener("click", () => {
    window.location.assign("page2.html");
});
// of replace on page3
Page_3_Transition.addEventListener("click", () => {
    window.location.assign("page3.html");
});