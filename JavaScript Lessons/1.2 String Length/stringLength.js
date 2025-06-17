/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/

function characterLimit(youreText) {
  var charlimit = `There are ${youreText.length} characters in [${youreText}]. You have ${140 - youreText.length} characters remaining.`
  console.log(charlimit)
}

characterLimit("Random words to test code")