//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies
//The password is ILoveProgramming
import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
// Create Express app
const app = express();
const port = 3000;
// Resolve __dirname and __filename for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Middleware
app.use(morgan("dev")); // Logging
// app.use(express.json());              // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
let passlist = ["example"];
function passcheck(req, res, next) {
  //grab password from request
  let pass = req.body.password; //user input pass
  //check backend pass list to  user submission
  for (let i = 0; i < passlist.length; i++) {
    if (passlist[i] === pass) {
      return next();
    }
  }
  res.send("uh oh!");
}
// Example route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/check", passcheck, (req, res) => {
  res.sendFile(path.join(__dirname, "secret.html"));
});
// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
