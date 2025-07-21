import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
    res.render("index.ejs")
  

});

app.get("/submit", (req, res) => {
   const fnameLength = req.body.fName
    const lnameLength =  req.body.lName
  const data = {
      fullLength: fnameLength + lnameLength
              }

    res.render("index.ejs", data)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
