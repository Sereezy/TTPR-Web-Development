import express from "express";
const app = express();
const port = 3000;

app.set("views", "/Users/ttp/Documents/GitHub/TTPR-Web-Development/Backend/2.0 EJS Tags/views");

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
