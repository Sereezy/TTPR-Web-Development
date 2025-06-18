var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var filePath = "./images/dice" + randomNumber1 + ".png";
console.log(filePath)
document.querySelector(".img1").setAttribute("src", filePath)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var filePath2 = "./images/dice" + randomNumber2 + ".png";
console.log(filePath2)
document.querySelector(".img2").setAttribute("src", filePath2)


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
