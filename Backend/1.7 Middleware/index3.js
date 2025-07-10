import express from "express";

const app = express();
const port = 3000;

//insert custom logger(){} middleware function here
function logger(req, res, next) {
  console.log(`request method: ${req.method} from ${req.url}`);
  next();
}

//calling custom middleware function with app.use()
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Your form has been submitted");
});