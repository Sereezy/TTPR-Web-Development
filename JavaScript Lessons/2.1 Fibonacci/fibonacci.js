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

function fibonacciGenerator(n) {
  var output = [];

  if (n === 1) {
    //Since this is the first element, there’s nothing to calculate—just set output to [0]. 
    output = [0];
  } else if (n === 2) {
    //Since it's the second element, there aren't 2 prior values to calculate the sum. Just set count = [0, 1].
    output = [0, 1];
  } else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {
      // Add the sum of the last two numbers in the array to the array
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }

  return output;
}

// Example usage: Generate the first 10 Fibonacci numbers
var output = fibonacciGenerator(10);
console.log(output);