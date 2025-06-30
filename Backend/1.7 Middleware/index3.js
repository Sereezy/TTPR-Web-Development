import express from "express";

const app = express();
const port = 3000;

//insert custom logger(){} middleware function here


//calling custom middleware function with app.use()
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
