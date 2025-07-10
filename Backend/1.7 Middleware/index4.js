import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
app.use(express.static('public'));
var bandName = ""

app.use(express.urlencoded({ extended: true }));


function bandNamefunc(req, res, next) {
  const formData = req.body;
  bandName = formData.street + formData.pet;
  next();
}

app.get ('/', (req, res) => {
    res.send('index.html')
})

app.use(bandNamefunc)

app.post('/submit', (req, res) => {
  res.send(`Your band name is ${bandName}.`)
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
