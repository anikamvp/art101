// index.js - lab 6 js my ride
// Author: Anika
// Date: oct 24

// Define Variables 
// Array of transportation methods
let myTransport = ["car", "carpool" , "walking"];

// Object for my main ride (car)
let MyMainRide = {
    make: "Toyota",
    model: "Prius",
    color: "blue",
    year: 2012,
    age: function() {
      return 2012-2024;
    }
};

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride : <pre>", 
    JSON.stringify(MyMainRide, null, '/t'), "</pre>");

