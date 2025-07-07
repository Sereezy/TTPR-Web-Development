const express = require("express");

const app = express();
const port = 3000;


const logger = (req, res, next) => {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  next(); 
};
app.use(logger);


app.get("/", (req, res) => res.send("Hello"));


app.listen(port, () => console.log(`Server running on port ${port}`));