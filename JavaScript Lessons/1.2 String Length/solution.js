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


//More Advanced Solution
// function stringCount(text){
//     stringLength = text.length
//     return `There are ${stringLength} characters in ${text}. You have ${140 - stringLength} characters remaining`
// }

function stringCount(text){
    var remainingChars = 140 - text.length
    var message = "There are " + text.length + " characters in " + text + ". you have " + remainingChars + " remaining"
    return message
}

console.log(stringCount("Hello"))