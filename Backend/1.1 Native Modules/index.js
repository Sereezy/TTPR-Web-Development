const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "message.txt");

fs.writeFile (filePath, "HIIIIIII NODE!!!", (err) => {
    if (err) throw err;
    console.log("The file has been saved :D!");
});

fs.readFile (filePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});