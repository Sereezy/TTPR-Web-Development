import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  console.log(day)
  if(day===0 || day===6){
    res.render("index.ejs", {
      dayType: "a weekend",
      advice: "time to rest",
    });

} else{
  res.render("index.ejs", {
    dayType: "a weekday",
    advice: "it's time to work hard",
  });
}});
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});