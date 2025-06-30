<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>History Quiz</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 800px;
      margin: auto;
    }
    .question-box {
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 15px;
    }
    .choices label {
      display: block;
      margin: 8px 0;
      cursor: pointer;
    }
    #result {
      margin-top: 30px;
      font-weight: bold;
    }
    button {
      margin-top: 10px;
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1>History Quiz</h1>
  <div id="quiz-container"></div>
  <div id="result"></div>

  <script>
    const questions = [
      {
        question: "Which ancient civilization is known for its pyramids and pharaohs?",
        choices: ["Aztec", "Egyptian", "Roman", "Greek"],
        answer: "Egyptian"
      },
      {
        question: "In which river valley did the ancient Sumerian civilization emerge?",
        choices: ["Nile Valley", "Indus Valley", "Yellow River Valley", "Tigris-Euphrates Valley"],
        answer: "Tigris-Euphrates Valley"
      },
      {
        question: "What writing system did the ancient Egyptians use?",
        choices: ["Hieroglyphics", "Cuneiform", "Alphabet", "Pictograms"],
        answer: "Hieroglyphics"
      },
      {
        question: "Which event marked the beginning of World War II?",
        choices: [
          "The assassination of Archduke Franz Ferdinand",
          "The German invasion of Poland",
          "The bombing of Pearl Harbor",
          "The Battle of Britain"
        ],
        answer: "The German invasion of Poland"
      },
      {
        question: "Which of the following was NOT an Axis power during World War II?",
        choices: ["Germany", "Italy", "Japan", "USSR"],
        answer: "USSR"
      },
      {
        question: "Who was the primary author of the Declaration of Independence?",
        choices: ["John Adams", "Thomas Jefferson", "Benjamin Franklin", "James Madison"],
        answer: "Thomas Jefferson"
      },
      {
        question: "How many colonies were there in the United States?",
        choices: ["12", "13", "14"],
        answer: "13"
      },
      {
        question: "What was the name of the American space program that first landed humans on the moon?",
        choices: ["Mercury", "Gemini", "Apollo"],
        answer: "Apollo"
      },
      {
        question: "Who was the first President of the United States?",
        choices: ["John Adams", "Thomas Jefferson", "George Washington"],
        answer: "George Washington"
      },
      {
        question: "Which state has the surname 'The First State'?",
        choices: ["New York", "Massachusetts", "Vermont", "Delaware"],
        answer: "Delaware"
      },
      {
        question: "What country ceded Florida to the USA in 1821 with the Treaty of Adams-Onis?",
        choices: ["Britain", "France", "Portugal", "Spain"],
        answer: "Spain"
      },
      {
        question: "Which treaty, signed in 1898, marked the end of the Spanish-American War?",
        choices: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Tordesillas", "Treaty of Ghent"],
        answer: "Treaty of Paris"
      },
      {
        question: "The Mau Mau Uprising in the 1950s was a key part of which country's independence?",
        choices: ["Nigeria", "South Africa", "Zimbabwe", "Kenya"],
        answer: "Kenya"
      },
      {
        question: "Which African country achieved independence from Belgium in 1960?",
        choices: ["Nigeria", "Kenya", "Ghana", "Congo"],
        answer: "Congo"
      },
      {
        question: "The Bretton Woods Agreement was signed in which year?",
        choices: ["1944", "1947", "1949", "1953"],
        answer: "1944"
      },
      {
        question: "What year did the Euro debut as a financial unit?",
        choices: ["1995", "1997", "1999", "2001"],
        answer: "1999"
      },
      {
        question: "What term refers to Japan’s pre-WWII industrial conglomerates?",
        choices: ["Zaibatsu", "Keiretsu", "Sogo Shosha", "Shinkin"],
        answer: "Zaibatsu"
      },
      {
        question: "Which cartoon character was featured on emergency Philippine currency in WWII?",
        choices: ["Bugs Bunny", "Mickey Mouse", "Donald Duck", "Popeye"],
        answer: "Mickey Mouse"
      },
      {
        question: "How many of King Henry VIII’s wives were called Anne?",
        choices: ["One", "Two", "Three", "Four"],
        answer: "Two"
      },
      {
        question: "On which Mediterranean island was Napoleon Bonaparte born?",
        choices: ["Sicily", "Malta", "Corsica", "Cyprus"],
        answer: "Corsica"
      }
    ];

    let currentQuestion = 0;
    const userAnswers = [];
    const quizContainer = document.getElementById('quiz-container');
    const resultDiv = document.getElementById('result');

    function showQuestion() {
      const q = questions[currentQuestion];
      const html = `
        <div class="question-box">
          <h3>Question ${currentQuestion + 1} of ${questions.length}</h3>
          <p>${q.question}</p>
          <div class="choices">
            ${q.choices.map((choice, index) => `
              <label for="choice-${index}">
                <input type="radio" name="choice" id="choice-${index}" value="${choice}"> ${choice}
              </label>
            `).join('')}
          </div>
          <button id="submit-btn">Submit</button>
        </div>
      `;
      quizContainer.innerHTML = html;

      document.getElementById('submit-btn').addEventListener('click', submitAnswer);
    }

    function submitAnswer() {
      const selected = document.querySelector('input[name="choice"]:checked');
      if (!selected) {
        alert("Please select an answer.");
        return;
      }
      userAnswers.push(selected.value);
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResults();
      }
    }

    function showResults() {
      let correctCount = 0;
      let output = `<h2>Quiz Results</h2>`;
      questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.answer;
        if (isCorrect) correctCount++;
        output += `
          <div class="question-box">
            <p><strong>Q${index + 1}:</strong> ${q.question}</p>
            <p>Your answer: <strong>${userAnswer}</strong></p>
            <p>Correct answer: <strong>${q.answer}</strong> ${isCorrect ? '✅' : '❌'}</p>
          </div>
        `;
      });
      output += `<h3>You got ${correctCount} out of ${questions.length} correct.</h3>`;
      quizContainer.innerHTML = '';
      resultDiv.innerHTML = output;
    }

    showQuestion();
  </script>
</body>
</html>
