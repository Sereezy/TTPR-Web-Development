/*
Write a function that slices the users input to 140 characters.

Return the sliced input
*/

function sliceString(inputs){
    let string = inputs;
    let limit = string.slice(0,140);

    return limit
}




/* SAMPLE INPUT */

// A sentence that is longer than 140 characters
const sentence = "JavaScript lets you create websites and solve real-world problems. Practice regularly to improve. Keep learning, stay curious, and enjoy the coding journey every day.";

// Save the returned string from the function
var slicedString = sliceString(sentence);

// Log the sliced result to confirm that the string was trimmed
console.log(slicedString);

// Log the character count to confirm it’s 140 characters or fewer
console.log("Character count:", slicedString.length);