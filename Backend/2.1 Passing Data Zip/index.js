import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "./views/index.ejs"))
});

app.post("/submit", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
