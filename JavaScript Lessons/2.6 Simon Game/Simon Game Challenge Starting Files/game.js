//console.log($("h1").css("font-size"));

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id")

    userClickedPattern.push(userChosenColour);

    setTimeout(playSound(userChosenColour), 2000)
    

    //nextSequence()

});

function nextSequence(){
    var randomNum = Math.floor((Math.random() * 4))
    randomChosenColour = buttonColours[randomNum]
    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour)

    
}

function playSound(playList){
    var audio = new Audio("sounds/" + playList + ".mp3");
    audio.play();
}

nextSequence();
