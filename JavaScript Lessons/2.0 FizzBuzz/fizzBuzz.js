/*Exercise fizzbuzz challenge instruction in slides*/
function division(){
    let i = 1; 

    while (i<=100){
        if(1 % 3 == 0 && i % 5 == 0){ //if div by both 3 n 5
            console.log("FizzBuss");   //print FizzBuzz
        }
    
     else if (i % 3 == 0) { //if div only by 3 
             console.log("Fizz"); //print Fizz
    }
    else if (i % 5 == 0){  //if div by 5 only
        console.log("Buzz"); //print Buzz
    }
    else {
        console.log(i); //if not div by 5 0r 3, just print num
    }

    i++;  //go to next number

    }
    }
    division();