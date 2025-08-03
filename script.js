// Dados do quiz
const questions = [
  {
    question: "Qual desses é um exemplo de alimento ultraprocessado?",
    options: ["Maçã", "Frango grelhado", "Refrigerante", "Ovo cozido"],
    answer: "Refrigerante"
  },
  {
    question: "O consumo excessivo de alimentos processados pode aumentar o risco de:",
    options: ["Miopia", "Doenças cardíacas", "Resfriado comum", "Infecções urinárias"],
    answer: "Doenças cardíacas"
  },
  {
    question: "Qual ingrediente é comum em alimentos ultraprocessados?",
    options: ["Vitamina C natural", "Sal do Himalaia", "Açúcar refinado", "Chá verde"],
    answer: "Açúcar refinado"
  },
  {
    question: "Documentários como 'Muito Além do Peso' abordam:",
    options: ["Tecnologia 5G", "Obesidade infantil e alimentação", "Astrofísica", "Cultivo de flores"],
    answer: "Obesidade infantil e alimentação"
  },
  {
    question: "Qual destes NÃO é um objetivo de evitar alimentos processados?",
    options: [
      "Ter mais energia e saúde",
      "Prevenir doenças crônicas",
      "Economizar tempo com fast food",
      "Reduzir o consumo de sódio e açúcar"
    ],
    answer: "Economizar tempo com fast food"
  }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");

function showQuestion() {
  const q = questions[currentQuestion];
  quizContainer.innerHTML = `
    <h2>${q.question}</h2>
    <ul>
      ${q.options.map(option => `
        <li><button onclick="checkAnswer('${option}')">${option}</button></li>
      `).join('')}
    </ul>
    <p>Pergunta ${currentQuestion + 1} de ${questions.length}</p>
  `;
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  if (selected === q.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.innerHTML = `
    <h2>Você terminou o quiz!</h2>
    <p>Acertou ${score} de ${questions.length} perguntas.</p>
    <button onclick="restartQuiz()">Tentar novamente</button>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

// Inicia o quiz quando a página carrega
if (quizContainer) {
  showQuestion();
}
