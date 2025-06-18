function handleClick() {
  alert("I got clicked!");
}

document.querySelector("button").addEventListener("click", handleClick)

document.querySelector("button").addEventListener("click", function() {
    alert("I got clicked!");
})

for(var i = 0; i < document.querySelectorAll(".drum").length;
i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var audio = new Audio ("sounds\tom-1.mp3")
        audio.play()
    }) 
}

const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  document.body.classList.toggle("pink-background");
});

var audio = new Audio("audio_file.mp3")
audio.play()