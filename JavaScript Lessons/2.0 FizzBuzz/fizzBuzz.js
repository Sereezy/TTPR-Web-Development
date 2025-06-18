function Fizzbuzz() {
var i = 1
while(i >= 1 && i <=100) {
    if (i %3 === 0 && i % 5 === 0){
        console.log(`Fizzbuzz`)
    }
    else if (i % 3 === 0) {
        console.log(`Fizz`)
    }
    else if (i % 5 === 0) {
        console.log(`Buzz`)
    }
    else {
        console.log(i)
    }
    i++; 
}
}
Fizzbuzz(); 