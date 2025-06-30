/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
const inquirer = require("inquirer");
const qr = require("qrcode");
const fs = require("fs");

inquirer
  .prompt([
    {
      name: "url",
      message: "Enter the URL to generate a QR code:",
    },
  ])
  .then((answers) => {
    const url = answers.url;


    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log(" URL saved to URL.txt");
    });

  
    qr.toFile("qr_image.png", url, (err) => {
      if (err) throw err;
      console.log("QR Code saved as qr_image.png");
    });
  })
  .catch((error) => {
    console.error(" An error occurred:", error);
  });