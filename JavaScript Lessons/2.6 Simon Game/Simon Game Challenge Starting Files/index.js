var buttonColors = ["red", "blue", "yellow", "green"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function(event){
    if (!started){
        $("#level-title").text("level " + level);
        nextSequence();
        started = true;
    }
        
})

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor); 
    animatePress(userChosenColor);
    checkAnswers(userClickedPattern.length-1)
});

function nextSequence(){
    level++;
    $("#level-title").text("level " + level);

    userClickedPattern = [];
    var randomNum = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    
    $("#"+currentColor).addClass("pressed")    
    setTimeout(() => {
        $("#"+currentColor).removeClass("pressed");
    }, 100)
}

function checkAnswers(currentLevel){
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("sucess");
        if (userClickedPattern.length == gamePattern.length){
            setTimeout(function(){
                nextSequence()
            }, 1000)
    }   
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 200)
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}