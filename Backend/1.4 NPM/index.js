import { log } from "console";
import inquirer from "inquirer";
import { queryObjects } from "v8";

const quotes = [
  ", the only limits you have are the ones you set for yourself. Keep pushing forward!",
  ", believe in yourself, because you’re capable of amazing things.",
  ", if life gives you lemons… add tequila and call me!",
  ", your strength doesn’t come from never falling—it comes from rising every time you do.",
  ", the world is brighter because you’re in it. Never forget that.",
];
var randomNumber = Math.floor(Math.random() * 5);
inquirer
  .prompt([
    {
      message: "What is your name?",
      name: "name",
    },
  ])
  .then((answers) => {
    const userName = answers.name;
    const quote = quotes[Math.floor(Math.random() * 5)];
    console.log(userName + quote);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
