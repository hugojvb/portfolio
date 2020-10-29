import initTilt from "./js/tilt";
import initSr from "./js/sr";

import "./style/main.scss";
import fitbit from "./assets/fitbit3.mp4";
import alexa from "./assets/alexa.mp4";
import cv from "./assets/CV.pdf";
import expense from "./assets/expensetracker.webm";

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

initSr();
initTilt();

function hideLoader() {
  $("#loading").hide();
}

$(window).ready(hideLoader);
