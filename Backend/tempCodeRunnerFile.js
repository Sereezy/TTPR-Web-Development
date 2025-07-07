const fs = require('node:fs');
const path = require('node:path');
const filePath = path.join(__dirname, 'message.txt');
fs.writeFile(filePath,'JS is fun :D', (error) => {
    if (error) throw error;
    console.log('file was saved!');
})
fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) throw error;
    console.log(data);
})