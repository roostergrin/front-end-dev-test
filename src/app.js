import Home from "../index.html";
import Styles from "./scss/app.scss";
import "bootstrap";

$(document).ready(() => {
  $('.carousel .slick').slick({
    dots: true,
    arrows: true,
  });
});


console.log("working");
