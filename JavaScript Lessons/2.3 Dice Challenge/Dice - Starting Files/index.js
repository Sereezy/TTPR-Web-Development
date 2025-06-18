// Random number for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
console.log(randomDiceImage1)

// Random number for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// Update dice images
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// Update heading based on winner
var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = " Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.innerHTML = "Player 2 Wins! ";
} else {
  heading.innerHTML = "Draw!";
}
