/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/
function lengthverifyer(person){
var lengthofstring = person.length;
console.log(`There are ${lengthofstring} characters in ${person}. You have ${140-lengthofstring} characters remaining`)}
var person = 'hello I would like to know if there is anybody reading this message' ;
console.log(lengthverifyer(person));