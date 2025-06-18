/*
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
Solution below
*/

function fibonacciGenerator(n) {
  var output = [];

  if (n === 1) {
    //Since this is the first element, there’s nothing to calculate—just set output to [0]. 
    output = [0];
  } else if (n ===2) {
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
