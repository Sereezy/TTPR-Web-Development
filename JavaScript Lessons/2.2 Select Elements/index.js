/*
Change the background color of the button to red.
Change the text color of the button to be white.
Change the text of the title to say Goodbye World
Change the text inside the anchor tag to be pink
Change the "Second" list item to be purple
*/
document.querySelector(".btn").style.backgroundColor = "red";
document.querySelector(".btn").style.color = "white";
document.querySelector("#title").innerText = "Goodbye World";
document.getElementsByTagName("a")[0].style.color = "blue"; 
document.querySelectorAll(".item")[1].style.color = "purple";
document.querySelector("h1").classList.add("huge")