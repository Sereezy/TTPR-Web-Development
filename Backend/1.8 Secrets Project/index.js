//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies
//The password is ILoveProgramming
import express from 'express';
import bodyParser from "body-parser";
import { fileURLToPath } from 'url'
import path from 'path';
const app = express()
const port = 3000
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))
var authorized = false
function passwordCheck(req, res, next) {
  let data = req.body
  if (data.password == 'ILoveProgramming') {
    authorized = true
  }
  else {
    console.log("wrong pwd")
  }
  next()
}
//app.use(passwordCheck)
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})
app.post('/check',passwordCheck, (req, res, next) => {
  console.log(req.body)
  if (authorized) {
    res.sendFile(__dirname + "/public/secret.html")
  }
})
app.listen(port, function() {
  console.log(`app is running at localhost:${port}`)
})

