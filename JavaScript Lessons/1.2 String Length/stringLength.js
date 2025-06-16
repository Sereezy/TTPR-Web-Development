/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/

function stringCount (Text) {
    var remainingChars = 140 - Text.length;
    var message = `there are ${Text.length} characters
    in ${Text}. you have ${remainingChars} remaining`
    console.log(message);
}

stringCount("hello");