function Chef(name, title, specialty, yearsExperience){
    this.name = name;
    this.title = title;
    this.specialty = specialty;
    this.yearsExperience = yearsExperience;
    this.cookingMethod = function(dish){
        console.log(`As a ${title}, I am very proficient in making ${specialty}, my signature dish.`)
    }
}

var chef1 = new Chef("Gordan", "Executive Chef", "French Cuisine", 20);

chef1.cookingMethod(chef1.specialty);