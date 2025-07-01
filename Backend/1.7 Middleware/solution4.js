import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
<<<<<<< HEAD
  bandName = req.body["street"] + req.body["pet"];
  next();
}


=======
  bandName = req.body.street + req.body.pet;
  next();
}

>>>>>>> 83a4106c02655ffab7d20d7dcd4b22382f20b4cb
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

<<<<<<< HEAD
app.post("/submit", bandNameGenerator, (req, res) => {
=======
//Runs on all routes, so it should go AFTER app.get() to avoid running on routes that don't have form data like 'street' and 'pet'
app.use(bandNameGenerator)


app.post("/submit", (req, res) => {
>>>>>>> 83a4106c02655ffab7d20d7dcd4b22382f20b4cb
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
