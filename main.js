const hamburger = document.querySelector(".nav-hamburger");
const mobileClose = document.querySelector(".nav-close");
const mobileNavBg = document.querySelector(".nav-mobile-background");
const nav = document.querySelector("nav");


hamburger.addEventListener("click", (event)=>{
    hamburger.classList.toggle("hidden");
    mobileClose.classList.toggle("hidden");
    mobileNavBg.classList.toggle("hidden");
    nav.classList.toggle("hidden");
});

mobileClose.addEventListener("click", (event)=>{
  hamburger.classList.toggle("hidden");
  mobileClose.classList.toggle("hidden");
  mobileNavBg.classList.toggle("hidden");
  nav.classList.toggle("hidden");
});