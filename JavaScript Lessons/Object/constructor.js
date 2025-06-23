

function Chef(name, title, specialty, yearsExperience) {
    this.name =name
    this.title =title
    this.specialty =specialty
    this.yearsExperience=yearsExperience
    this.customer =function() {
        console.log (`As a ${this.title}, Im cooking up a delicious ${dish}!`);
    }

    };

    var chef1 = new Chef("tou", "chef", "cook", 7);

    chef1.customer();