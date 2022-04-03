$(document).ready(function () {
  animateColor();

  setInterval(animateColor, 2000);

  function animateColor() {
    var newColor =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    $(".main-text__item").animate({ color: newColor }, 2000);
  }
});
