import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { log } from "console";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const nameCount = req.body.fName.length + req.body.lName.length;
  res.render("index.ejs", {
    nameCount: nameCount,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
