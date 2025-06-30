// Import the Express framework
import express from "express";

// Create an instance of an Express application
//An Express application is a small program built with Express that runs on a server, listens for requests, and sends back the right response(ex: webpage)
const app = express();

// Define the port number the server will listen on
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the homepage!</h1>");
});

// Handle GET request to About page
app.get("/about", (req, res) => {
  res.send("<h1>About us</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact failed</h1>");
});

// Handle all other requests (404 - Not Found)
app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

// Start the server and have it listen on the specified port
// Once running, log a message to the console
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
