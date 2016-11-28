$(document).on("click", ".triangle:not(.active)", function(){
  $("#svg-container").removeClass();
  $("#svg-container").addClass("offset-" + $(this).data("position"));
  $(".triangle").attr("class", "triangle");
  $(this).attr("class", "triangle active");
  $(".content").removeClass("active");
  $(".content-"+$(this).data("position")).addClass("active");
}).on("click", ".active", function(){
  $("#svg-container").removeClass();
  $(".triangle").attr("class", "triangle");
  $(".content").removeClass("active");
});