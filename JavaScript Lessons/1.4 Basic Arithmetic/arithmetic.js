/* 
Write a function called calculateTotal that takes two numbers as input:
price: the cost of an item (a number)
taxRate: the tax rate as a percentage (a number)
The function should return the total cost after tax.

pointers:
Multiply the price by the tax rate to get the tax amount
Add the tax amount to the original price
Return the total cost
We are calculating a new value so use a return statement
*/

function calculateTotal(price, taxRate){
    var tax = taxRate/100;
    var taxed = price * tax;
    var total = price + taxed;

    return total;
}

var money = 100;
var taxRate = 10;

console.log(calculateTotal(money, taxRate));