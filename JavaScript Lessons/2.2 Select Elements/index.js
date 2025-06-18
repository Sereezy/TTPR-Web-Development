/*
Change the background color of the button to red.
Change the text color of the button to be white.
Change the text of the title to say Goodbye World
Change the text inside the anchor tag to be pink
Change the "Second" list item to be purple
*/

document.querySelector("button").style.backgroundColor = "red";
document.querySelector("button").style.color = "white";
document.querySelector("h1#title").innerHTML = "Goodbye World";
document.querySelector("li a").style.color = "pink";
document.querySelector("li:nth-child(2)").style.color = "purple";

document.querySelector("h1#title").classList.add("huge");


document.querySelector("a").attributes
document.querySelector("a").getAttribute("href")

const button = document.querySelector(".btn")

button.addEventListener("click", function(){
    document.body.classList.toggle("pink-background")
});