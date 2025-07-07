function Chef(name, title, specialty, yearsExperience) {
  this.name = name;
  this.title = title; // e.g., "Sous Chef", "Pastry Chef"
  this.specialty = specialty; // e.g., "Italian Cuisine"
  this.yearsExperience = yearsExperience;

  this.cookDish = function(dish) {
    console.log(`As a ${this.title}, I'm cooking up a delicious ${dish}!`);
  };
}

var chef1 = new Chef("Gordon Ramsay", "Head Chef", "French Cuisine", 20);
chef1.cookDish("Coq au Vin");