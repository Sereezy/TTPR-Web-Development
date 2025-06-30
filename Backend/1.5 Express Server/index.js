import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get("/", function(req, res) {
    console.log(req)
    console.log(req.rawHeaders)
  res.send("Hello, World!");
});

app.get("/about", function(req, res) {
  res.send("<h1>About Me</h1><p>My name is India</p>");
});

app.get("/contact", function(req, res) {
  res.send("<h1>Contact Me</h1><p>3225674322</p>");
});

