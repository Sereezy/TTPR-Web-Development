import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/serena", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/serena", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/serena", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// more status codes
// Just because a route runs doesn't mean it was successful. You have to decide what status accurately describes what happened.
//-It’s your job to assign the right one based on what happened.
//-Express won’t “guess” the right code for you. It uses 200 by default unless you specify otherwise.

app.post("/register", (req, res) => {
  if (!req.body.email) {
    // Bad request – missing required field
    return res.status(400).send("Email is required");
  }

  // Otherwise:
  res.status(201).send("User created");
});

//more status codes
//-This is shorthand. It sets the status and automatically sends the standard HTTP status message as the response body.
res.status(404).send("Page not found");
res.sendStatus(404); // Sends status 404 with body "Not Found"
