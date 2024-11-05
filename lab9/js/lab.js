// index.js - lab 9
// Author: Anika
// Date: Nov 5

 /*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
*/
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});
