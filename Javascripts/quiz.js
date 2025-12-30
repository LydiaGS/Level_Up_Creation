const questions = [
  {
    question: "Quel est votre objectif principal ?",
    answers: [
      { text: "Présenter mon activité", type: "vitrine" },
      { text: "Vendre en ligne", type: "ecommerce" },
      { text: "Former ou partager du contenu", type: "formation" }
    ]
  },
  {
    question: "Quel est votre budget approximatif ?",
    answers: [
      { text: "Petit budget", type: "vitrine" },
      { text: "Budget moyen", type: "formation" },
      { text: "Budget élevé", type: "ecommerce" }
    ]
  },
  {
    question: "À quelle fréquence mettez-vous votre site à jour ?",
    answers: [
      { text: "Rarement", type: "vitrine" },
      { text: "Régulièrement", type: "formation" },
      { text: "Très souvent", type: "ecommerce" }
    ]
  },
  {
    question: "Avez-vous besoin de paiements en ligne ?",
    answers: [
      { text: "Non", type: "vitrine" },
      { text: "Oui pour des formations", type: "formation" },
      { text: "Oui pour des produits", type: "ecommerce" }
    ]
  }
];

let index = 0;
let scores = { vitrine: 0, ecommerce: 0, formation: 0 };

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[index];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.textContent = a.text;
    btn.onclick = () => {
      scores[a.type]++;
      index++;
      index < questions.length ? showQuestion() : showResult();
    };
    answersEl.appendChild(btn);
  });
}

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");

  const best = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const content = {
    vitrine: {
      title: "Site vitrine",
      desc: "Idéal pour présenter votre activité et renforcer votre présence en ligne."
    },
    ecommerce: {
      title: "Site e-commerce",
      desc: "Parfait pour vendre vos produits avec paiements et automatisations."
    },
    formation: {
      title: "Plateforme de formation",
      desc: "Conçue pour vendre ou diffuser vos formations et contenus éducatifs."
    }
  };

  document.getElementById("result-title").textContent = content[best].title;
  document.getElementById("result-description").textContent = content[best].desc;
}

function restartQuiz() {
  index = 0;
  scores = { vitrine: 0, ecommerce: 0, formation: 0 };
  resultEl.classList.add("hidden");
  quizEl.classList.remove("hidden");
  showQuestion();
}

showQuestion();
