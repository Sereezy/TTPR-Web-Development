import express from 'express';
import { Server } from 'http';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}.`)
});

app.get("/", function(req, res){

    //log to see request info
    console.log(req)
    console.log(req.rawHeaders)

    //res.send() html snippet
    res.send("Hello World");

});

//about 
app.get("/about", function(req, res){
 res.send("<h1>About me.</h1><p>Hi I am Zerich.</p> ")
});

//Constact
app.get("/Contact", function(req, res){
    res.send("<h1>Contact Information</h1><p>987654321</p> ");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
    });

    //register
app.post("/register", (req, res ) => {
    // if(!req.body.email) {
    //  //bad request - missing required field
    //  return res.status(400).send("Email is required");
    // }

    //Otherwise:
    res.status(201).send("user created");
    
});