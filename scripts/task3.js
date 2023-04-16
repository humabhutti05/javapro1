// Task 3:

// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

var secretNumber = 6
var userInput = +prompt("Guess the number between 1 to 10")

if (userInput == '6') {
//   console.log("Congratulations! You guessed the secret number")
alert("Congratulations! You guessed the secret number....")
}

else if (secretNumber > userInput){
    alert("the guess is too low :(")
        alert("Please! Guess Again...")
    

}

else if (secretNumber < userInput){
    alert("the guess is too high")
    alert("Please! Guess Again...") 
}



