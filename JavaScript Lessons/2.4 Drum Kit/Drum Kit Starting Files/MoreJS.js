function Chef (name, title, specialty, yearsExperience) {
    this.name = name
    this.title = title
    this.specialty = specialty
    this.yearsExperience = yearsExperience
    this.cookDish = function(dish) 
                    {console.log(`As a ${this.title}, I'm cooking up a delicious ${dish}!`)};
}

var chef1 = new Chef("Lucia", "Sous Chef", "Italian Cuisine", 8);
chef1.cookDish("lasagna");


/*
document.addEventListener("keydown", 
    function(event){
        console.log(event)
})
*/


function makeSound(key){
    switch (key) {
    case "w":
        var w = new Audio("sounds/crash.mp3")
        w.play()
        break;
    case "a":
        var a = new Audio("sounds/kick-bass.mp3")
        a.play()
        break;
    case "s":
        var s = new Audio("sounds/snare.mp3")
        s.play()
        break;
    case "d":
        var d = new Audio("sounds/tom-1.mp3")
        d.play()
        break;
    case "j":
        var j = new Audio("sounds/tom-2.mp3")
        j.play()
        break;
    case "k":
        var k = new Audio("sounds/tom-3.mp3")
        k.play()
        break;
    case "l":
        var l = new Audio("sounds/tom-4.mp3")
        l.play()
        break;
    deafult:
        console.log(button)
    }
}


for (i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            var button = this.innerHTML
            makeSound(button)
        })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    console.log(event.key);
})

/*
for (i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        this.classList.add("pressed")
    })
}
*/


function buttonPressed (press){
    var selected = document.querySelector("." + press);
    selected.classList.add("pressed");

    setTimeout(function() {
        selected.classList.remove("pressed");
    }, 100);
}


document.addEventListener("keydown", function(event){
    buttonPressed(event.key);
})


/*
setTimeout(funtion() {

}, 100);
;
*/