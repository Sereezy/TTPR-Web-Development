/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/


function stringCount(strings){
  let string = strings;
  let stringLength = string.length;
  let remainingLength = 140-stringLength;

  console.log(`There are ${stringLength} characters in ${string}. You have ${remainingLength} characters remaining.`)
}

stringCount('Twitter');