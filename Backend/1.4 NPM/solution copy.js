// Import required packages
import inquirer from "inquirer";
import fs from "fs";            

const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts",
  "Success is walking from failure to failure with no loss of enthusiasm."
];

inquirer
  .prompt([
    {
      name: "name",
      message: "What's your name?",
    },
  ])
  .then((answers) => {
    const userName = answers.name;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const finalMessage = `${userName}, remember: ${randomQuote}`;
    console.log(finalMessage);
    fs.writeFile("quote.txt", finalMessage, (err) => {
      if (err) throw err;
      console.log("Your quote has been saved to quote.txt!");
    });
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });

