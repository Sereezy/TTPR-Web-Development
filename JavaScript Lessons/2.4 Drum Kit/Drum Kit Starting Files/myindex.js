function handleClick() {
  alert("I got clicked1");
}
document.querySelector("button").addEventListener("click", handleClick);

ocument.querySelector("button").addEventListener("click", function () {
  alert("I got clicked!");
});

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    console.log((this.style.color = "orange"));
  });
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    console.log(this.innerHTML); // Logs the button's text content
  });
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    //compares the button to each case statement
    function makeSound (key) {
      
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
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "k":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "l":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;

      default:
        console.log(key);
    }
  }


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var button = this.innerHTML;
  makeSound(button);
});
}
 document.addEventListener("keydown", function (event) {
  makeSound(event.key);
 });
function chef (name, title, specialty, yearsExperience) {
  this.name = name;
  this.title = title;
  this.specialty = specialty;
  this.yearsExperience = yearsExperience;
  this.cookDish = function(dish) {
    console.log(`As a ${this.title}, i'm cooking up a delicious ${dish}!`);
  };
}
var chef1 = new chef("john", "sushi", "sushi", 12 );
chef1.cookDish("sushi");
document.addEventListener("keydown", function() {
  alert("key was pressed");
})

document.addEventListener("keydown", function(event){
    console.log(event)
})
  
function buttonAnimation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

 setTimeout (function () {
  activeButton.classList.remove("pressed"); 
}, 100);
 }
fv
