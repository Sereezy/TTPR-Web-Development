import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const firstName = req.body["fName"].trim();
  const lastName = req.body["lName"].trim();
  const numOfLetters = firstName.length + lastName.length
  res.render("index.ejs",{ numberOfLetter: numOfLetters })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
