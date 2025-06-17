for (let num = 0; num <= 50; num++){
    if (num % 3 == 0 && num%5 == 0 && num != 0){
        console.log("fizzBuzz");
        console.log(num);
    } else if (num % 3 == 0  && num != 0){
        console.log("fizz");
        console.log(num);
    } else if (num % 5 == 0  && num != 0){
        console.log("buzz");
        console.log(num);
    } 
}