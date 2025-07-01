import express from 'express';
const app = express();

const port = 3000;

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/about", function(req, res) {
  res.send("<h1>About me.</h1><p>My name is Talisha.</p>");
});

app.get("/contact", function(req, res) {
  res.send("<h1>Contact me</h1><p>+911</p>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.get("/", function(req, res) {
  console.log(req)
  console.log(req.rawHeaders) 
res.send("Hello World");
});