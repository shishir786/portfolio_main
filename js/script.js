/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  /*========== sticky navbar ==========*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
};

/*========== swiper ==========*/

/*========== dark light mode ==========*/

/*========== scroll reveal ==========*/
