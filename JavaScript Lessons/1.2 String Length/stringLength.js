/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/

function stringCount(string){
  
  var stringLength
  const characterLimit = 140
  var remainingCharacters = characterLimit - stringLength
  
  if (remainingCharacters > 0) {
    return (`There are ${stringLength} characters in ${string}. You have [${remainingCharacters}] characters remaining `)
  }else {
    return ('You are over the character limit.')
  }
}