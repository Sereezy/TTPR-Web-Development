// FIZZBUZZ CHALLENGE INSTRUCTIONS

// 1. Start with the number 1
// 2. Loop through numbers from 1 up to and including 100
// 3. For each number:
//    - If the number is divisible by BOTH 3 and 5, print "FizzBuzz"
//    - If the number is divisible by 3 ONLY, print "Fizz"
//    - If the number is divisible by 5 ONLY, print "Buzz" use
//    - If the number is NOT divisible by 3 or 5, print the number itself

// 🔁 Use a WHILE loop to implement this
var number = 1;
while (number <= 100) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else console.log(number);
  number++;
}
