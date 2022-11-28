
var questions = [
    new Questions('Who was the first world champion?', ['Italy', 'Argentina', 'Uruguay', 'Germany'], 'Uruguay'),
    new Questions('Who is the top scorer in all world cups?', ['Klose', 'Pele', 'Maradona', 'Cubillas'], 'Klose'),
    new Questions('Which team finished second three times but never won?', ['Colombia', 'Hungary', 'Netherlands', 'Spain'], 'Netherlands'),
    new Questions('The last home team to win the WC was?', ['Germany', 'Italy', 'Uruguay', 'France'], 'France'),
    new Questions('Spain won the world cup in what year?', ['1958', '2002', '2010', '1994'], '2010'),
    new Questions('The last time Peru played in a WC was?', ['1982', '1978', '1998', '1990'], '1982'),
    new Questions('The score in the "Maracanazo" of 1950 was?', ['3-0', '2-1', '1-0', '3-1'], '2-1'),
    new Questions('The first Latin American country to host the WC twice was?', ['Mexico', 'Brazil', 'Argentina', 'Chile'], 'Mexico'),
    new Questions('The only country to win the WC 5 times is?', ['Germany', 'Italy', 'Brazil', 'Argentina'], 'Brazil'),
    new Questions('Mexico 70 was played with how many teams?', ['32', '16', '24', '12'], '16')
]

var quiz = new Quiz(questions);
 
function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        showQuestion();
        showProgress();
    }
    
}


function evaluateGuess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
} // close guess

function showQuestion() {
    var element = document.getElementById('question');
    element.innerHTML = quiz.getQuestion().text;

    var choices = quiz.getQuestion().choices;

    for (var i = 0; i < choices.length; i++) {
        var element = document.getElementById(i);//choice 0
        element.innerHTML = choices[i]; // set choice 0 innerhtml to slytherin
        evaluateGuess(i, choices[i]);
    }
}// close showQuestion

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;

} // close showProgress


function showScores() {
    var gameOverHtml = `<h1>Result</h1><h2 id='score'>Score:  ${quiz.score} / 10</h2>`;
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

} // close showScores

populate();
