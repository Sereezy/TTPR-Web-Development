const fs = require("fs")
const path = require("path")

fs.writeFile('Backend/1.1 Native Modules/message.txt', "JS is fun :D", function(err) {
    if (err) throw err;
    console.log("The file has been saved.")
})

fs.readFile('Backend/1.1 Native Modules/message.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 

