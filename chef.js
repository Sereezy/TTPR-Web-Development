function Chef(name, title, speciality, yearsExp)
{
    this.name = name
    this.title = title
    this.speciality = speciality
    this.yearsExp = yearsExp

    this.cookDish = function(dish){
        console.log(`As a ${this.title}, I'm cooking up a delicious ${dish}! `)
    }
}

var chef01 =  new Chef("Rob", "Sous Chef", "Guyanese Quisine", 10)
chef01.cookDish("Chicken Curry")

