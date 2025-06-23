// function handleClick() {
// alert("I got clicked!");
//}

//document.querySelector(".set").addEventListener("click", handleClick)

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  //document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  //console.log(this.style.color = "orange");

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    //compares the button to each case statement
    switch (button) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();

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
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "k":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default:
        console.log(button);
    }
  });
}

// document.addEventListener("keydown", function () {
//   alert("Key was pressed");
// });

document.addEventListener("keydown", (key) => {
  console.log('im here');
  switch (key.key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play()
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
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
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
      console.log('test');
  }
});

function pressKey(key) {
  console.log('im here');
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      setTimeout(tom1.play(), 15000);
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
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
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

document.addEventListener("keydown", (e)=> {
buttonAnimation(e.key); 
})

function buttonAnimation (currentkey){
var activeButton = document.querySelector("." + currentkey) ;
activeButton.classList.add("pressed"); 

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 15000);
}
