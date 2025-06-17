function fizzBuzz(){
    let i = 1;

    while (i <= 100){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        if (i % 3 === 0){
            console.log("Fizz");
        }
        if ( i % 5 === 0){
            console.log("Buzz");
        }
        if (i % 3 !== 0 && i % 5 !== 0){
            console.log(i);
        }

        i++;
    }
}

fizzBuzz();