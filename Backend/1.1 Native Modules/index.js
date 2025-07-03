const fs = require("fs")
const path = require("path")
const filePath = path.join(__dirname , "message.txt")
fs.writeFile("message.txt" , "hello from NodeJS" , 
    function (err){
        if(err) throw err;
        console.log ("the file has saved.")
    })
    fs.readFile(filePath , "utf8" , (err , data) => {
        if(err) throw err;
        console.log(data)
    })