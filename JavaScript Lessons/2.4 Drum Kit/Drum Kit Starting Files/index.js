var audioList = [
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
  "sounds/snare.mp3",
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
];

var drums = document.querySelectorAll(".drum");
for (let i = 0; i< drums.length; i++) {
    drums[i].addEventListener("click", function () {
        var audio = new Audio(audioList[i]); console.log("Hi")
        audio.play();
  });
}
