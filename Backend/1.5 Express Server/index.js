import express from 'express';

const app = express();

const port = 3000;

app.get("/", function(req, res) {
    res.send("Hello World");
});

app.get("/about", function(req, res) {
    res.send("<h1>About Me.</h1><p>My name is Daniela</p>");
});

app.get("/contact", function(req, res) {
    res.send("<h1>Contact Me</h1><p>+8455441243</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
