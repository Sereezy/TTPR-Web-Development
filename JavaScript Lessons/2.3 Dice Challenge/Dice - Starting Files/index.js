var randomNum = (Math.floor(Math.random() * 6 ) + 1 );
console.log(randomNum);
// const leftDiceImage = document.querySelector(".left-dice");
var filePath1 = `./images/dice${randomNum}.png`;
console.log(filePath1);
document.querySelector(".img1").setAttribute("src", filePath1);


var randomNum2 = (Math.floor(Math.random() * 6 ) + 1 );
console.log(randomNum2);
// const leftDiceImage = document.querySelector(".left-dice");
var filePath2 = `./images/dice${randomNum2}.png`;
console.log(filePath1);
document.querySelector(".img2").setAttribute("src", filePath2);

if(randomNum>randomNum2)
{
    document.querySelector("h1").textContent = "Player 1   WINNER!!"
    document.querySelector("h1").style.fontSize = "5rem"; 
}
else
{
    document.querySelector("h1").textContent = "Player 2    WINNER!!"
    document.querySelector("h1").style.fontSize = "5rem"; 
}