import inquirer from "inquirer";
import fs from "fs";

const quotes = [
    "Never give up, even when you fail.", 
    "The light is at the end of the tunnel.", 
    "Work hard now, success you shall receive later."
];

inquirer
    .prompt([
        {
            name: "name",
            message: "What's Your Name?",
        },
    ])
    .then((answers) => {
        const userName = answers.name;

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        const finalMessage = `${userName}, remember: ${randomQuote}`;

        console.log(finalMessage);

        fs.writeFile("Quote.txt", finalMessage, (err) => {
            if (err) throw err;
            console.log("Your quote has been saved to Quote.txt!");
        });
    })
    .catch((error) => {
        console.error("Something went wrong:", error);
    });
