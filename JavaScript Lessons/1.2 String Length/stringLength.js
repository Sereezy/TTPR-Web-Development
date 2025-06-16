/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/
function checking_remainingChars(string){
  var total = 140;
  var current = string.length;
  var remaining = total - current;

  var answer = `There are ${current} characters in '${string}'. You have ${remaining} characters remaining `
  return answer
}
var words = "where does the space in the moon leave from earth"
console.log(checking_remainingChars(words))
