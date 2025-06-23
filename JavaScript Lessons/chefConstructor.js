function Chef(name, title, speciality, yearsExperience) {
    this.name = name;
    this.title = title;
    this.speciality = speciality;
    this.yearsExperience = yearsExperience;
    this.cookDish = function () {
        console.log(`As a ${this.title}, I'm cooking up a delicious ${dish}!`);
    }
}