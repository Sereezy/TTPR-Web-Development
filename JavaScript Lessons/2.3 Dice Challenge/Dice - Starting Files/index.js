
//right dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // sets random number between 1 and 6 -- math.floor rounds, math.random randomizes 
console.log(randomNumber1);

var randomDiceImg = "dice" + randomNumber1 + ".png"; //determines img based off of randomNumber1
var randomDiceImgSrc = "images/" + randomDiceImg; //calls the source with images/

var img1 = document.querySelector("img"); //chooses the left img element from index aka the first img element 
img1.setAttribute("src", randomDiceImgSrc); //set attribute of img1 to whatever randomDiceImgSrc is set to 


//left dice
var randomNumber2 = Math.round(Math.random() * 6) + 1; 
console.log(randomNumber2);

var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomDiceImgSrc2 = "images/" + randomDiceImg2;

var img2 = document.querySelectorAll("img")[1]; //chooses the right img element from index
img2.setAttribute("src", randomDiceImgSrc2);

//text
var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    docmument.querySelector("h1").innerHTML = "👑 Player 1 Wins!";
} if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "👑 Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
