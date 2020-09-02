$(document).ready(function() {


$(".next").click(
  function() {
    var removeActive = $(".slider-wrapper .active");
    removeActive.removeClass("active");
    removeActive.next().addClass("active");
    if (removeActive.hasClass("last")) {
      $(".slider-wrapper .first").addClass("active");
    }
  });


$(".prev").click(
  function() {
    var removeActive = $(".slider-wrapper .active");
    removeActive.removeClass("active");
    removeActive.prev().addClass("active");
    if (removeActive.hasClass("first")) {
      $(".slider-wrapper .last").addClass("active");
    }
  });

$(document).keydown(
  function() {
    if (event.which == 37) {
    $(".prev").click();
  }
});

$(document).keydown(
  function() {
    if (event.which == 39) {
    $(".next").click();
  }
});





}
);
