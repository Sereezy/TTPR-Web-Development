var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector("img").setAttribute("src","./images/dice"+ randomNumber1 + ".png")
document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+ randomNumber2 + ".png")