import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index"); 
});

app.post("/submit", (req, res) => {
  const numLetters =
    req.body["fName"].length + req.body["lName"].length;
  res.render("solution", { numberOfLetters: numLetters });
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
