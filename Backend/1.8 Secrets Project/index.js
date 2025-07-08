//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));



function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    req.isAuthorized = true;
  } else {
    req.isAuthorized = false;
  }
  next();
}


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", passwordCheck, (req, res) => {
  if (req.isAuthorized) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/"); 
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

