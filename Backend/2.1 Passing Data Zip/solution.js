import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("views", "/Users/ttp/Documents/GitHub/TTPR-Web-Development/Backend/2.1 Passing Data Zip/views")

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("solution.ejs");
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("solution.ejs", { numberOfLetters: numLetters });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
