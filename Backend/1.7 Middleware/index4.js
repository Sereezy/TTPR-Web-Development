import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body); 
  req.bandName = req.body.street + req.body.pet;
  next();
}
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", bandNameGenerator, (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${req.bandName} ✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
