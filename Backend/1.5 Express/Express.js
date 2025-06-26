// Import the Express framework
import express from "express";

// Create an instance of an Express application
const app = express();

// Handle GET request to homepage
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the homepage!</h1>");
});

// Handle GET request to About page
app.get("/about", (req, res) => {
  res.send("<h1>About us</h1>");
});

// Handle all other requests (404 - Not Found)
app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});