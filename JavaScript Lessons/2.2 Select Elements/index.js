/*
Change the background color of the button to red.
Change the text color of the button to be white.
Change the text of the title to say Goodbye World
Change the text inside the anchor tag to be pink
Change the "Second" list item to be purple
*/

document.querySelector(".btn").style.backgroundColor = "red";
document.querySelector(".btn").style.color = "white";
document.querySelector("#title").innerHTML = "Goodbye World";
document.querySelector("li a").style.textDecoration = "blue";
document.querySelector("li:nth-child(2)").style.color = "red";
// document.querySelectorAll("li:nth-child(5)").style.color = "red";

const test = document.querySelectorAll(".list")
const listTwo = test[1].children[0]
console.log(listTwo)

const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  document.body.classList.toggle("pink-background");
});
    