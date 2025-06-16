/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/
function stringLength(text) {
    var remainingChars = 140 - text.length; // calculates remaining characters
    var message = 'There are ' + text.length + ' characters in " ' + text + '." You have ' + remainingChars + ' characters reamining.';
    console.log(message);
}

stringLength('Hello World! This is a tester string');