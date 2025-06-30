var randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomImgSRc = "images/dice";
const result = `${randomImgSRc}${randomNumber1}${".png"}`;
console.log(result)

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", result)
