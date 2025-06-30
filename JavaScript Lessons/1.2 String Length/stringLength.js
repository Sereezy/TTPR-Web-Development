/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/
function characterCount(input){
  countlimit = 140 - input.length;
  return " There are "+ input.length+ " characters in "+input+ ". You have " +countlimit+"characters remaining "
}