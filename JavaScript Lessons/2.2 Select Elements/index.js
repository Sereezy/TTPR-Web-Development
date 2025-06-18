/*
Change the background color of the button to red.
Change the text color of the button to be white.
Change the text of the title to say Goodbye World
Change the text inside the anchor tag to be pink
Change the "Second" list item to be purple
*/

document.querySelector("button.btn").style["background-color"] = "red";
document.querySelector("button.btn").style.color = "white";
document.querySelector("button.btn").innerHTML = "Goodbye World";
document.querySelector("a").style["color"] = "pink";
document.querySelectorAll("#item")[1].style["color"] = "purple";



