//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies
//The password is ILoveProgramming
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve files from /public
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});