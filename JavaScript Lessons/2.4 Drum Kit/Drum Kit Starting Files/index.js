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
for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    var audio = new Audio(audioList[i]);

    console.log("Hi");
    audio.play();
    
    var button = this.innerHTML;
    switch (button) {
      case "w":
        var tom1 = new Audio("sounds/crash.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/kick-bass.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/snare.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-1.mp3");
        tom4.play();
        break;

      case "j":
        var tom5 = new Audio("sounds/tom-2.mp3");
        tom5.play();
        break;

      case "k":
        var tom6 = new Audio("sounds/tom-3.mp3");
        tom6.play();
        break;

      case "l":
        var tom7 = new Audio("sounds/tom-4.mp3");
        tom7.play();
        break;

        default: console.log();
    }
  });
}
function playSound(key){
      switch (key) {
      case "w":
        var tom1 = new Audio("sounds/crash.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/kick-bass.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/snare.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-1.mp3");
        tom4.play();
        break;

      case "j":
        var tom5 = new Audio("sounds/tom-2.mp3");
        tom5.play();
        break;

      case "k":
        var tom6 = new Audio("sounds/tom-3.mp3");
        tom6.play();
        break;

      case "l":
        var tom7 = new Audio("sounds/tom-4.mp3");
        tom7.play();
        break;

        default: console.log();
    }
}


document.addEventListener("keydown", function(event) {
  let keypress = event.key.toLowerCase()
  playSound(keypress);
  buttonAnimation(keypress)
 
});


function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function(){activeButton.classList.remove("pressed")}), 3000;
  
  console.log("class was removed")   
}



