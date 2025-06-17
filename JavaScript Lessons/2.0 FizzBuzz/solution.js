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

function fizzBuzz() {
  let i = 1; // Start counting from 1

  while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
      // If divisible by both 3 and 5, print "FizzBuzz"
      console.log("FizzBuzz");
    }

    // If divisible only by 3, print "Fizz"
    else if (i % 3 === 0) {
      console.log("Fizz");
    }

    // If divisible only by 5, print "Buzz"
    else if (i % 5 === 0) {
      console.log("Buzz");
    }

    // If divisible by neither, just print the number
    else {
      console.log(i);
    }

    // Move to the next number
    i++;
  }
}

fizzBuzz();
