

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      buttonAnimation("w");
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      buttonAnimation("a")
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      buttonAnimation("s");
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      buttonAnimation("d");
      break;
    case "j":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      buttonAnimation("j");
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      buttonAnimation("k");
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      buttonAnimation("l");
      break;
    default:
      console.log(button);
  }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    console.log(button);
    makeSound(button);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  console.log(event)
});

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {  activeButton.classList.remove("pressed");}, 100);
    
}
