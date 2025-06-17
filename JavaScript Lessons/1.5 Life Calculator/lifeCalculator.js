/*
In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.

It will take your current age as the input and console.logs a message with our time left in this format:

You have x days, y weeks, and z months left.

Where x, y and z are replaced with the actual calculated numbers.

For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.

Example Input

e.g. If you are 56 years old:

lifeInWeeks(56)
Example Output

You have 12410 days, 1768 weeks, and 408 months left.
*/

function lifeInWeeks(age){
    const lifespan = 90;
    var totaldays = 365*lifespan;
    var totalmonths = 12*lifespan;
    var totalweeks = 52*lifespan;
    var currentdays= 365*age;
    var currentmonths=12*age;
    var currentweeks=52*age;
    console.log(`you have ${totaldays-currentdays} days, ${totalmonths-currentmonths} months, ${totalweeks-currentweeks}`)

}
console.log(lifeInWeeks(27));
