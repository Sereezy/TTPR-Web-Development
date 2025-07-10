import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  let h1 = "<h1>Enter your name Below</h1>"
  res.render("index.ejs", { data: h1 });
});

app.post("/submit", (req, res) => {
  let name = req.body["fName"] + req.body["lName"];
  let result = `<h1> Your name has ${name.length} letter in it.</h1>`
  res.render("index.ejs", { data: result });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
