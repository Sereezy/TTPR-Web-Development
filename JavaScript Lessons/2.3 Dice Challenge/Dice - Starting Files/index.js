console.log("hello")
function diceRoll() {
  var random = Math.floor(Math.random() * 6 ) + 1;
  return random;
}
function chooseImg(imgNo) {
  switch (imgNo) {
    case 1:
      return './images/dice1.png';
    case 2:
      return './images/dice2.png';
    case 3:
      return './images/dice3.png';
    case 4:
      return './images/dice4.png';
    case 5:
      return './images/dice5.png';
    case 6:
      return './images/dice6.png';

    default:
      break;
  }
}

function whoWin(p1, p2) {
  if (p1 > p2) {
    return "👑Player 1 wins"
  }
  else if (p2 > p1) {

    return "👑Player 2 wins"
  }
  return "It's a draw"
}
var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var title = document.querySelector("h1")
title.style.margin = 0
var play1 = diceRoll()
var play2 = diceRoll()
img1.setAttribute("src", chooseImg(play1))
img2.setAttribute("src", chooseImg(play2))


window.onload = function() {
  var play1 = diceRoll()
  var play2 = diceRoll()
  img1.setAttribute("src", chooseImg(play1))
  img2.setAttribute("src", chooseImg(play2))
   title.innerHTML = whoWin(play1,play2) 
  console.log('what')
}

