/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/
function lengthCheck(name) {
  var nLength = name.length;
  var count = `There are ${nLength} characters in ${name} you have ${
    140 - nLength
  } characters remaining`;
  return count;
}
console.log(lengthCheck("s6d1s65h"));
