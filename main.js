$(document).ready(function() {


$(".next").click(
  function() {
    var removeActive =$(".slider-wrapper .images .active");
    removeActive.removeClass("active");
    removeActive.next().addClass("active");
    if (removeActive.hasClass("last")) {
      $(".slider-wrapper .images .first").addClass("active");
    }
  }
)



}
);
