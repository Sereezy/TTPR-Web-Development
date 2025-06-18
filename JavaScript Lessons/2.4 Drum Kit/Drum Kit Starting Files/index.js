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

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // Play sound
    const audio = new Audio("sounds/" + sounds[i]);
    audio.play();

    // Toggle background
    document.body.classList.toggle("pink-back");
  });
}
