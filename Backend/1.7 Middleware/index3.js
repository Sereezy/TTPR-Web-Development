import express from "express";

const app = express();
const port = 3000;


function logger(req, res, next) {
  console.log(`Method: ${req.method} | URL: ${req.url}`);
  next(); 
}


app.use(logger);


app.get("/", (req, res) => {
  res.send("Hello from index3.js!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
