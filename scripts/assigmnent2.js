// Make a function to generate OTP

const generateOPT = () => {
  const length = 7;
    let otp ="";


    for(let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() *10);
    }
    return otp;
}
console.log(generateOPT())



// Make a function that converts string into capital case

// const name = ('huma')
// const userName = name.charAt(0).toUpperCase() + name.slice(1)

// console.log(userName)



// Make a function that calculate your age

// var DOB = new Date()

// DOB.setDate(16)
// DOB.setMonth(4)
// DOB.setFullYear(2003)
// console.log(DOB)

// var myage = current-DOB
// console.log(myage)

// Make a function that returns the leap years of upcoming next 10 years

//  







// Make a function that checks whether the current year is a leap year or not


// function leapYear(year)
// {
//      // checking divisible by 4
//      // year should not be evenly divisible by 100
//     // or should be evenly divisible by 400


//     return (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0);

// }
// console.log(leapYear(2023))

