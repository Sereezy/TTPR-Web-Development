const fs = require("fs");

const path = require("path");

const filePath = path.join(__dirname, "message.txt");

fs.writeFile(filePath, "JS is fun :D", function(err){
    if (err) throw err;
    console.log("The file has been saved.")
})

fs.readFile(filePath, "utf-8", (err, data) =>{
    if (err) throw err;
    console.log(data);
})