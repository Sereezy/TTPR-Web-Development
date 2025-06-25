//import {randomSuperhero} from 'superheroes';
//var superHero = superheroes();
//console.log(superHero)


//var generateName = require('sillyname');
//var sillyName = generateName();
//console.log(sillyName)
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
    console.log(answers)
    var url = answers.URL
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
})