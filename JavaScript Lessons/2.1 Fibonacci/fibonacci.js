/*
The Fibonacci Exercise
Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

Where every number is the sum of the two previous ones.

e.g. 0, 1, 1, 2, 3, 5 comes from

0 + 1 = 1

1 + 1 = 2

1 + 2 = 3

2 + 3 = 5

etc.

Create a function where you can call it by writing the code:

fibonacciGenerator (n)

Where n is the number of items in the sequence.

So I should be able to call:

fibonacciGenerator(3) and get

[0,1,1]

as the output.

IMPORTANT: The solution checker is expecting an array as the correct output.
Do NOT change any of the existing code.

The first two numbers in the sequence must be 0 and 1.
*/

function fibonacciGenerator (n){
var output = [];

if (n==1){
   output =[0]; //only one element no need to add

} else if (n == 2) { //because there is only one element before so no need to add
    output = [0,1];
}
else {
    output =[0,1];

for (var i= 2; i < n; i++) {
    //adding the two numbers to create fib number
    output.push(output[output.length -2] + output[output.length -1]);
}
}
return output;
}



var output = fibonacciGenerator(20); //to get first 20 fibonacci numbers
console.log(output);