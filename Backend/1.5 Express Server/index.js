//Import the Express framework
import express from 'express';

//Create an instance of an Express application
//An Express application is a small program built with Express that runs on a 
//server, listens for requests, and sends back the right response(ex: webpage)
const app = express();

//Define the port number the server will listen on
const port = 3000;

//Start the server and have it listen on the specified port
//Once running, the callback function is triggered
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});



app.get("/", function(req, res) {
    //log to see request info
//    console.log(req)
//    console.log(req.rawHeaders) //key,value that tell you about where the request originated
    //res.send() html snippet
    res.send("Hello World!");

})

app.get("/contact", function(req, res) {
    res.send("<h1>Contact</h1><p>Call me (111)222-3333</p>");
})

app.get("/about", function(req, res) {
    res.send("<h1>About</h1><p>I am human.</p>");
})