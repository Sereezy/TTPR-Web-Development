import express from "express";

const app = express();

const port = 3000;

app.get("/", function(req, res){
    res.send("Hello World")
});

app.get("/contact", function(req,res){
    res.send("This is a contact page")
});

app.get("/about", function(req,res){
    res.send("This is an about page")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}. `);
});
