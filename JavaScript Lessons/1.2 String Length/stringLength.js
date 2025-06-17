/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/

function stringCount(text) {
  var remainingChars = 140 - text.length;
  var message = 'There are ${text.length} characters in ${text}. You have ${remaining} characters remaining.';
  console.log(message)
}

stringCount("Hello")