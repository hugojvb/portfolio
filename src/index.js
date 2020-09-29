import initTilt from "./js/tilt";
import initSr from "./js/sr";

import "./style/main.scss";
import fitbit from "./assets/fitbit.mp4";
import alexa from "./assets/alexa.mp4";

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
