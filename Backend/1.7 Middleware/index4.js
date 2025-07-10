import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

function generateBandName(req, res, next) {
  let data = req.body
  res.json({ bandName: data.street+" "+data.pet })
}
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/public/index.html')
})
app.post('/submit', (req, res,next) => {
  console.log(req.body)
  next()
},generateBandName)
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
