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

  // Attach click handler to submit button
$("#button").click(function() {
  // Get the value in the #input text box, assign to a variable name
  let name = $("#input").val();
  console.log(name);

  // Get the length of the name
  let namelength = name.length;
  console.log(namelength);

  // Get the house
  let house = getHouse(namelength);
  console.log(house);

  // Add house to output div
  $("#output").html("<h1>" +house+ "</h1>");
})