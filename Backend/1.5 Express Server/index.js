// Import the Express framework
import express from 'express';

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// Create an instance of an Express application
//An Express application is a small program built with Express that runs on a server, listens for requests, and sends back the right response(ex: webpage)
const app = express();

// Define the port number the server will listen on
const port = 3000;


//-----------------------------------------------------------------------------------------------------
app.get("/", function(req, res) {
	//log to see request info
    console.log(req)
    console.log(req.rawHeaders) //key,value that tell you about where the request originated
//res.send() html snippet
res.send("Hello World")
})

app.get("/contact", function(req, res){
    res.send("Trying Again")
})


//-------------------------------------------------------------------------------------------------------

// Start the server and have it listen on the specified port
// Once running, the callback function is triggered
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
})


