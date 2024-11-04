// index.js - lab 7
// Author: Anika
// Date: Nov 4

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
console.log("userName =", userName);
// split string to array
    var nameArray = userName.split('Anika');
 console.log("nameArray =", nameArray);
 // sort the array
    var nameArraySort = nameArray.sort();
 console.log("nameArraySort =", nameArraySort);
 // join array back to a string
    var nameSorted = nameArraySort.join('Anika');
 console.log("nameSorted =", nameSorted);
 
// userName.tolower() ,lspl it("") .sort() .join("")
 return nameSorted;
 }

//output
 document.writeln("Oh hey, I've fixed your name: ",
 sortUserName(), "<lbr>");
