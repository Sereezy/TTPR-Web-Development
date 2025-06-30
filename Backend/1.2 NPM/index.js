import generateName from "sillyname"
import superheroes, { randomSuperhero } from 'superheroes';
var generateName = require('sillyname');
var sillyName = generateName();
console.log(sillyName)
const name = randomSuperhero();

import inquirer from 'inquirer';
const fs = require('fs');
const QRCode = require('qrcode');

inquirer
    .prompt([
        /* Pass your questions in here */
        name: 'url',
        message: 'Enter the URL to generate a QR Code:',
        validate: input => input.startsWith('http://') || input.startsWith('https://')
        ? true 
        : 'Please enter a valid URL (must start with http:// or https://)',
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.url;
        fs.writeFile
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });