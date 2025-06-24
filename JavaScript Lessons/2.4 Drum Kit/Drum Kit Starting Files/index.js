
let instrument = document.querySelectorAll("button");

function buttonAnimation(key){
    
    let clicked = document.querySelector(`button.${key}`)

    clicked.classList.add("pressed");

    makeSound(key);

    setTimeout(function(){
        clicked.classList.remove("pressed")
    }, 100);

    

}


function makeSound(key){
    switch (key){
        case "w":
            audio = new Audio("sounds/crash.mp3");
            break;

        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;

        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;

        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;

        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;

        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;

        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;

        default:
            audio = new Audio("sounds/tom-1.mp3");
            break;
    }  
    audio.play();
}


document.addEventListener("keydown", function(event){
    var key = event.key;

    buttonAnimation(key);

});

for (var i = 0; i < instrument.length; i++){
    instrument[i].addEventListener("click", function(){

        var note = this.innerHTML;
        //console.log(note);
        
        buttonAnimation(note);
    })
}