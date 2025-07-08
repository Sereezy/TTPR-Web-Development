//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies
//The password is ILoveProgramming

import express from "express";


const app = express();
const port = 3000;


const correctPass = "ILoveProgramming"

app.get(port, (req, res), {})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});