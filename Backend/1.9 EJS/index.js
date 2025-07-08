import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date("June 5, 2025 11:13:00");
  const day = today.getDay();

  let type = "a weekday";
  let adv = "Lock in! Time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "YAY! Time to relax";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});