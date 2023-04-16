// Task 7:

// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

var nationality = prompt("Enter Your Nationality")
var gender = +prompt("Enter Your Gender")
var age = +prompt("Enter Your Age")

if(age >18 && nationality == 'Pakistani' || nationality == 'pakistani') {
    alert("You are eligible to vote")
    console.log("Please! go to voting are....")
    }

    if(gender == 'Female' || gender == 'female'){
alert("you are eligible to vote")}

 if(gender == 'male' || gender == 'Male'){
alert("you are eligible to vote")
}
    
// alert("You are eligible to vote")

 if (nationality == 'indian' || nationality == 'Indian'){
  alert("You are not eligible to vote")
  console.log("Please! go to India.....")
}


