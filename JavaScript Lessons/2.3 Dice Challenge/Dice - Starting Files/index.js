var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImg2 = "dice" + randomNumber2 + ".png";

document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/" + randomImg2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Won";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Won";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
