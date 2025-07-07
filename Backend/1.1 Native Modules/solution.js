const fs = require("fs");

// Import the built-in 'path' module to work with file and directory paths
const path = require("path");

// Create an absolute file path by joining the current directory (__dirname) with "message.txt"
// __dirname gives the full path of the current file's folder
// path.join ensures the correct path formatting across all operating systems (e.g., uses \ on Windows and / on macOS/Linux)
const filePath = path.join(__dirname, "message.txt");

fs.writeFile(filePath, "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
