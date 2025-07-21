import express from "express";

const app = express();
const port = 3000;
//weekend
const today = new Date("June 24, 2023 11:13:00");
const day = today.getDay();

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
})


app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType: "a weekday",
    advice: "it's time to work hard",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});