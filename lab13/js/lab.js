//  lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
// Author: Anika Paredes
// Date: dec 2024

// Content
function fizzBuzz() {
  let oneLongString = ""; // Initialize an empty string to hold all the output

  // Loop through numbers from 1 to 200
  for (let num = 1; num <= 200; num++) {
    let output = ""; // Initialize an empty string to store output for this number

    // Check if the number is divisible by 3, 5, or 7
    if (num % 3 === 0) output += "Fizz";
    if (num % 5 === 0) output += "Buzz";
    if (num % 7 === 0) output += "Boom";

    // If no "Fizz", "Buzz", or "Boom", just print the number
    if (output === "") {
      output = num;
    } else {
      output += "!"; // Add exclamation mark to the output
    }

    // Append the result to the long string with a line break
    oneLongString += "<p>" + output + "</p>";
  }

  // After the loop, output all the results to the #output div
  $("#output").html(oneLongString);
}

// Call the fizzBuzz function to execute the program
fizzBuzz();

