const quizData = [
    {
        question: 'How old are you?',
        a: '10',
        b: '15',
        c: '20',
        d: '25',
        correct: 'c'
    }, {
        question: 'What is the best programming language?',
        a: 'Java',
        b: 'C',
        c: 'python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is he President of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    }
];
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    console.log(answer);
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            console.log(answerEl);
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
            answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct )
        {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
        }
    }
});