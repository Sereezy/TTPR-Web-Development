var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImage = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
    

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!!";
}




console.log(rollDice());