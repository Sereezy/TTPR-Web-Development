var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var filePath = `./images/dice${randomNumber1}.png`;

var file = `./images/dice${randomNumber2}.png`;

document.querySelectorAll("img")[0].setAttribute("src", filePath);

document.querySelectorAll("img")[1].setAttribute("src", file);

console.log(randomNumber1);
