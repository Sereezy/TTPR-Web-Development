//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies
//The password is ILoveProgramming

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function passwordCheck(req, res, next) {
    const formData = req.body;
    if (formData.passwordCheck == 'ILoveProgramming') {
        res.sendFile(__dirname + '/public/secret.html');
     } 
     passwordCorrect = true;
    }; 
    app.use(passwordCheck);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/check', (req, res) => {
    console.log(req.body);
    res.send (passwordCheck(req, res));
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});