var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

dice1 = "./images/dice" + randomNumber1 + ".png";
dice2 = "./images/dice" + randomNumber2 + ".png";


document.querySelectorAll("img")[0].setAttribute("src", dice1)
document.querySelectorAll("img")[1].setAttribute("src", dice2)

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else {
    console.log("draw")
}