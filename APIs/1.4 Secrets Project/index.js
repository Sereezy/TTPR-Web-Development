// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";
const yourBearerToken = "53e3476b-33d8-41ed-87bc-160ed3b2fb05";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};
// 3. Use the public folder for static files.
app.use(express.static("public"));
// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async (req, res) => {
    const searchId = Math.floor(Math.random()* 50);
    try {
      const result = await axios.get(API_URL + "/secrets/" + searchId, config);
      res.render("index.ejs", { 
        secret: JSON.stringify(result.data.secret),
         user: JSON.stringify(result.data.username) });
    } catch (error) {
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
  });
// 6. Listen on your predefined port and start the server.
app.listen(port, (req,res)=>{
    console.log(`listening on port ${port}`);
})