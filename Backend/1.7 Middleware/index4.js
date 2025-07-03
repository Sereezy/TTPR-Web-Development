import express from "express";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = ""; 
app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body.street + req.body.pet;
  next();
}
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bandNameGenerator)

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

