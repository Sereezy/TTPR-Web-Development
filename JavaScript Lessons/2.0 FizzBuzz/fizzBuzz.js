for (let x = 1; x < 101; x++) {
    if (x % 3 == 0 && x % 5 == 0){
        console.log("FizzBuzz");
        continue
    }
    if (x % 3 == 0){
        console.log("Fizz");
    }
    if (x % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(x)
    }
}