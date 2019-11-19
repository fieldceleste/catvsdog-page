$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Hello Cat</li>");
    $("ul#webpage").prepend("<li>Meow Meow!</li>");

    $("ul#user").children("li").first().click(function(){
    $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
     $(this).remove();
  });
});

$("button#cat").click(function() {
    $("ul#user").prepend("<li>Hello Dog</li>");
    $("ul#webpage").prepend("<li>Woof Woof!</li>");
  });
});
$(document).ready(function() {
$(".clickable").click(function() {
    $("#cat-showing").toggle();
    $("#cat-hidden").toggle();
  });
});



