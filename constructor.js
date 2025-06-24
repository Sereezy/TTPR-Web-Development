function Waiter(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.greetCustomer = function () {
    console.log(`Hello! I'm ${this.name}. Can I get you started with something to drink?`);
  };
}

new Waiter('Jesse', 22, true, ['English', 'Portuguese']).greetCustomer()
