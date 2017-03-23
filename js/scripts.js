$(document).ready(function(){

  $("form#triangle").submit(function(event) {
    event.preventDefault();

    var sideOne = parseInt($("input#side1").val());
    var sideTwo = parseInt($("input#side2").val());
    var sideThree = parseInt($("input#side3").val());

    $(".initially-hidden").hide();
    //all 3 sides are equal
    if (sideOne === sideTwo && sideTwo ===sideThree) {
      $("#have-triangle").text("an Equilateral triangle");
      $("#have-triangle").show();

    //2 sides are equal
  } else if (sideOne ===sideTwo || sideOne ===sideThree || sideTwo ===sideThree) {
    $("#have-triangle").text("an Isosceles triangle");
    $("#have-triangle").show();

    //not a triangle
  } else if (sideOne + sideTwo <= sideThree) {
      $("#no-triangle").show();
    //No sides equal
    } else {
      $("#have-triangle").text("a Scalene triangle");
      $("#have-triangle").show();
    }

  });
});
