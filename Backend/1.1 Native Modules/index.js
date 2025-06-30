const fs = require("fs");

const path = require("require");


fs.writeFile("message.txt", "Hello from NodeJS!", function (err) {
  if (err) throw err;
  console.log("The file has been saved.");
});