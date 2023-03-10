const quizData = [  
    {  
    question: "Manisa'nın kurtuluş tarihi ne zamandır?",  
    a: "9 Eylül",  
    b: "8 Eylül",  
    c: "11 Mart",  
    d: "8 Ağustos",  
    correct: "b",  
    },  
    {  
    question: "Manisa'nın denize kıyısı var mıdır?",  
    a: "Evet, vardır",  
    b: "Hayır, yoktur",  
    c: "Boş Cevap!",  
    d: "Boş Cevap!",  
    correct: "b",  
    },  
    {  
    question: "Manisa'nın neyi meşhurdur?",  
    a: "Çökertme Kebabı",  
    b: "Tulum Peyniri",  
    c: "Erik",  
    d: "Mesir Macunu",  
    correct: "d",  
    },  
    {  
    question: "Manisa'nın en büyük dağı hangisidir?",  
    a: "Spil Dağı",  
    b: "Erciyes Dağı",  
    c: "Uludağ",  
    d: "Ergan Dağı",  
    correct: "a",  
    },
    {  
    question: "Manisa hangi bölgededir?",  
    a: "Doğu Anadolu Bölgesi",  
    b: "İç Anadolu Bölgesi",  
    c: "Ege Bölgesi",  
    d: "Marmara Bölgesi",  
    correct: "c",  
    },  
];  

const quiz = document.getElementById("quiz");  
const answerElements = document.querySelectorAll(".answer");  
const questionElement = document.getElementById("question");  
const a_text = document.getElementById("a_text");  
const b_text = document.getElementById("b_text");  
const c_text = document.getElementById("c_text");  
const d_text = document.getElementById("d_text");  
const submitButton = document.getElementById("submit");  

let currentQuiz = 0;  
let score = 0;  

const deselectAnswers = () => {  
    answerElements.forEach((answer) => (answer.checked = false));  
};  

const getSelected = () => {  
    let answer;  
    answerElements.forEach((answerElement) => {  
    if (answerElement.checked) answer = answerElement.id;  
    });  
    return answer;  
};  

const loadQuiz = () => {  
    deselectAnswers();  
    const currentQuizData = quizData[currentQuiz];  
    questionElement.innerText = currentQuizData.question;  
    a_text.innerText = currentQuizData.a;  
    b_text.innerText = currentQuizData.b;  
    c_text.innerText = currentQuizData.c;  
    d_text.innerText = currentQuizData.d;  
};  

loadQuiz();  

submitButton.addEventListener("click", () => {  
    const answer = getSelected();  
    if (answer) {  
        if (answer === quizData[currentQuiz].correct) score++;  
        currentQuiz++;  
        if (currentQuiz < quizData.length) loadQuiz();  
        else {  
            quiz.innerHTML = `  
            <h2>${quizData.length} sorudan ${score} tanesini bildin.</h2>  
            <button id="submit" onclick="history.go(0)">Baştan Başla</button>  
            ` 
        }  
    }  
}); 

