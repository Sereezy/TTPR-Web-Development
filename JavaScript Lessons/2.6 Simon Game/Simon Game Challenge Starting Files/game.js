// // alert("game.js is connected!");

// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];
// var started = false;
// var level = 0;

// $(document).keypress(function () {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function () {
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   console.log("This is the userClickedPattern.length(checkAnswer())" + userClickedPattern.length -1)
//   checkAnswer(userClickedPattern.length-1)
// });



// function nextSequence() {
//   level++;
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//   $("#" + randomChosenColour)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100);

//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function checkAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     console.log("success");

//     if (userClickedPattern.length === gamePattern.length) {
//       setTimeout(function () {
//         nextSequence();
//       }, 1000);
//     }
//   } else {
//     console.log("wrong");
//   }
// }

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });


// function nextSequence() {

//   userClickedPattern = [];

// }

// nextSequence();


let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let blue = new Audio("./sounds/blue.mp3");
let green = new Audio("./sounds/green.mp3");
let red = new Audio("./sounds/red.mp3");
let yellow = new Audio("./sounds/yellow.mp3");
let colors = [red, blue, green, yellow];
let level = 1;
$(document).keypress(function (event) {
  if (event.key === "a") {
    level++;
    startGame();
  }
  if (event.key === "l") {
    level = 1;
    startGame();
  }
});
function startGame() {
  gamePattern = [];
  userPattern = [];
  let count = 0;
  let interval = setInterval(function () {
    //delay each call of making pattern
    count++;
    nextSequence();
    if (count === level) {
      clearInterval(interval);
    }
  }, 1800);
}
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor); //make random color sequence
  colors[randomNumber].play();
  $("#" + randomChosenColor) //animate pattern
    .fadeTo(1000, 0.1)
    .fadeTo(1000, 1);
  $("div[type='button']").text("Push me!");
}

console.log(gamePattern);

for (let i = 0; i < colors.length; i++) {
  // add on click to each button
  $("#" + buttonColors[i]).on("click", function () {
    colors[i].play(); //play color sound
    let element = $(this).attr("id");
    userPattern.push(element); //track what button clicked
    $("#" + buttonColors[i]) //animate pattern
      .fadeTo(100, 0.1)
      .fadeTo(100, 1);
    //check if sequence matches from one generated
    if (gamePattern.length === userPattern.length) {
      let doBreak = false;
      for (let j = 0; j < gamePattern.length; j++) {
        if (gamePattern[j] !== userPattern[j]) {
          doBreak = true;
          let wrong = new Audio("./sounds/wrong.mp3");
          wrong.play();
          $("div[type='button']").text("Wrong!");
          level--;
          break;
        }
      }
      if (doBreak == true) {
      } else {
        $("div[type='button']").text("You Win!");
      }
    }
  });
}

