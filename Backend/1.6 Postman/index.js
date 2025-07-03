import express from 'express';
const app = express();

const port = 3000;

app.get("/", function(req, res) {
  res.send("Hello World");
});


app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html") //log path
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
