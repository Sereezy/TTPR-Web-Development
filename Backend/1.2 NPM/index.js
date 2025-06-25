//var generateName = require('sillyname');
//var sillyName = generateName();
//console.log(sillyName)


//ADD "type":"Method" to the json file to use import
import generateName from 'sillyname';
var sillyName = generateName();
console.log(sillyName)


import {randomSuperhero} from 'superheroes';
const name = randomSuperhero()
console.log(name);






import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "fs";

inquirer
  .prompt([
    {
    message: "What is your URL",
    name: "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    var url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    //writeing it to txt file
    fs.writeFile("URL.txt", url, (err) => {
        if(err) throw writer;
        console.log("File successfully created!")
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
