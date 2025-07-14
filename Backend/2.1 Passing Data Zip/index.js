import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {pass:false});
});

app.post("/submit", (req, res) => {
  const {fName, lName} = req.body;
  console.log(fName.length);
  const totalLetter = fName.length + lName.length;

  if(totalLetter <= 0){
    res.render("index.ejs", {pass:false});
  } else {
    res.render("index.ejs", {pass:true, fName: fName, lName: lName, letters: totalLetter});
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
