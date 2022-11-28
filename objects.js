class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    } // close constructor

    getQuestion() {
        return this.questions[this.questionIndex];
    } // close getQuestionIndex

    guess(answer) {

        if (this.getQuestion().correctAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;

    } // close guess

    isEnded() {
        return this.questions.length === this.questionIndex;

    } // close isEnded

} // close Quiz

class Questions {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    } // close constructor

    correctAnswer(choice) {
        return choice === this.answer;
    } // close correctAnswer    

} // close Questions







