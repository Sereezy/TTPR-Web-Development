function Chef ( name, title, specialty, yearsExperience) {
    this.name = name;
    this.title = title;
    this.specialty = specialty;
    this. yearsExperience = yearsExperience;

    this.cookDish = function(dish){
        console.log(`As a ${this.title}, I'm cooking up a delicious ${dish}! `);
    }
}

var chef1 = new Chef( "Jeremy", "Head Chef", "Indian Food", "17" );
chef1.cookDish("Biryani");

