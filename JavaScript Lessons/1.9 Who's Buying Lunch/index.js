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
    var numberOfPeople = names.length;  //counts how many people are in the array aka how many elements
    var randomIndex = Math.floor(Math.random() * numberOfPeople); //chooses random number between 0 and the number of people - 1, then rounds 
    var personPaying = names[randomIndex]; 
    return `${personPaying} is going to buy lunch today!!`
/******Don't change the code below*******/    
}

var  people = ["Angela", "Justin", "Jeremiah", "Aimee", "Billie"]
console.log(whosPaying(people))