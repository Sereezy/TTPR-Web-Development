import Express from "express";

const app = Express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
app.get("/", function(req, res){
    // console.log(req);
    // console.log(req.rawHeaders);
    res.send("hello ");
})
app.get("/contact", function(req, res){
    res.send("<h1>Contact</h1>.<p>(342)123-5432</p>");
})
app.get("/about", function(req, res){
    res.send("<h1>About</h1><p>Hi im Chris</p>");
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})