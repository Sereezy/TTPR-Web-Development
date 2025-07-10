import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

var bandna = "gfh";

function bandName (req, res, next) {
  const formData = req.body;
  bandna = formData.street + formData.pet;
  next();
}


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bandName);

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`your name is ${bandna}`);
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
