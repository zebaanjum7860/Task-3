// Quiz Section
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Rome", "Paris", "Madrid", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const answerBox = document.getElementById("answers");
  answerBox.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => {
      if (option === q.answer) {
        alert("✅ Correct Answer!");
      } else {
        alert("❌ Wrong Answer!");
      }
    };
    answerBox.appendChild(btn);
  });
}

document.getElementById("next-btn").onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    alert("🎉 Quiz Completed!");
    document.getElementById("question").innerText = "You finished the quiz!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
  }
};

showQuestion();

// Joke API
document.getElementById("joke-btn").addEventListener("click", getJoke);

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("joke").innerText = `${data.setup} 🤔 ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").innerText = "Something went wrong 😢";
    });
}
