const buttonColors = ["red", "blue", "green", "yellow"]
let userClickPattern = []
let gamePattern = []
let started = false
let level = 0


$(".btn").click(function() {
  let userChosenColor = this.id
  playAudio(userChosenColor)
  animatePress(userChosenColor)
  userClickPattern.push(userChosenColor)
  checkAnswer(userClickPattern.length - 1)
})
function nextSequence() {
  userClickPattern = [];
  $('h1').text(`level ${level}`)
  level ++;
  let randomNumber = Math.floor(Math.random() * 4)
  let randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor)
  playAudio(randomChosenColor)
  $("#" + randomChosenColor).fadeIn(500).fadeOut(500).fadeIn(500)
}
function playAudio(id) {
  let audio = new Audio("sounds/" + id + ".mp3")
  audio.play()
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed")
  setTimeout(() => { $("#" + currentColor).removeClass("pressed") }, 100)
}
$(document).keypress(function(event) {
  if (event.key == 'a') {
    if (started == false) {
      started = true
      nextSequence()
    }
  }
})

function checkAnswer(currentLevel) {
  console.log(gamePattern, userClickPattern)
  if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
    console.log('success')
    if (userClickPattern.length === gamePattern.length) {
      setTimeout(
        () => { nextSequence(); console.log('next level started') }
        , 1000)
    }

  }
  else {
    playAudio("wrong")
    $("body").addClass("game-over")
    setTimeout(() => { $("body").removeClass("game-over") }, 200);
    $("h1").text("Game over, press any key to restart")
    $(document).keypress(function(event){
      startOver()
    })
    console.log("wrong")
  }

}
function startOver() {
  level = 0
  gamePattern = []
  started = false
}
