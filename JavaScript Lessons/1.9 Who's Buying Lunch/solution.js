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

function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var numberOfPeople = names.length
    var randomPostion = Math.floor(Math.random() * numberOfPeople) //Math.Random returns number between 0 & 1 
    var randomPerson = names[randomPostion]
    
    return `${randomPerson} is going to buy lunch today!`

/******Don't change the code below*******/    
}

var  people = ["Angela", "Justin", "Jeremiah", "Aimee", "Billie"]
console.log(whosPaying(people))