import Home from "../index.html";
import Styles from "./scss/app.scss";
import "bootstrap";

// Slick.js Carousel
$(document).ready(() => {
  $('.slick').slick({
    dots: true,
    arrows: true,
  });
});

console.log("working");
