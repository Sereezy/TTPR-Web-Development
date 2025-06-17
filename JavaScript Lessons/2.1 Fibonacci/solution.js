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
  let fibArray = [];
   // handal the case where n is less than or equal to 0
  if (n <= 0) {
    return fibArray;
  }

// Add the first number in the sequence 
  fibArray.push(0);
  // handal the case where n is 1
  if (n === 1) {
    return fibArray;
  }
  // Add the second number in the sequence  
  fibArray.push(1);
  // Generate the rest of the Fibonacci sequence up to n items
  for (let i = 2; i < n; i++) {
    let nextNumber = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(nextNumber);
  }
  return fibArray;

}

