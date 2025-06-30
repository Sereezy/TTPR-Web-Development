// Import required packages
import inquirer from "inquirer"; // For asking the user their name
import fs from "fs";             // Native Node module to write the message to a file

// Define a list of motivational quotes
const quotes = [
  "You miss 100% of the shots you don’t take.",
  "Believe you can and you're halfway there.",
  "The best way to get started is to quit talking and begin doing.",
  "Success is not in what you have, but who you are.",
  "Don't watch the clock; do what it does. Keep going."
];

// Prompt the user for their name
inquirer
  .prompt([
    {
      name: "name",
      message: "What's your name?",
    },
  ])
  .then((answers) => {
    const userName = answers.name;

    // Choose a random quote from the list
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Format the final message
    const finalMessage = `${userName}, remember: ${randomQuote}`;

    // Log the message in the terminal
    console.log(finalMessage);

    // Save the message to a file named quote.txt
    fs.writeFile("quote.txt", finalMessage, (err) => {
      if (err) throw err;
      console.log("Your quote has been saved to quote.txt!");
    });
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });

