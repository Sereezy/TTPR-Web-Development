
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


let randomDiceImage1 = "dice" + randomNumber1 + ".png";
let randomDiceImage2 = "dice" + randomNumber2 + ".png";


let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");


image1.setAttribute("src", "images/" + randomDiceImage1);
image2.setAttribute("src", "images/" + randomDiceImage2);


let heading = document.querySelector("h1");


if (randomNumber1 > randomNumber2) {
  heading.innerHTML = " Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.innerHTML = "Player 2 Wins! ";
} else {
  heading.innerHTML = "Draw!";
}
