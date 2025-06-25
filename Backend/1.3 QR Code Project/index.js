import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "What is your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    console.log(answers)
    var url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });

