//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let correctPassword = "ILoveProgramming";
let verified = false;

function passwordCheck(req, res, next){
    const {password} = req.body;
    
    //console.log({"password" : password});

    if (password === correctPassword){
        verified = true;
    } else {
        verified = false;
    }
    next();
}

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  //res.sendStatus(201);
})

app.post("/check", passwordCheck, (req, res) => {
  //res.send(`<h1>Band Name: ${bandName}</h1>`);
  if (verified){
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});