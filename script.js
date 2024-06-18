function startQuiz() {
    window.location.href = 'question1.html';
}

function restartQuiz() {
    window.location.href = 'question1.html';
}

function checkAnswer(questionNumber, answer) {
    const correctAnswers = {
        1: 4,
        2: 'Paris',
        3: 'The relationship cannot be determined from the information given.',
    };

    if (answer === correctAnswers[questionNumber]) {
        if (questionNumber === 3) {
            window.location.href = 'success.html';
        } else {
            window.location.href = `question${questionNumber + 1}.html`;
        }
    } else {
        window.location.href = 'failure.html';
    }
}
