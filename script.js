//assignment variables
var hsEl = document.querySelector("#HS");
var scoreEl = document.querySelector("#scorecount")
var timeEl = document.querySelector("#time");
var questionEl = document.querySelector("#qblock");
var buttonAEl = document.querySelector("#buttonA");
var buttonBEl = document.querySelector("#buttonB");
var buttonCEl = document.querySelector("#buttonC");
var buttonDEl = document.querySelector("#buttonD");
var anstatusEl = document.querySelector("#anstatus");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");
var qArea = document.querySelector("#qContainer");

var score = 0;
var qindex = 0;
var secondsLeft = 15;

//array of object questions
var questions = [
    {question: "what color is the sky?", choices: ["green", "pink", "blue", "brown"], answer: "blue"}, 
    {question: "what color are bannanas?", choices: ["green", "yellow", "blue", "orange"], answer: "yellow"},
    {question: "what color is a leaf?", choices: ["green", "pink", "blue", "green"], answer: "green"},
    {question: "what color is coffee?", choices: ["green", "pink", "blue", "brown"], answer: "brown"},
    {question: "what color is a outer space?", choices: ["black", "pink", "blue", "brown"], answer: "black"}
]
//writing to question block
function writeCurrentq(){
    questionEl.innerHTML = questions[qindex].question;
    choiceA.innerHTML = questions[qindex].choices[0];
    choiceB.innerHTML = questions[qindex].choices[1];
    choiceC.innerHTML = questions[qindex].choices[2];
    choiceD.innerHTML = questions[qindex].choices[3];  
}

writeCurrentq();

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
buttonAEl.addEventListener("click", function(event){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[0] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[0] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[0] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }
    writeCurrentq();

})

buttonBEl.addEventListener("click", function(){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[1] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[1] !== questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }
    writeCurrentq();

})

buttonCEl.addEventListener("click", function(){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[2] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[2] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }
    writeCurrentq();

})

buttonDEl.addEventListener("click", function(){
    event.preventDefault();
        //do this when a button is clicked,
    if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Inorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }else if(questions[qindex].choices[3] === questions[qindex].answer){
        alert("Correct!");
        qindex++; 
        score = score + 100;
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
        scoreEl.innerHTML = score;
    }else if(questions[qindex].choices[3] !== questions[qindex].answer){
        alert("Incorrect!");
        qindex++; 
        console.log(qindex);
        anstatusEl.innerHTML = qindex;
    }
    writeCurrentq();

})

//timer


