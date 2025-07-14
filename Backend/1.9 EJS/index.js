import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Setup required for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// ✅ Tell Express to use EJS and where to find your views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // ⬅️ fixes your issue

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  // You can use "solution" or "index" — just match the filename
  res.render("solution.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
