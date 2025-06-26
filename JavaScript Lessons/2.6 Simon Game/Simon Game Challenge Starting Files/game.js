// alert ("I'm Here");

var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);

  checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

var started = false;

var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level" + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

function playSound(name) {
  //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
  }
}
