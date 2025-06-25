/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import fs from "fs";
import QRCode from "qrcode";

inquirer 
    .prompt([
        {
            type: "input",
            name: "url",
            message: "Enter the URL to generate a QR code:",
        },
    ])

    .then((answers) => {
        const url = answers.url;

        QRCode.toFile("qr_image.png", url, (err) => {
            if (err) {
                console.error("Failed to generate QR code:", err);
                return;
            }

            console.log("QR code image saved as qr_image.png");

            fs.writeFile("URL.txt", url, (err) => {
                if (err) {
                    console.error("Failed to save URL:", err);
                    return;
                }

                console.log("URL saved to URL.txt");

            });
        });
    })

    .catch((error) => {
        console.error("Something went wrong:", error);
    })