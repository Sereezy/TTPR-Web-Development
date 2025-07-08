import express from "express"
import bodyParser from "body-parser"

const bodyParser = require('body-parser')
const express = require('express')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.post(`/submit`, (req, res) =>{
    console.log(req.body);
    res.send('Form recieved!')
})

app.listen(3000, () => {
    console.log('Server running on https://localhost:3000')
})