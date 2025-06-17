// Start with number 1
// Loop through 1-100
// For each number:
//     if its divisible by both 3 and 5 print fizzbuzz
//     only by 3 print fizz
//     only by 5 print buzz
//     neither print the number

function fizzBuzz() {
    var originalNumber = 1
    while (originalNumber <= 100){
        if (originalNumber % 3 === 0 && originalNumber % 5 === 0) {
            console.log('FizzBuzz\n')
        
        } else if (originalNumber % 3 === 0) {
            console.log('Fizz\n')
        } else if (originalNumber % 5 === 0) {
            console.log('Buzz\n')
        }
        else {
            console.log(`\n${originalNumber}`)
        }
        originalNumber++
    }
}

fizzBuzz()