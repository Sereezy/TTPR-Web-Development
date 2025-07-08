import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}
<<<<<<< HEAD

=======
>>>>>>> ce31922341251903b168393c9a34d44e45f62be1

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
<<<<<<< HEAD
app.use(passwordCheck);
=======

app.use(passwordCheck);

>>>>>>> ce31922341251903b168393c9a34d44e45f62be1
app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    //Alternatively res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
