function fizzBuzz(){
    var start = 1;

    while (start <= 100){
        if (start % 3 === 0 && start % 5 === 0){
            console.log(`FizzBuzz`);
        } else if (start % 3 === 0){
            console.log(`Fizz`);
        } else if (start % 5 === 0){
            console.log(`Buzz`);
        } else {
            console.log(`${start}`);
        }

        start++;
    }

}

fizzBuzz();