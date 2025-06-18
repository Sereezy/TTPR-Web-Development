
// Generate a random number between 1 and 6 for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// Build the filename for the dice image based on the random number Ex: dice1.png - dice6.png
var randomDiceImage = "dice" + randomNumber1 + ".png";

// Create the full path to the image in the "images" folder Ex: images/dice1.png - images/dice6.png
var randomImageSource = "images/" + randomDiceImage; 

// Select the first <img> element on the page (Player 1's dice)
var image1 = document.querySelectorAll("img")[0];

// Set the src attribute of Player 1's image to the random dice image
image1.setAttribute("src", randomImageSource);

// Generate a random number between 1 and 6 for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create the full path to Player 2's dice image
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Select the second <img> element (Player 2's dice) and set its src
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Decide the winner and update the <h1> heading based on the dice roll

// Determine if Player 1's number is greater than, less than, or equal to player 2
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "👑Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "👑Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
