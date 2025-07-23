import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;


// Postgres client setup
const server = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "Solorzan0",
  port: 5432
})

server.connect();

let quiz = [];

server.query("SELECT * FROM capital", (err, res) =>{
  if (err){
    console.error("error executing query", err.stack);
  } else {
    quiz = res.rows;
    console.log("Quiz data loaded:", quiz);
  }
  server.end();
});

//quiz item that is an array of 3 objects
//the objects model after the records in our database


//scorekeeper
let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  //gets the answer the user typed in, trimming to remove trailing spaces
  let answer = req.body.answer.trim();
  let isCorrect = false;
  //checks if the answer matches the user input
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  //sets the current question to a random country, sets up next question
  nextQuestion();

  res.render("index.ejs", {
    //pass over new question to the ejs
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
