var quizForm = document.querySelector(".quiz-form");
var submitAnswerButton = document.querySelector("#submit-answer-btn");
var outputDiv = document.querySelector("#output");

var correctAnswers = ['90°', 'right angled'];

function calculateScore(){
    var score=0;
    var index=0;
    
    const data = new FormData(quizForm);
    for(let value of data.values()){
        if(value == correctAnswers[index]){
            score = score +1;
        }
        index = index+1;
    }
    outputDiv.innerText = "Your Score is " + score;
}

submitAnswerButton.addEventListener("click", calculateScore);