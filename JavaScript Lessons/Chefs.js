function Chef (name, title, specialty, yearsExperience) {
this.name = name;
this.title = title;
this.specialty = specialty;
this.yearsExperience = yearsExperience;

this.cookDish = function (dish) {
    console.log(`As a ${this.title}, I'm cooking up a delicious ${dish}!`);
};
}

var chef1 = new Chef ("Sandra", "Pastry Chef", "French Cuisine", 10);

chef1.cookDish("Macaron");