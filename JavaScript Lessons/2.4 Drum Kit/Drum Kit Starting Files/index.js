function handleClick() {
    alert("I got clicked!");
}

document.querySelector(".w").addEventListener("click", handleClick)
document.querySelector(".a").addEventListener("click", handleClick)

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play()
    })
}
for(var i =0; i <document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        console.log(this.style.color = "orange");
    })
}



function makeSound(key) {
    switch(key) {
        case"w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            case"s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            case"d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
            break;
            case"j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
            case"k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
            case"l":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
            default:
                console.log(button);
        
    }
}
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button = this.innerHTML;
    console.log(this.style.color = "orange");
    makeSound(button);
    buttonAnimation(button);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});



function buttonAnimation(currentKey) {
 var activeButton = document.querySelector("." + currentKey);
 activeButton.classList.add("pressed");
 console.log('keydown is working')
 setTimeout(function() {
   activeButton.classList.remove("pressed");
 }, 1000);
}


 


