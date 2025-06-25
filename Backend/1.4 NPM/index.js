import inquirer from "inquirer";
import fs from "fs";

const quote = [
    ", you can do it!", 
    ", don't waver in front of mistake",
    ", be proud of yourself",
    ", you almost succeed",
    ", mistake is the motherhood of success"
]

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "What is your name: ",
      name: "name",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var name = answers.name;
    var random = Math.floor(Math.random() * (quote.length+1));
    var sentence = name + quote[random];

    console.log(sentence);

    fs.writeFile("quote.txt", sentence, (err) => {
        if (err) throw err;
        console.log("Your quote has been saved to quote.txt!");
      });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
