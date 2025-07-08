import express from "express";
import path from 'path';
import __dirname from 'dirname';

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.render('index', {})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})