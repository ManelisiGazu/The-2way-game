// Game questions and answers
const questions = [
  { question: "What's my favorite color?", answer: "blue" },
  { question: "What's my favorite food?", answer: "pizza" },
  { question: "What's my favorite movie?", answer: "inception" }
];

let currentQuestion = 0; // Track the current question
let userAnswers = [];    // Store your answers
let herGuesses = [];     // Store her guesses
let score = 0;           // Track her score
let isGuessingPhase = false; // Track which phase we're in

// Show the current question
function showQuestion() {
  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];
    
    if (isGuessingPhase) {
      // Update the question phrasing for her turn
      document.getElementById('her-turn-question').innerText = `What do you think is my answer to: "${question.question}"?`;
      document.getElementById('her-answer').value = '';
      document.getElementById('her-turn').style.display = 'block';
      document.getElementById('question-container').style.display = 'none';
    } else {
      document.getElementById('question').innerText = question.question;
      document.getElementById('answer').value = '';
      document.getElementById('question-container').style.display = 'block';
      document.getElementById('her-turn').style.display = 'none';
    }
  } else {
    if (isGuessingPhase) {
      showScore();
    } else {
      // Start her guessing phase
      currentQuestion = 0;
      isGuessingPhase = true;
      showQuestion();
    }
  }
}

// Submit your answer
function submitAnswer() {
  const userAnswer = document.getElementById('answer').value.toLowerCase();
  if (userAnswer.trim() === '') {
    alert("Please enter an answer before submitting.");
    return;
  }
  userAnswers.push(userAnswer);
  currentQuestion++;
  showQuestion();
}

// Submit her guess
function submitGuess() {
  const herGuess = document.getElementById('her-answer').value.toLowerCase();
  if (herGuess.trim() === '') {
    alert("Please enter a guess before submitting.");
    return;
  }
  herGuesses.push(herGuess);

  // Check if her guess is correct
  if (herGuess === userAnswers[currentQuestion]) {
    score++;
  }

  currentQuestion++;
  showQuestion();
}

// Show the final score
function showScore() {
  document.getElementById('score').innerText = score;
  document.getElementById('total-questions').innerText = questions.length;
  document.getElementById('score-container').style.display = 'block';
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('her-turn').style.display = 'none';
}

// Start the game
showQuestion();
