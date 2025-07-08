import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var bandName = "";

function generateBandName(req, res, next){
  const {street , pet} = req.body;
  console.log({"Street": street, "Pet": pet });
  bandName = street + " " + pet;
  next();
}

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", generateBandName, (req, res) => {
  res.send(`<h1>Band Name: ${bandName}</h1>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
