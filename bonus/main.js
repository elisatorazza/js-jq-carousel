$(document).ready(function() {


$(".next").click (
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


function click (num1, num2) {
  num1.click (
    function () {
      num2.addClass();
    }
  );
}

firstCircle.click(
  function () {
    var removeActive = $(".slider-wrapper .active");
    removeActive.removeClass("active");
    primaImmagine.addClass("active");
    firstCircle.addClass("active");
  }
);
secondCircle.click(
  function () {
    var removeActive = $(".slider-wrapper .active");
    removeActive.removeClass("active");
    secondaImmagine.addClass("active");
    secondCircle.addClass("active");
  }
)
thirdCircle.click(
  function () {
    var removeActive = $(".slider-wrapper .active");
    removeActive.removeClass("active");
    terzaImmagine.addClass("active");
    thirdCircle.addClass("active");
  }
)
fourthCircle.click(
  function () {
    var removeActive = $(".slider-wrapper .active");
    removeActive.removeClass("active");
    quartaImmagine.addClass("active");
    fourthCircle.addClass("active");
  }
)

}
);
