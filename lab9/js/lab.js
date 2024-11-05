// index.js - lab 9
// Author: Anika
// Date: Nov 5

 /*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
*/
$("#Challenge").append("<button id='button-challenge'>Make Special</button>");
$("#Problems").append("<button id='button-challenge'>Make Special</button>");
$("#Results").append("<button id='button-challenge'>Make Special</button>");

$("#button-challenge").click(function(){
  $("#Challenge").toggleClass("special");
});
$("#button-challenge").click(function(){
  $("#Problems").toggleClass("special");
});
$("#button-challenge").click(function(){
  $("#Results").toggleClass("special");
});