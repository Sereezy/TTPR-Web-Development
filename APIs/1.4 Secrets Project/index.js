// HINTS:
// 1. Import express and axios
import express from 'express'
import axios from 'axios'
// 2. Create an express app and set the port number.
const app = express()
const port = 3001;
// 3. Use the public folder for static files.
app.use(express.static("public"))

const api = "https://secrets-api.appbrewery.com";
// 4. When the user goes to the home page it should render the index.ejs file.
app.get('/', async (req, res) => {
  try {
    let response = await axios.get(api + "/random")
    res.render("index.ejs", { secret: JSON.stringify(response.data).secret, user: JSON.stringify(response.data).username })
  }
  catch (err) {
    console.log(err)

    res.render("index.ejs", { secret: null, user: null })
  }

})
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, (req, res) => {
  console.log('app is successfully running at' + port)
})
