function handleClick() {
    alert("I got clicked!");
  }
  document.querySelectorAll(".drum").forEach(function(drumElement) {
    drumElement.addEventListener("click", function() {
      alert("I got clicked!");
    });
  });

  for(var i = 0; i < document.querySelectorAll(".drum").length; i++){

  }

  
  for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
      document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      alert("I got clicked!");
  })
  }
  
  for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play()
})
}

  
  document.querySelectorAll(".drum").forEach(function(button) {
    button.addEventListener("click", function() {
      this.style.color = "orange";
      console.log(this.style.color);
    });
  });
  

  document.querySelectorAll(".drum").forEach(function (button) {
    button.addEventListener("click", function () {
      var key = this.innerHTML;

      switch (key) {
        case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
          default:
          break;
      }
    });
  });




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
  
  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
   }
   

   function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
  
    requestAnimationFrame(function() {
      setTimeout(function() { 
        activeButton.classList.remove("pressed");
      }, 100);
    });
  }
  

 