const { error } = require("console");
const  fs = require("fs");
fs.writeFile("hell.txt", "hello everyone ", (err) => {
    if (err) {
        throw err;
    }
    console.log("file has been saved");
});