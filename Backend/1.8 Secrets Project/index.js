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

var membership = false;

app.use(bodyParser.urlencoded({ extended: true }));

function memberCheck(req, res, next) {
  const password = req.body.password;
  if (password === "ILoveProgramming") {
    membership = true;
  }
  console.log(req.body.password);
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", memberCheck, (req, res) => {
  if (membership) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
  console.log(req.body.password);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
