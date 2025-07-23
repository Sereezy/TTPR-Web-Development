import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "syed";
const yourPassword = "asghar";
const yourAPIKey = "c824445a-9784-49ba-8f97-86a238da57c7";
const yourBearerToken = "26058cd8-077e-4d9f-a3b8-f39a15d86b8d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random")
    res.render("indexe.ejs", {Data: JSON.stringify(response.data)})
  }catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  try {
    const endPoint = API_URL + "/all?page=2"
    const response = axios.get(endPoint, {
      auth: {
        username: "syed",
        password: "asghar"
      }
    });
    res.render("index.ejs", {data: JSON.stringify(response.data)})
  }catch(error){
    res.status(404).send(error.message)
  }

});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
  const endPoint = API_URL + "/filter?score=5"
  const response = await axios.get(endPoint, {
    apiKey: "c824445a-9784-49ba-8f97-86a238da57c7"
  })
  res.render("index.ejs", JSON.stringify(response.data))
}catch {
  res.status(404).send(error.message)
}
});

app.get("/bearerToken",async (req, res) => {
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
  try{
  const endPoint = API_URL + "/secrets/42"
  const response = await axios.get(endPoint, {
    headers: {Authorization: "26058cd8-077e-4d9f-a3b8-f39a15d86b8d"}
  });
} catch{
  res.status(404).send(error.message)
}


});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
