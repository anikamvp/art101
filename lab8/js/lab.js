// index.js - lab 8
// Author: Anika
// Date: Nov 5

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
console.log("userName =", userName);
// split string to array
    var nameArray = userName.split('');
 console.log("nameArray =", nameArray);
 // sort the array
    var nameArraySort = nameArray.sort();
 console.log("nameArraySort =", nameArraySort);
 // join array back to a string
    var nameSorted = nameArraySort.join('');
 console.log("nameSorted =", nameSorted);
 
  return nameSorted;
 }

//output
 document.writeln("Oh hey, I've fixed your name: ",
 sortUserName(), "<Anika>");
 
 function isEven(x){
   return (x % 2 == 0);
   }
    console.log("Is 1 even? ", isEven(1));
    console.log("Is 2 even? ", isEven(2));

    array = [100, 81, 4, 16, 42, 144, 10000]
    console. log("My array", array);

      var result= array.map(isEven);
      console.log ("Test of evenness of array:", result);
      var result= array.map(function(x){
         return x ** 0.5;
      })

      console.log("Squareroot of array:", result);