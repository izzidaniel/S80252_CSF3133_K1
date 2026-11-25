const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: "CSS"
    },
    {
        question: "Which tag is used to link an external JavaScript file?",
        options: ["<js>", "<script>", "<javascript>", "<link>"],
        answer: "<script>"
    }
];

// Susun soalan secara rawak (randomized)
questions.sort(() => Math.random() - 0.5);

//kita declare dulu
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;
let answered = false;

//questio pegang kotak id=question
// const __ pagang id
//sapa pegang sapa
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("Answer-Options");
const timerEl = document.getElementById("Timer");
const feedbackEl = document.getElementById("feedback");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");
const scoreEl = document.getElementById("score");

//buat load supaya tak tulis code sama berulang kali
//load - padam lama, tulis baru, kira timer
function loadQuestion() {

    //reset balik
    //c;earInterval
    clearInterval(timer);
    answered = false;
    timeLeft = 15;
    feedbackEl.textContent = "";
    timerEl.textContent = `Time remaining: ${timeLeft} seconds`;

    const currentQ = questions[currentQuestionIndex];
    questionEl.textContent = `${currentQuestionIndex + 1}. ${currentQ.question}`;
    optionsEl.innerHTML = "";

    currentQ.options.forEach((option) => {
        const label = document.createElement("label");
        label.className = "option-item";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quizOption";
        radio.value = option;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + option));
        optionsEl.appendChild(label);
    });

    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        //&{} tempat kosong
        timerEl.textContent = `Time remaining: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(timerl);
            answered = true;
            feedbackEl.textContent = `Time's up! The correct answer is: ${questions[currentQuestionIndex].answer}`;
            feedbackEl.style.color = "red";
        }
    }, 1000);
}

submitBtn.addEventListener("click", () => {
    if (answered) return;

    const selected = document.querySelector('input[name="quizOption"]:checked');
    if (!selected) {
        alert("Please select an answer first!");
        return;
    }

    clearInterval(timer);
    answered = true;

    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selected.value === correctAnswer) {
        score++;
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
    } else {
        feedbackEl.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
        feedbackEl.style.color = "red";
    }
});

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        clearInterval(timer);
        questionEl.textContent = "Quiz Completed!";
        optionsEl.innerHTML = "";
        timerEl.textContent = "";
        feedbackEl.textContent = "";
        submitBtn.style.display = "none";
        nextBtn.style.display = "none";
        scoreEl.textContent = `Your Final Score: ${score} out of ${questions.length}`;
    }
});

// Mulakan soalan pertama
loadQuestion();
