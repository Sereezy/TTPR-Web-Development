import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }
  res.render("index", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
