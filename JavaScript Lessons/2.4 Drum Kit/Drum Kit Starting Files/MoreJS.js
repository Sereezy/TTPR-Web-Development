function Chef (name, title, specialty, yearsExperience) {
    this.name = name
    this.title = title
    this.specialty = specialty
    this.yearsExperience = yearsExperience
    this.cookDish = function(dish) 
                    {console.log(`As a ${this.title}, I'm cooking up a delicious ${dish}!`)};
}

var chef1 = new Chef("Lucia", "Sous Chef", "Italian Cuisine", 8);
chef1.cookDish("lasagna")




function Audio(fileLocation) {
    this.fileLocation = fileLocation;
    this.play = function() {

    }
}

var tom1 = new Audio("./sounds/tom-1.mp3")
    tom1.play();