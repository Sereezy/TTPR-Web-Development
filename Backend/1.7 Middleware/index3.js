import express from "express";

const app = express();
const port = 3000;

//insert custom logger(){} middleware function here
function logger(req , res , next){
  console.log("Request Method: " , req.method);
  console.log("Request Url" , req.url);
  next();
}

//calling custom middleware function with app.use()
app.use(logger);

app.get("/", (_, res) => {
  res.send(`
    <html>
      <body>
        <h1>Welcome to the Middleware Example</h1>
        <a href="/about"><button>Press me</button></a>
        <script>
          // Optional: Add JavaScript click handler
          ${'button'}.addEventListener('click', () => {
            console.log('Button pressed!');
          });
        </script>
      </body>
    </html>
  `);
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
