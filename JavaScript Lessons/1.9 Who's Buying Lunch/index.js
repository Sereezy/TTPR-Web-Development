/*
Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. 
The person selected will have to pay for everybody's food bill.

Important: The output should be returned. The output should match the example output exactly, including capitalisation and punctuation.

Example Input
["Angela", "Ben", "Jenny", "Michael", "Chloe"]

Example Output
Michael is going to buy lunch today!

NOTE: Think about how we calculate a random number selected on a dice
*/

function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var peopleNum = names.length
    var paying = Math.floor(Math.random() * peopleNum)
    var payer = names[paying]
    var message = `${payer} is going to buy lunch today`
    return message;
}


/******Don't change the code below*******/    


var  people = ["Angela", "Justin", "Jeremiah", "Aimee", "Billie"]
console.log(whosPaying(people))