import superheros from "superheros"
import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs'
import path from "path";
inquirer
  .prompt([
    { name: "url", message: "Enter a url to convert it to qr code" }
  ])
  .then((answers) => {
    let url = answers.url
    var qr_svg = qr.image(url, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream(url + ".svg"));
    fs.writeFile("url.text", url, (err) => {
      if (err) throw err;
    })

    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      throw error
    } else {
      // Something else went wrong
      console.log(error)
    }
  });

