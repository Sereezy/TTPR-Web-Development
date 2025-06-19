// function handleClick() {
//     alert("I got clicked!");
//   }

//   for (var i =0 ;i < document.querySelectorAll(".drum").length;i++)
  
//     for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
//         document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
//         // alert("I got clicked!");
//         sound().Audio
//         )};

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      const buttonKey = this.innerHTML.toLowerCase();
      playSound(buttonKey);
    });
  }
  
  
  document.addEventListener("keydown", function (event) {
    const pressedKey = event.key.toLowerCase();
    playSound(pressedKey);
  });


function playSound(key){

switch(key)
{
case "w":

new Audio ("sounds/tom-1.mp3").play();
break;
case "a":

new Audio ("sounds/tom-2.mp3").play();
break;
case "s":

new Audio ("sounds/tom-3.mp3").play();
break
case "d":

new Audio ("sounds/tom-4.mp3").play();
break;
case "j":

new Audio ("sounds/crash.mp3").play();
break;
case "k":

new Audio ("sounds/kick-bass.mp3").play();
break;
case "l":

new Audio ("sounds/snare.mp3").play();
break;
default:

    // console.log(key)

}}