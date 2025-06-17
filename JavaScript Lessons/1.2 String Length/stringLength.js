/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/

function stringCount(text)
{
  var remChars = 140 - text.length
  var text = `There are ${text.length} characters in ${text}. You have ${remChars} remaining`
  console.log(text)
}

stringCount("My name is Jared")
