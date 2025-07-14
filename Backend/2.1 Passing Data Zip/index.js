import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.set("views", "./Backend/2.1 Passing Data Zip/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { fName: null, lName: null });
});

app.post("/submit", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const length = (toString(fName) + toString(lName)).length
  res.render("index.ejs", {length});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
