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

function fibonacciGenerator(n)
{
    var arr = []

    if(n===1)
    {
        arr = [0]
    }
    else if (n===2)
    {
        arr = [0, 1]
    }
    else 
    {
        arr = [ 0, 1]

        for (var i = 2; i < n; i++)
        {
            arr.push(arr[arr.length - 2] + arr[arr.length - 1])
        }
    }
    return arr;
}

var arr = fibonacciGenerator(10)
console.log(arr)