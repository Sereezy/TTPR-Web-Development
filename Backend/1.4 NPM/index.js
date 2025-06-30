/*
    use the inquire npm package to ask the user their name

    randomly choose a quote from a small predefined list (3-5 strings)

    Display the quote in the terminal usering their name 
    "serena, remember: you miss 100% of the shots you dont take."

    Save the final message in a text file called quote.txt
*/
import inquirer from 'inquirer';
import fs from 'fs';

const quotes = [
    "You miss 100% of the shots you don't take",
    "Success is not in waht you have, but who you are"
]

inquirer
    .prompt([
        {
            message: "What's your name?",
            name: "Name"
        }])
    .then((answers) =>{
        let randomNum = Math.floor(Math.random() * quotes.length);
        let quote = quotes[randomNum];
        const Name = answers.Name;
        const finalQuote = Name + ", " + quote;
        fs.writeFile("test.txt", finalQuote, (err) => {
            if (err)throw err;
            console.log(Name + ", " + quote);
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
          console.log("error couldnt be loaded");
        } else {
          // Something else went wrong
        }
      });
