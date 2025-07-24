import express from "express";
import axios from "axios";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;


app.set('views', '/Users/ttp/Documents/GitHub/TTPR-Web-Development/APIs/1.4 Secrets Project/views')
app.set('views engine', 'ejs')
app.use('/static', express.static(path.join(__dirname, 'public')));


app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
