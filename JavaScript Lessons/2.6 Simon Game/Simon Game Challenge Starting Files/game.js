//console.log($("h1").css("font-size"));

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var start = false;

var level = 0;

$(".btn").click(function () {
  if (start) {
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);

    playSound(userChosenColour);

    checkAnswer(level);
  }
});

$(document).keypress(function (event) {
  if (event.key == "a" && !start) {
    gameStart();

    nextSequence();
  }
});

function gameStart() {
  buttonColours = ["red", "blue", "green", "yellow"];

  gamePattern = [];

  userClickedPattern = [];

  start = true;
}

function checkAnswer(currentLevel) {
  //console.log(userClickedPattern.length)
  if (userClickedPattern.length == currentLevel + 1) {
    //console.log({player:userClickedPattern, game:gamePattern})
    if (userClickedPattern.join() === gamePattern.join()) {
      level++;

      setTimeout(nextSequence(), 10000);

      userClickedPattern = [];
    } else {
      var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();

      start = false;

      gamePattern = [];

      userClickedPattern = [];

      level = 0;

      $("#level-title").text("Press A Key to Start");
    }
  }
}

function nextSequence() {
  $("#level-title").text(`Level ${level}`);

  var randomNum = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNum];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function playSound(playList) {
  var audio = new Audio("sounds/" + playList + ".mp3");
  audio.play();
}
