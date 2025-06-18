/*
Change the background color of the button to red.
Change the text color of the button to be white.
Change the text of the title to say Goodbye World
Change the text inside the anchor tag to be pink
Change the "Second" list item to be purple
*/
var btn = document.querySelector(".btn")
var ul = document.querySelector("#list")
var li=document.querySelector(".item")
var title = document.querySelector("#title")
var anchor = document.querySelector("li a")

btn.style.backgroundColor = "red"
btn.style.color = "white"
anchor.style.color = "pink"
document.querySelectorAll("#list .item")[1].style.color = "purple"
title.innerHTML = "Goodbye world"

title.classList.add("huge")
anchor.innerHTML = "youtube"
console.log(anchor.attributes)
anchor.setAttribute("href","https://www.youtube.com")
btn.addEventListener('click',()=>{
  document.body.classList.toggle('pink-background')
})
