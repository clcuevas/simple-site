$(document).ready(function() {

  function makeRandomArray( ) {
    var text = "";
    var possible = "ABCDEFGabcdefg012345";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  $("#mybutton").on("click", function() {
    console.log("I work");
    $("#holdArray").html("<p> " + makeRandomArray() + "</p>");
  });

});