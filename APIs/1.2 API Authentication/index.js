import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "Angel";
const yourPassword = "Angel";
const yourAPIKey = "53ea922f-7eed-47cc-9c2b-bb31d6eeedc8";
const yourBearerToken = "b8d1dc63-fad7-4fbc-bc2f-122be061de4d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    let result = await axios.get(API_URL + 'random')
    result = JSON.stringify(result)
    res.render('index.ejs', {
      content: result
    })
  } catch (error) {
    console.log("Failed to make request: ", error.message)
    res.render('index.ejs', {
      error: error.message}
    )
  }
});

app.get("/basicAuth", async (req, res) => {
 try {
  const endPoint = 'all'
  const pageNumber = 2
  let response = await axios.get(API_URL + endPoint + '?=' + pageNumber, {
    auth: {
      username: 'Angel',
      password: 'Angel'
    }
  })
  let result = response.data
  result = JSON.stringify(result)
  res.render('index.ejs', {data: result})
 } catch(error) {
  console.log("Failed to make request: ", error.message)
  res.render('index.ejs', {
    error: error.message}
  )
 }
});

app.get("/apiKey", async(req, res) => {
  try {
    const endPoint = 'filter'
    const queryParameter = '?score=5'
    let response = await axios.get(API_URL + endPoint + queryParameter + '&' + yourAPIKey)
    const result = response.data
    res.render('index.ejs', {data: result})
  } catch(error) {
    console.log("Failed to make request: ", error.message)
    res.render('index.ejs', {
      error: error.message}
    )
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 const config = {
      headers: {
        Authorization: `Bearer <${yourBearerToken}>`
      }}
 try {
    const endPoint = 'secrets/'
    const queryParameter = '42'
    let response = await axios.get(API_URL + endPoint + queryParameter, config)
    const result = response.data
    res.render('index.ejs', {data: result})
  } catch(error) {
    console.log("Failed to make request: ", error.message)
    res.render('index.ejs', {
      error: error.message}
    )
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
