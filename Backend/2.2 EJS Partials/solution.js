import express from "express";

const app = express();
const port = 5000;

app.set('views', '/Users/ttp/Documents/GitHub/TTPR-Web-Development/Backend/2.2 EJS Partials/views')
app.set('views engine', 'ejs')
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
