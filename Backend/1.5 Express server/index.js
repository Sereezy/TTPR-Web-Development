import express from 'express';
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
 app.get("/", function (req, res) {
  res.send("Hello World!");
 });

 app.get("/", function(req, res) {
	//log to see request info
    console.log(req)
    console.log(req.rawHeaders) //key,value that tell you about where the request originated
//res.send() html snippet
res.send("Hello World");
});
