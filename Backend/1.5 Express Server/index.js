import express from "express";


const app = express();

const port = 3000;

app.get("/", function (req,res){
    console.log(req)
    console.log(req.rawHeaders)
    res.send("Hello World");
})

app.get("/about", function (req, res){
    res.send("<p>Greeting friends, I'm WenXiong and I'm a member of TTPR cohort 2. </p>")
})

app.get("/contact", function (req, res){
    res.send("<a href='mailto:wenxiong342@gmail.com'> My Email </a>")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)

})

