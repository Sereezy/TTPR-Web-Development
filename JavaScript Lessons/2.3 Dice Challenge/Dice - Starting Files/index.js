var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var filePath1 = `./images/dice${randomNumber1}.png`
console.log(filePath1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var filePath2 = `./images/dice${randomNumber2}.png`
console.log(filePath2);


document.querySelector(".img1").setAttribute("src", filePath1);
document.querySelector(".img2").setAttribute("src", filePath2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Winner: Player 1";
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "Winner: Player 2";

}
else {
    document.querySelector("h1").innerHTML= "Draw!"

}