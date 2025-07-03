import inquirer from "inquirer"; // For asking the user their name
import fs from "fs"; 

const quotes = [
    "You miss 100% of the shots you don’t take.",
    "Believe you can and you're halfway there.",
    "The best way to get started is to quit talking and begin doing.",
    "Success is not in what you have, but who you are.",
    "Don't watch the clock; do what it does. Keep going."
  ];

inquirer
  .prompt([{
  name : "name",
  message : "what is your name?",},
  ])

  .then((answers) => {
    const userName = answers.name;

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length )];

    const finalMessage = `${userName} , remember : ${randomQuote}`;

    console.log(finalMessage);

    fs.writeFile("quote.txt", finalMessage, (err) => {
        if (err) throw err;
         console.log("Your quote has been saved to quote.txt!");
      })
  })
  
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });