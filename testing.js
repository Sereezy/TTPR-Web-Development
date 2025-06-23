function Chef(name, title, speciality, yearsExperience) {
    this.name = name; 
    this.title = title; 
    this.speciality = speciality;
    this.yearsExperience = yearsExperience;
    
    this.cookDish = function(dish)  {
        console.log(`As a ${this.title}, I'm cooking up a delicious ${dish}! `);
    };
}

var chef1 = new Chef("Lucia", "Sous Chef", "Italian Cuisine", 8);
chef1.cookDish("lasagna");

var chef2 = new Chef("Riley", "Head Chef", "Jamaican Cuisine", 10);
chef2.cookDish("jerk chicken");