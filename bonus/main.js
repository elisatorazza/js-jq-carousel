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

// function mostraImmagine (numImg, numCircle) {
//   numCircle.click(
//     function () {
//       numImg.show();
//     }
//   );
// }

var primaImmagine = $(".slider-wrapper img .first");
var secondaImmagine = $(".slider-wrapper img:nth-child(2)");
var terzaImmagine = $(".slider-wrapper img:nth-child(3)");
var quartaImmagine = $(".slider-wrapper img:nth-child(4)");

if ($(".slider-wrapper .nav .first")).click(
  function () {
    primaImmagine.show();
  }) else if ($(".slider-wrapper .fa-circle:nth-child(2)")).click(
    function () {
    secondaImmagine.show();
  }) else if ($(".slider-wrapper .fa-circle:nth-child(3)").click(
    function () {
    terzaImmagine.show();
  }) else if ($(".slider-wrapper .fa-circle:nth-child(4)").click(
    function () {
    quartaImmagine.show();
  })
);
);




}
);
