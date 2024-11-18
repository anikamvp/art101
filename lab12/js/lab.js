//  lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
// Author: Anika Paredes
// Date: nov 2024

// Content

function sortingHat(str) {
  // Count the letters in str and assign it to a variable length
  const length = str.length;

  // Get the remainder with 4 using modulus (% operator)
  const mod = length % 4;

  // Conditional to return one of four iconic houses depending on the mod value
  if (mod === 0) {
      return "Jedi";
  } else if (mod === 1) {
      return "Sith";
  } else if (mod === 2) {
      return "Rebel Alliance";
  } else { // mod === 3
      return "Empire";}
  }
// Create a click listener attached to #button
$("#button").click(function() {
  // Get the value of #input and assign it to a variable name
  const name = $("#input").val();

  // Run sortingHat(name) and store the result in a variable house
  const house = sortingHat(name);

  // Append a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  $("#output").append("<p>The Sorting Hat has sorted you into <strong>" + house + "</strong>!</p>");
});
