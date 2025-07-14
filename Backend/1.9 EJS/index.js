import express from "express";

const app = express();
const port = 3000;

const dayType = ["weekday", "weekend"]
const advices = ["it's time to work hard", "it's time to relax"]

//app.set("views", "ejs")

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    const date = today.getDate();
    let type = "";
    let advice = "";

    console.log({"Day": day, "Week": date});

    if (day > 0 && day < 6){
        type = dayType[0];
        advice = advices[0];
    } else {
        type = dayType[1];
        advice = advices[1];
    }

    res.render("index.ejs", {
        dayType: type,
        advice: advice,
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})