import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    title: "Welcome Page",           
    seconds: new Date().getSeconds(),
    name: null                       
  });
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", {
    title: "Form Submitted!",        
    seconds: new Date().getSeconds(),
    name: req.body["fName"]
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
