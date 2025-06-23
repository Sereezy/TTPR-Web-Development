//var numberOfDrumButtons = document.querySelectorAll(".drum").length;

/*for (var i = 0; i< numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        // buttonAnimation(buttonInnerHTML);
    });
}*/

for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var button = this.innerHTML;
    //compress the button to each case statement
  
    makeSound(button);
    this.style.color = "orange";  //change color of the initials 
    //we can access its properties using 'this'
  });
}
    //add an event listener to the entire document so that the entire web page listens for keypresses.
document.addEventListener("keydown", function(event){
    makeSound(event.key)
});




    
    function makeSound(key){
  
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
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "k":
            var crash = new Audio("sounds/crash.mp3")
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


// function buttonAnimation(currentKey) {

//   var activeButton = document.querySelector("." + currentKey);

//   activeButton.classList.add("pressed");

//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);

// }
