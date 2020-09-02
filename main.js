$(document).ready(function() {


$(".next").click(
  function() {
    var removeActive = $(".slider-wrapper .images .active");
    removeActive.removeClass("active");
    removeActive.next().addClass("active");
    if (removeActive.hasClass("last")) {
      $(".slider-wrapper .images .first").addClass("active");
    }
  }
);


$(".prev").click(
  function() {
    var removeActive = $(".slider-wrapper .images .active");
    removeActive.removeClass("active");
    removeActive.prev().addClass("active");
    if (removeActive.hasClass("first")) {
      $(".slider-wrapper .images .last").addClass("active");
    }
  }

);

$(document).keydown(
  function() {
    if (e.keyCode == 37) {
    alert("left arrow");
  }
}
);



}
);
