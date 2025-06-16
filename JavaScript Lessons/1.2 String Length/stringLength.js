/* 
Twitter use to have a character count limit of 140.
  Write a function that takes a string as input, 
  counts how many characters are in that string, 
  and tells the user how many characters they have remaining.

  The function should return a message in this format:
  " There are [stringLength] characters in [text]. You have [140 - stringLength] characters remaining "
*/
function countCharacters(string) {
            var stringLength = string.length
            var charactersLeft = 140 - stringLength
            var message = `There are ${stringLength} characters in ${string}. You have ${charactersLeft} 
            characters remaining.`;
            console.log(message)        
}
countCharacters("This is a practice sentence.")