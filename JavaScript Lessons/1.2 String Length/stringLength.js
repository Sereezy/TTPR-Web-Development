/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/

function stringlengthReturner(words) {

  if (words.length > 140) {
    console.log("You have a high amount of characters. Please lessen the amount")


  } else if (words.length < 140) {
    console.log(`There are ${words.length} characters in ${words}. You have ${140 - words.length} characters remaining.`)

  }  
}

stringlengthReturner("Jacob")

