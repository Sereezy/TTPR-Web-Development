import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  console.log('request: ', req.body)
})

app.post("/submit", (req, res) => {
  const {street, pet} = req.body
  res.send(`<h1>${street} ${pet}</h1>`)
  console.log('request: ', req.body)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
