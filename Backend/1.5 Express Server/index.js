import express from 'express'; 

const app = express();

const port = 3000; 
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
}) 

app.get('/', (req, res) => {
    console.log(req)
    console.log(req.rawHeaders) //key,value that tell you about where the request originated

    res.send('Hello World!');
});

app.get("/about", function(req, res) {
  res.send("<h1>About me.</h1><p>My name is Serena.</p>");
});

//Contact
app.get("/contact", function(req, res) {
  res.send("<h1>Contact me</h1><p>+8455441243</p>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

