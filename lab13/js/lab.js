//  lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
// Author: Anika Paredes
// Date: dec 2024

// Content

function fizzBuzz() {
  var output = document.getElementById("output");
  var oneLongString = "";

  for (var i = 1; i <= 200; i++) {
    var result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    if (i % 7 === 0) result += "Boom";

    if (result !== "") {
      oneLongString += "<p>" + i + ": " + result + "</p>";
    } else {
      oneLongString += "<p>" + i + "</p>";
    }
    }

    output.innerHTML = oneLongString;
}

fizzBuzz();
