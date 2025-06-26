import inquirer from "inquirer";
import fs from "fs";    

inquirer
  .prompt([
    {
        message: "What is your name",
        name: "name"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); 