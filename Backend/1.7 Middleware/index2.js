import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.post("/submit", (req, res) => {
  console.log(Object.values(req.body));
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
