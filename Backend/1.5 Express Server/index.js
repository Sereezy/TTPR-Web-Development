import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

app.get ("/", function(req, res){
    console.log(req.rawHeaders);
    res.send("Hello World :]");
});

app.get ("/contact", function(req, res){
    res.send("<p>HI this is contact endpoint</p>");
});

app.get ("/about", function(req, res){
    res.send("<h1>ANNNNND this is the about endpoint hehe</h1>");
});


app.post ("/register", (req, res) => {
    // if (!req.body.email){
    //     return res.status(400).send("Email is required");
    // }
    res.status(201).send("User created");
});

app.put ("/puttest", (req, res) => {
    res.status(200).send("OK - put");
});

app.patch ("/patchtest", (req, res) => {
    res.status(200).send("OK - patch");
});

app.delete ("/deletetest", (req, res) => {
    res.status(200).send("OK - delete");
});

// res.status(404).send("Page not found");
// res.sendStatus(404);
