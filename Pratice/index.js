import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set("views", __dirname + "/views");


app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType:  "a weekday",
    advice: "it's time to work hard",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});