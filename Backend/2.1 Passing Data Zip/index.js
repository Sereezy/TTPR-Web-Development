import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", __dirname + "/views");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  res.sendFile(__dirname + "/views/index.ejs");
  const lettersNum = req.body["fName"].length + req.body["LName"].length;
  res.render("solution.ejs", { numberOfLetters: lettersNum }
  )
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
