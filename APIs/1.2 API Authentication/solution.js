import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";   
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";
app.set("views","/Users/zohinur/zohinur:TTPR/TTPR-Web-Development/APIs/1.2 API Authentication/views");

// TODO: Replace the values below with your own before running this file.
const yourUsername = "zohinur";
const yourPassword = "zo1234";
const yourAPIKey = "d360995a-32c4-47b9-9529-e9e902e55373";
const yourBearerToken = "8dec7f0d-a699-4d38-84dd-1a3c50f362ff";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
