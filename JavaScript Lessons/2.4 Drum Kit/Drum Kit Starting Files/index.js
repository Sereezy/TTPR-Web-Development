let body = document.getElementsByTagName("body")[0];
let drums = document.querySelectorAll(".drum");
const keys = ["w", "a", "s", "d", "j", "k", "l"];

const sounds = [
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3",
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
    "sounds/snare.mp3"
];

const colors = [
    "darkred",
    "darkblue",
    "purple",
    "aqua",
    "deepskyblue",
    "gold",
    "forestgreen"
];

//when the drums are clicked
for (let i = 0; i < drums.length; i++){
    drums[i].addEventListener("click", function(){
        body.style.backgroundColor = colors[i];
        var audio = new Audio(sounds[i]);
        audio.play();
    });
}    

document.addEventListener("keydown", function (event) {
    let keyPressed = event.key.toLowerCase();
    let index = keys.indexOf(keyPressed);
    console.log(index)
    if (index !== -1) {
        playDrum(index);
        
    }
});

function playDrum(index) {
    body.style.backgroundColor = colors[index];
    let audio = new Audio(sounds[index]);
    drums[index].classList.add("pressed");
    setTimeout(() => {
        drums[index].classList.remove("pressed");
    }, 500)
    
    audio.play();
}