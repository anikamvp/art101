// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
/**
 * Original Version + Artist :       
 * https://codepen.io/rachelnabors/pen/bpAJH
 * 
 */

$( document ).ready(function() {

  // Change cat's animation form walking to sitting on completion of bed movement
  var transitionPrefixes = 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd';
    $('.cat-bed').one(transitionPrefixes, function(){
      $('.lazy-cat').removeClass('walking');
      $('.lazy-cat').addClass('sitting');		
    });
  });