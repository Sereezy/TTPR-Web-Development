1. Create a new Javascript file called index.js and link to it from the index.html file.

2. In the Dicee project, there is a folder called images, add the images of dice6.png as the source to both of the <img> elements.

3. Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. Test it out in the console to make sure it works as expected.

4. Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element.

HINT: You will need to use what you've learnt about the DOM and the method setAttribute() to achieve this.

5. Do the same for the right hand side image element.

6. Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).

HINT: You'll need to use an if statement, querySelector() and the innerHTML property to change the text in the h1.