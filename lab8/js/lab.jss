// index.js - lab 8
// Author: Anika
// Date: Nov 5

 //test function
 function isEven(x){
   return (x % 2 == 0);
   }
   console.log("Is 1 even? ", isEven(1));
   console.log("Is 2 even? ", isEven(2));
   
   var array = [100, 81, 4, 16, 42, 144, 
   10000];
   console. log("My array", array);
   
   var result= array.map(isEven);
   console.log ("Test of evenness of array:", result);
   result= array.map(function(x){
   return x **5;
   })
   console.log("Squareroot of  array:", result);