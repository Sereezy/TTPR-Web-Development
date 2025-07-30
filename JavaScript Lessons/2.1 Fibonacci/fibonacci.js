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
  var fibonacciList = [0, 1];
  if (n == 0) {
    return [];
  }
  if (n == 1) {
    return [0];
  }
  for (let i = 2; i < n; i++) {
    fibonacciList.push(fibonacciList[i - 1] + fibonacciList[i - 2]);
  }

  return fibonacciList;
}
console.log(fibonacciGenerator(9));
