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
  } else if (event.which == 39) {
    $(".next").click();
  }
});

var primaImmagine = $(".slider-wrapper .images .first");
var secondaImmagine = $(".slider-wrapper .images img:nth-child(2)");
var terzaImmagine = $(".slider-wrapper .images img:nth-child(3)");
var quartaImmagine = $(".slider-wrapper .images img:nth-child(4)");


var firstCircle = $(".slider-wrapper .nav > .first");
var secondCircle = $(".slider-wrapper .nav i:nth-child(2)");
var thirdCircle = $(".slider-wrapper .nav i:nth-child(3)");
var fourthCircle = $(".slider-wrapper .nav i:nth-child(4)");

firstCircle.click(
  function () {
    primaImmagine.show();
  }
);

secondCircle.click(
  function () {
    secondaImmagine.show();
  }
)

thirdCircle.click(
  function () {
    terzaImmagine.show();
  }
)

fourthCircle.click(
  function () {
    quartaImmagine.show();
  }
)





}
);
