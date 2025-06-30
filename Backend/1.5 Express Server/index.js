import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

app.get ("/", function(req, res){
    console.log(req.rawHeaders);
    res.send("Hello World :]");
});