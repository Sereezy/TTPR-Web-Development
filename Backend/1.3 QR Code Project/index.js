/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
//const path = require("path");
//const filePath = path.join(__dirname, "message.txt")

inquirer
.prompt ([
    {
        message: "what is your URL",
        name: "URL"
    },

])
.then ((answer) => {
    console.log(answer)
    var url = answer.URL
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));

fs.writeFile("URL.txt", url, (err) => {
    if(err) throw err;
    console.log("File Successfully created")
})
})

.catch((error) => {
    if (error.isTtyError) {

    }
    else {
        console.error("An error occurred:", error);
    }
})