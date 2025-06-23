var audio = new Audio("./sounds/crash.mp3");
var audio1 = new Audio("./sounds/kick-bass.mp3");
var audio2 = new Audio("./sounds/snare.mp3");
var audio3 = new Audio("./sounds/tom-1.mp3");
var audio4 = new Audio("./sounds/tom-2.mp3");
var audio5 = new Audio("./sounds/tom-3.mp3");
var audio6 = new Audio("./sounds/tom-4.mp3");
var list = [
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
];
var listA = [audio, audio1, audio2, audio3, audio4, audio5, audio6];
var letterlist = ["w", "a", "s", "d", "j", "k", "l"];

// for(let i=0; i<listA.length;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){listA[i].play();
//         document.querySelectorAll("button")[i].classList.toggle("pressed") ;
//         this.style.color="orange";

//         })

// }
for (let i = 0; i < listA.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("keydown", function (event) {
    listA[i].play();
    //document.querySelectorAll("button")[i].classList.toggle("pressed");
    this.style.color = "orange";
    var button = this.style.innerHTML;
    switch (event.key) 
    {
      case "w":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
    case "a":
        var audio1 = new Audio("./sounds/tom-1.mp3");
        audio1.play();
        break;
    case "s":
        var audio2 = new Audio("./sounds/snare.mp3");
        audio2.play();
        break;
    case "d":
        var audio3 = new Audio("./sounds/tom-4.mp3");
        audio3.play();
        break;
    case "j":
        var audio4 = new Audio("./sounds/tom-2.mp3");
        audio4.play();
        break;
        case "k":
        var audio5 = new Audio("./sounds/tom-3.mp3");
        audio5.play();
        break;
        case "l":
        var audio6 = new Audio("./sounds/crash.mp3");
        audio6.play();
        break;
        default:
            console.log(button);
    }
    buttonAnimation(event.key);
  });
  
}
document.addEventListener("keydown",function(event){
  switch (event.key) 
    {
      case "w":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
      case "a":
        var audio1 = new Audio("./sounds/tom-1.mp3");
        audio1.play();
        break;
      case "s":
        var audio2 = new Audio("./sounds/snare.mp3");
        audio2.play();
        break;
      case "d":
        var audio3 = new Audio("./sounds/tom-4.mp3");
        audio3.play();
        break;
      case "j":
        var audio4 = new Audio("./sounds/tom-2.mp3");
        audio4.play();
        break;
       case "k":
        var audio5 = new Audio("./sounds/tom-3.mp3");
        audio5.play();
        break;
      case "l":
        var audio6 = new Audio("./sounds/crash.mp3");
        audio6.play();
        break;
        default:
            console.log(button);
    }
    buttonAnimation(event.key);
})
function buttonAnimation(key){
  document.querySelector("."+key).classList.toggle("pressed")
  setTimeout(function(){document.querySelector("."+key).classList.toggle("pressed");}, 60);
}


