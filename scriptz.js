// Define All Variables 
var timer = document.querySelector("#time");
var question = document.querySelector("#currentquestion")
var score = document.querySelector("#score")
var buttonA = document.querySelector("#buttonA");
var buttonB = document.querySelector("#buttonB");
var buttonC = document.querySelector("#buttonC");
var buttonD = document.querySelector("#buttonD");
var anstatus = document.querySelector("#anstatus");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");
var qArea = document.querySelector("#qContainer");
var highscores = document.querySelector("#highscorebox")

var score = 0;
var qindex = 0;
var secondsLeft = 60;

//Define Questions
var questions = [
    {question: "What is 2+2", choices: ["2", "4", "fish", "Cambodia"], answer: "4"}, 
    {question: "Who is a real late night talk show host?", choices: ["Murray", "Jay Leno", "Johnny Bird", "Captain Jack"], answer: "yellow"},
    {question: "Who runs AWS?", choices: ["Google", "Amazing Web Services", "Amazon", "Joey"], answer: "Amazon"},
    {question: "what color is money", choices: ["green", "pink", "blue", "brown"], answer: "green"},
    {question: "What is the best energy drink?", choices: ["Monster, Red Bull, Bang, Reign"], answer: "Monster"}
]


//Push Question To User
function writequestion(){
    question.innerHTML = questions[qindex].question;
    choiceA.innerHTML = questions[qindex].choices[0];
    choiceB.innerHTML = questions[qindex].choices[1];
    choiceC.innerHTML = questions[qindex].choices[2];
    choiceD.innerHTML = questions[qindex].choices[3];  
}

writequestion();

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
        }

    }, 1000);
    }

function sendMessage() {
    timer.textContent = "TIME UP!";
    timer.style.color = "#ff0000";
    setInterval(function() {
    timer.style.display = (timer.style.display == 'none' ? '' : 'none');
    }, 500);
}

setTime();


    //button correct/incorrect states
buttonA.addEventListener("click", function(event){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        anstatus.innerHTML = qindex;
secondsLeft = secondsLeft -5;

    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        anstatus.innerHTML = qindex;
        secondsLeft = secondsLeft -5;

    }else if(questions[qindex].choices[0] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
        score.innerHTML = score;
    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        anstatus.innerHTML = qindex;
    }else if(questions[qindex].choices[0] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 5;
        anstatus.innerHTML = qindex;
        score.innerHTML = score;
    }
    writequestion();

})

buttonB.addEventListener("click", function(){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }else if(questions[qindex].choices[1] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 5;
        console.log(qindex);
        anstatus.innerHTML = qindex;
        score.innerHTML = score;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }
    writequestion();

})

buttonC.addEventListener("click", function(){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[2] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 5;
        console.log(qindex);
        anstatus.innerHTML = qindex;
        score.innerHTML = score;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }
    writequestion();

})

buttonD.addEventListener("click", function(){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Inorrect!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }else if(questions[qindex].choices[3] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 5;
        console.log(qindex);
        anstatus.innerHTML = qindex;
        score.innerHTML = score;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatus.innerHTML = qindex;
    }
    writequestion();

})

//timer