// const sounds = [
//   "crash.mp3",
//   "kick-bass.mp3",
//   "snare.mp3",
//   "tom-1.mp3",
//   "tom-2.mp3",
//   "tom-3.mp3",
//   "tom-4.mp3",
// ];
// const button = document.querySelectorAll(".drum");
// function handleClick(i) {
//   button[i].addEventListener("click", function () {
//     document.body.classList.toggle("pink-back");
//   });
//   return function () {
//     var audio = new Audio("sounds/" + sounds[i]);
//     audio.play();
//   };
// }

// for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   button[i].addEventListener("click", handleClick(i));
// }
// // var audio = new Audio(sounds[i]);

// // audio.play();
const sounds = [
  "crash.mp3",
  "kick-bass.mp3",
  "snare.mp3",
  "tom-1.mp3",
  "tom-2.mp3",
  "tom-3.mp3",
  "tom-4.mp3",
];
const buttons = document.querySelectorAll(".drum");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     // Play sound
//     const audio = new Audio("sounds/" + sounds[i]);
//     audio.play();

//     // Toggle background
//     document.body.classList.toggle("pink-back");
//     this.style.color = "orange"
//   });
// }

function noise(button) {
  //compares the button to each case statement
  switch (button) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
  }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    noise(button);
    buttonAnimation(button);
  });
}

document.addEventListener("keydown", function (event) {
  noise(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 200);
}
