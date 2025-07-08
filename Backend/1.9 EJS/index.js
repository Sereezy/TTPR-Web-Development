import express from "express";
// Removed unused bodyParser import
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set("views", __dirname + "/views");

function weekdayCheck(res, next) {
  const date = new Date();
  const day = date.getDay();
  if (day === 0 || day === 6) {
    res.render("index.ejs", {
      dayType: "a weekend",
      advice: "it's time to relax",
    });
    console.log("dayType: a weekend, advice: it's time to relax");
  } else {
    next();
  }
}
app.get("/", (req ,res) => {
  res.render("Backend/1.9 EJS/views/index.ejs", {
    dayType: "a weekday",
    advice: "it's time to work hard",
  });
  app.use(weekdayCheck);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});