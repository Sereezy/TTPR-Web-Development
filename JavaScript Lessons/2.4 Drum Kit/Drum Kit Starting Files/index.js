
let instrument = document.querySelectorAll("button");

for (var i = 0; i < instrument.length; i++){
    instrument[i].addEventListener("click", function(){

        //var note = instrument[i].innerHTML;
        //console.log(note);

        var audio = new Audio("sounds/tom-1.mp3")
/*
        if (note == "w"){
            audio = new Audio("sounds/crash.mp3")
        } else if (note == "a"){
            audio = new Audio("sounds/kick.mp3")
        } else if (note == "a"){
            audio = new Audio("sounds/snare.mp3")
        } else if (note == "a"){
            audio = new Audio("sounds/tom-1.mp3")
        } else if (note == "a"){
            audio = new Audio("sounds/tom-2.mp3")
        } else if (note == "a"){
            audio = new Audio("sounds/tom-3.mp3")
        } else if (note == "a"){
            audio = new Audio("sounds/tom-4.mp3")
        }
            */
        audio.play();
    })
}