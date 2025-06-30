import express from 'express';

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

