/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    {
      message: "url?",
      name: "URL",
    },
  ])
  .then((answers) => {
    var ulr = answers.URL;
    var qr_svg = qr.image("url");
    qr_svg.pipe(fs.createWriteStream("QR.png"));
    fs.writeFile("link.txt", ulr, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
