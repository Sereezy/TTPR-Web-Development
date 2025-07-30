// Import the Express framework
import express from "express";

// Create an instance of an Express application
//An Express application is a small program built with Express that runs on a server, listens for requests, and sends back the right response(ex: webpage)
const app = express();

// Define the port number the server will listen on
const port = 3000;

// Start the server and have it listen on the specified port
// Once running, log a message to the console
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

// app.get("/", function(req, res) {
//   res.send("Hello World");
// });

app.get("/contact", function (req, res) {
  console.log(req);
  console.log(req.rawHeaders);
  res.send("This is my instagram, contact me there");
});

app.get("/about", function (req, res) {
  res.send("<h2>What's Up .</h2><p>I am Nazia.</p>");
});
