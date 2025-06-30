import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname = "";

app.use(bodyParser.urlencoded({extended: true}));

function bandNameGenerator(req,res,next) {
  console.log(req.body);
  bandname = req.body["street"]+ req.body["pet"];
  next();
}

app.get("/", (req, res) =>{
  res.sendFile(__dirname+"/public/index.html");
})

app.post("/submit", bandNameGenerator, (req,res)=>{
  res.send(`<h1>Your band name is ${bandname}</h1>`)
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
