/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* What is your link*/
    {
        message: "Enter the link to get QR: ", //Question

        name: "URL",                           //Store Answer
    },

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!

    var url = answers.URL; //Retrieve the url data from the prompt
    var qr_svg = qr.image(url)  //Covert url into QR and save it in qr_svg
    qr_svg.pipe(fs.createWriteStream("qr_img.png")); //

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("File is save!");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });