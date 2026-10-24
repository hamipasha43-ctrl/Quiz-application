
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        option1: "script",
        option2: "javascript",
        option3: "js",
        correctOption: "script"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        option1: "The head section",
        option2: "The body section",
        option3: "Both the head and body section are correct",
        correctOption: "Both the head and body section are correct"
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: "script href=xxx.js",
        option2: "script name=xxx.js",
        option3: "script src=xxx.js",
        correctOption: "script src=xxx.js"
    }
];

let quizbox = document.querySelector("#quizbox");
let nextbtn = document.querySelector("#nextbtn");
let questionNo = 0;
let score = 0;

const showQuestion = () => {

    if (questionNo < questions.length) {

        quizbox.innerHTML = `
            <h1>${questionNo + 1}: ${questions[questionNo].question}</h1>

            <label>
                <input type="radio" name="options" value="${questions[questionNo].option1}">
                ${questions[questionNo].option1}
            </label>
            <br><br>

            <label>
                <input type="radio" name="options" value="${questions[questionNo].option2}">
                ${questions[questionNo].option2}
            </label>
            <br><br>

            <label>
                <input type="radio" name="options" value="${questions[questionNo].option3}">
                ${questions[questionNo].option3}
            </label>
            <br><br>
        `;

        nextbtn.disabled = true;

        const options = document.querySelectorAll('input[name="options"]');

        options.forEach((option) => {
            option.addEventListener("click", () => {
                nextbtn.disabled = false;
            });
        });

    } else {
        quizbox.innerHTML = `
            <h1>Quiz Completed!</h1>
            <h2>Total Questions: ${questions.length}</h2>
            <h2>Your Score: ${score} / ${questions.length}</h2>
            <h2>Percentage: ${((score / questions.length) * 100).toFixed(2)}%</h2>
        `;

        nextbtn.style.display = "none";
    }
};

showQuestion();

nextbtn.addEventListener("click", () => {

    const selectedOption = document.querySelector('input[name="options"]:checked');

    if (selectedOption.value === questions[questionNo].correctOption) {
        score++;
    }

    questionNo++;
    showQuestion();
});
