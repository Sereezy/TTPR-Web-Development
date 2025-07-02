import express from "express";
const app = express();
const port = 3000;

app.get("/", function(req, res) {
    // log to see request info
    console.log(req)
    console.log(req.rawHeaders) // key,value that tell you about where the request originated
    // res.send() html snippet
    res.send("Hello World");
});

app.get("/about", function(req, res) {
    res.send("<h1>About Me</h1><p>My Name Is Sherise Hinds</p>");
});

app.get("/contact", function(req, res) {
    res.send("<h1>Contact Me Here</h1><p>+1 554-899-0990</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});