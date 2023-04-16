
// alert(firstLetter.toUpperCase() + username.toUpperCase())
//  console.log()
// Task 4:

// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

var userName = prompt("Enter You Name:");
var firstLetter = userName.slice(0,1);
var next = userName.slice(1);
console.log(firstLetter.toUpperCase()+next.toLowerCase());
