/*
function addAudio (index, file) {
    document.querySelectorAll("button")[index].addEventListener("click", 
    function(){
        var audio = new Audio(file)
        audio.play()
    }
    )
}

addAudio(0, "./sounds/crash.mp3")
addAudio(1, "./sounds/kick-bass.mp3")
addAudio(2, "./sounds/snare.mp3")
addAudio(3, "./sounds/tom-1.mp3")
addAudio(4, "./sounds/tom-2.mp3")
addAudio(5, "./sounds/tom-3.mp3")
addAudio(6, "./sounds/tom-4.mp3")
*/


function addAudio (button1, file) {
    var buttons = document.querySelectorAll(".drum");
    for (i = 0; i < buttons.length; i++ ){
        if (buttons[i].innerHTML === button1){
            buttons[i].addEventListener("click", 
                function(){
                    var audio = new Audio(file)
                    audio.play()
    }
    )}
}
}

addAudio("w", "./sounds/crash.mp3")
addAudio("a", "./sounds/kick-bass.mp3")
addAudio("s", "./sounds/snare.mp3")
addAudio("d", "./sounds/tom-1.mp3")
addAudio("j", "./sounds/tom-2.mp3")
addAudio("k", "./sounds/tom-3.mp3")
addAudio("l", "./sounds/tom-4.mp3")


for (var i = 0; document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",
    function(){
        console.log(this.style.color= "orange");
    })
}