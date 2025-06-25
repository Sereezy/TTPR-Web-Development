import generateName from "sillyname";
import superheroes from "superheroes";

const sillyName = generateName();
console.log("Your silly name is: " + sillyName);

const heroName = superheroes();
console.log("I am " + heroName + "!");
