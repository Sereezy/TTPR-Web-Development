import express from "express";
import morgan from "morgan"

const app = express();
const port = 3000;

app.use(morgan())

morgan('tiny')

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/submit", (req, res) => {
  console.log(req)

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
