function Chef(name, title, specialty,yearsExperience){
    this.name = name;
    this.title=title;
    this.specialty=specialty;
    this.yearsExperience=yearsExperience;

    this.cookDish= function(dish){
        console.log(`As a ${this.title}, I'm cooking up a delicious ${dish}!`)
    }

}
var guy = new Chef("a", "b", "c", "d")
guy.cookDish("fish")