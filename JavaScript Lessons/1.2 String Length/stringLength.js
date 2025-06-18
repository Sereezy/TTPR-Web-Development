/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/
typeof(30)

var a ="Zohinur"
console.log(a)

function countingstring(texts) {
    var charsremaining = 140 - texts.length
    var sign = `there are ${texts.length} characters in ${texts}. you ${charsremaining} remaining`
    console.log(sign)
}
countingstring("HELLO WORLDpirehtiphfhghfdjklghjdflhgkljdfklgjhkl")