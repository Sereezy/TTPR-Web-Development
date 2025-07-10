import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});

function letterCount (req, res, next) {
  const data = req.body
  res.locals.nameNum = (data["fName"]+data["lName"]).length;
  next()
}

app.post("/submit", letterCount, (req, res) => {
  res.render ("index.ejs", {letterCount:res.locals.nameNum})
});



// app.use((req, res, next) =>{
//   const data = req.body
//   res.locals.nameNum = (data["fName"]+data["lName"]).length;
//   next()
// })

// app.post("/submit", (req, res) => {
//   res.render ("index.ejs")
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
