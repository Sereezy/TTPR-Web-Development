import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDate();

//   console.log(day);

  let type = "a weekday";
  let adv = "its time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "i'ts time to have some fun";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
