//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies
//The password is ILoveProgramming
import express from "express"
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

function passwordCheck(req, res, next) {
    const pass = req.body.password
    if (pass === "password"){
        return res.sendFile(path.join(__dirname, 'public', 'secret.html'));
    } else{
    res.redirect('/')
    }
}

app.post("/check", passwordCheck)



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
