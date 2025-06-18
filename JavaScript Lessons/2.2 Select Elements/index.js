/*
Change the background color of the button to red.
Change the text color of the button to be white.
Change the text of the title to say Goodbye World
Change the text inside the anchor tag to be pink
Change the "Second" list item to be purple
*/

document.querySelector(".btn").style.backgroundColor = "red";
document.querySelector(".btn").style.color = "white";
document.querySelector("h1").innerHTML = "Goodbye World"
document.querySelectorAll("#list .item")[1].style.color = "purple"

document.querySelector("h1").classList.add("huge")
document.querySelector("h1").classList.remove("huge")
document.querySelector("h1").classList.toggle("huge")