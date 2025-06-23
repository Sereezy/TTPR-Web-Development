function handleClick() {
  alert("I got clicked!");
}

the handleClick() function.

//finds a button, when it is clicked run handleClick()
-document.querySelector("button").addEventListener("click", handleClick)

//using anonymous function
document.querySelector("button").addEventListener("click", function(){
    alert("I got clicked!");
	//what to do
})

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play()
})
}
  