import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { dirname } from "path";
import { fileURLToPath } from "url";  
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.set("views", "/Users/zohinur/zohinur:TTPR/TTPR-Web-Development/Postgres/1.1 Postgres Read/views");

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "2014",
  port: 5433,
})

let quiz = [];
db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.error("Error Executing query", err.stack);
  }else {
    quiz = res.rows;
  }
  db.end();
  });

db.connect();

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  //This avoids the crash if currentQuestion.capital is undefined.
  if (currentQuestion.capital && answer && currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
