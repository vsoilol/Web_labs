$(document).ready(function () {
  $(".main-text__item").hover(
    function () {
      $(this).css("color", "red");
    },
    function () {
      $(this).css("color", "black");
    }
  );
});
