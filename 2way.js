// Game questions and answers
const questions = [
  { question: "What's my favorite color?", answer: "blue" },
  { question: "What's my favorite food?", answer: "pizza" },
  { question: "What's my favorite movie?", answer: "inception" }
];

let currentQuestion = 0;
let userAnswers = [];
let herGuesses = [];
let score = 0;

function showQuestion() {
  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];
    document.getElementById('question').innerText = question.question;
    document.getElementById('answer').value = '';
    document.getElementById('her-turn').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    console.log(`Showing question ${currentQuestion + 1}: ${question.question}`);
  } else {
    showScore();
  }
}

function submitAnswer() {
  const userAnswer = document.getElementById('answer').value.toLowerCase();
  if (userAnswer === '') {
    alert("Please enter an answer before submitting.");
    return;
  }
  userAnswers.push(userAnswer);
  console.log(`Answer for question ${currentQuestion + 1}: ${userAnswer}`);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('her-turn').style.display = 'block';
  } else {
    showScore();
  }
}

function submitGuess() {
  const guess = document.getElementById('her-answer').value.toLowerCase();
  if (guess === '') {
    alert("Please enter a guess before submitting.");
    return;
  }
  herGuesses.push(guess);
  console.log(`Her guess for question ${currentQuestion}: ${guess}`);

  // Check if the guess is correct
  if (guess === userAnswers[currentQuestion - 1]) {
    score++;
  }

  if (currentQuestion < questions.length) {
    document.getElementById('her-turn').style.display = 'none';
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById('score').innerText = score;
  document.getElementById('total-questions').innerText = questions.length;
  document.getElementById('score-container').style.display = 'block';
  console.log(`Game Over! She got ${score} out of ${questions.length} correct!`);
}

// Start the game
showQuestion();
