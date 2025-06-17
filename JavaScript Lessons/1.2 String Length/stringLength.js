/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/

function count(str){
  var left = 140 - str.length
  console.log(
  ` There are ${str.length} characters in ${str}. You have ${left} characters remaining `
  )
}
var s = "Hello my world"
count(s)
