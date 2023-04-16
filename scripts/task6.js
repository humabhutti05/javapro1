// Task 6:

// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

var products = ['Candy' , 'Food' , 'Books' , 'Pens/Paints' , 'Inkpots' , 'Sketchbook']
console.log(products)

var userInput = prompt("Please Enter The Element Position You Wants : Candy , Food , Books , Pens/Paints , Inkpots , Sketchbook"
)

// var userInput = ("Please Enter The Element Position You Wants")

products[5]
var user = products.slice(5)
console.log(user)

var newProducts =['Candy' , 'Food' , 'Books' , 'Pens/Paints' , 'Inkpots' , 'Sketchbook']
newProducts.splice(5)
console.log(newProducts)