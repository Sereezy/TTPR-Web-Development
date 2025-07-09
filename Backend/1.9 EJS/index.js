import express from "express";
import path from 'path';

const app = express();
const port = 3000;

function getDay(){
    const randomNumber = Math.floor(Math.random() * 6);
    const dayList = {
        Monday: 'Monday', Tuesday: 'Tuesday', Wednesday: 'Wednesday', Thursday: 'Thursday', Friday: 'Friday', Saturday: 'Saturday', Sunday: 'Sunday'};
    const day = dayList[randomNumber]
    return day;
}


app.get('/', (req,res) => {
    res.render('index.ejs', {
        dayType: 'a weekday',
        advice: 'its time to work hard',
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
    console.log(getDay())
})