var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var started = false
var level = 0
function onLoad () {  
    localStorage.setItem("playerAnswer", "")  
}

function nextSequence() {
    var answered = false
   
    if (answered === false) {
    var randomNumber = Math.round(Math.random() * 3)
    var randomChosenColour = buttonColours[randomNumber]
    playSound(randomChosenColour)
    }
    console.log(localStorage.getItem('playerAnswer'))
    console.log(randomChosenColour)

    if (localStorage.getItem("playerAnswer") === randomChosenColour) {
    console.log(localStorage.getItem('playerAnswer'))

    answered = true
    level++
    
    $('#level-title').text = `Level ${level}`
}
 }


function checkAnswer() {

}

function animatePress(currentColour) {
    $(currentColour).addClass('pressed')

    setTimeout(function() {$(currentColour).removeClass('pressed')}, 100)
}

function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play()
}

$('.btn').click(function(clicked){
   var userChosenColour = $(clicked.currentTarget).attr('id')
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(clicked.currentTarget)
    localStorage.setItem("playerAnswer", userChosenColour)
    checkAnswer()
})

$(document).keypress(function(event) {
    if (!started) {
        
        $('#level-title').text(`Level ${level}`)
        nextSequence()
        started = true
    }
})