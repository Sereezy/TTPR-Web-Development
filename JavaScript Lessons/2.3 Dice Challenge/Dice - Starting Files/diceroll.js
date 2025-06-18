var randomNumber1 = Math.round(Math.random() * 5) + 1
var randomNumber2 = Math.round(Math.random() * 5) + 1



document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`)


document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`)

if (randomNumber1 > randomNumber2) {
    document.querySelector("footer").innerHTML = "Player One Wins!"
} else if (randomNumber2 > randomNumber1) {
     document.querySelector("footer").innerHTML = "Player Two Wins!"
} else {
     document.querySelector("footer").innerHTML = "Draw!"
}