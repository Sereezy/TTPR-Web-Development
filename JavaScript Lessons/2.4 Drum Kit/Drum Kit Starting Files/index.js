// // function handleClick() {
// //     alert("I got clicked!");
// // }

// // document.querySelector("button").addEventListener("click", handleClick);

// // document.querySelectorAll(".drum").addEventListemer("click", handleClick);

// // for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
// //     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
// //     var audio = new Audio("sounds/tom-1.mp3")
// //     audio.play()
// // })
// // }

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        console.log(this.style.color = "orange" )
})
}

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var button = this.innerHTML;
//         switch (button) {
//       case "w":
//         var tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         var tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//         break;
//       case "k":
//         var crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//       case "l":
//         var kickBass = new Audio("sounds/kick-bass.mp3");
//         kickBass.play();
//         break;
//       default:
//         console.log(button);
//     }
// });
// document.addEventListener("keydown", function(){
//     alert("Key was pressed")
// })
// }

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    if (activeButton){
        activeButton.classList.add("pressed");
        
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 20000);
    }
}


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      console.log(button);
  }
  
}
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    makeSound(button);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});
