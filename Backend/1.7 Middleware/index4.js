import express from "express";
import bodyParser, { urlencoded } from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
var favMovie = "";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser,urlencoded({ extended: true }));

function favMovieGenerator(req, res, next) {
  console.log(req.body);
  favMovie = req.body.street + req.body.pet;
  next();
}


app.get("/", (req, res,) => {bodyParser
  res.sendFile(__dirname + "/public/index.html");
});

app.use(favMovieGenerator)

app.post("/submit", (req, res) => {
  res.send(`<h1> Your favorite movie is: </h1><h2>${favMovie}</h2>`);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
