//Create a variable called questionArray holding all the questions
var questionArray = [{  
       question:  "Who is the lead singer of Queen?",
       answers: ["Freddy Mercury", "answer2", "answer3", "answer4"],
       correctAnswer: "Freddy Mercury"
    }, {
       question: "What is the largest selling album of all time?",
       answers: ["Hotel California", "The Wall", "Back in Black", "Thriller"],
       correctAnswer: "Thriller"
    }, {
       question: "Who was the last king of pop?", 
       answers: ["Frank Sinatra", "Michael Jackson", "Elvis Presley", "The Beatles"],
       correctAnswer: "Michael Jackson"}
    // }, {
    //    question: "Who is the king of rock?", 
    //    answers: ["Elvis Presley", ""] 
    // }
        // "What year did Tupac Shakur die?", "What instrument is Carlos Santana known for?", "Which of these is not one of the judges for America's Got Talent?"
        // "Which singer used to bite the heads off snakes during his concerts?", "Who is the lead singer of Kiss?"
];
// //Create a variable called answerArray holding all the answers as objects (both correct and incorrect)
// var answerArray = [
//     {

//     }
// ];

//Create a variable called questionIndex initialized to 0
var questionIndex = 0;

//Create a variable called timeRemaining initialized to 30
var timeRemaining = 30;

//Create a variable called correctCounter initialized to 0
var correctCounter = 0;

//Create a variable called incorrectCounter initialized to 0
var incorrectCounter = 0;

//Create a variable called unansweredCounter initialized to 0
var unansweredCounter = 0;

var countDownInterval;

//Create a function called countDown() that displays the time remaining
function countDown() {
    
    //if timeRemaining is less than or equal to 0
    if (timeRemaining <= 0){

        //call losePage()
        losePage();
    }
    
    //decrement timeRemaining by 1
    timeRemaining--;
    
    //display timeRemaining to index.html by using the id #timeRemaining
    $("#timeRemaining").text(timeRemaining + " seconds");

}

//Create a function called displayQuestion
function displayQuestion() {
    
    //create a variable nextQuestion equal to the question element at questionIndex in questionArray
    var nextQuestion = questionArray[questionIndex].question;
    
    //Display the question on the screen by using the id #questionDisplayed
    $("#questionDisplayed").text(nextQuestion);

}


//Create a function called displayAnswers
function displayAnswers() {

    //Clear the section tag using id answers
    $("#answers").empty();

    //display each answer in the object in questionArray at questionIndex
    for (var i = 0; i < questionArray[questionIndex].answers.length; i++) {

        //Create a variable for each answer in the array
        var answer = questionArray[questionIndex].answers[i];

        //Create a new <option> tag pointed to by a variable named answerPointer
        var answerPointer = $("<p>");

        //Give each answer a class named choice
        answerPointer.addClass("choice");

        //give a class named value equal to the answer to <option>
        answerPointer.val(answer);

        //Display the answer in the text content of the <p> tag
        answerPointer.text(answer);

        //Append answerPointer to #answers
        $("#answers").append(answerPointer);
    }

}
//Create a function called questionPage
function questionPage() {
    //clear message
    $("#message").empty();


    $("div").show();

    //reset timer
    timeRemaining = 30;

    $("#timeRemaining").text(timeRemaining + " seconds");

    //use setInterval to call countDown() every 1 second
    countDownInterval = setInterval(countDown, 1000);
    
    //call displayQuestion()
    displayQuestion();
    
    //call displayAnswers()
    displayAnswers();
    
}
//Create a function called losePage
function losePage() {
    
    //clear countDownInterval
    clearInterval(countDownInterval);
    
    //Hide the questions and answers on the document
    $("div").hide();

    //display losing message
    $("#message").text("Better luck next time.");
    
    //display an image or gif
    
    //increment questionIndex
    questionIndex++;
    
    //use setTimout to call questionPage after 5 sec
    setTimeout(questionPage, 5000);
    
}
//Create a function called winPage
function winPage() {

    //Clear countDownInterval
    clearInterval(countDownInterval);

    //Hide the questions and answers on the document
    $("div").hide();

    //display winning message
    $("#message").text("Correct!!!");
    
    //display an image or gif
    
    //increment questionIndex
    questionIndex++;
    
    //use setTimeout to call questionPage after 5 sec
    setTimeout(questionPage, 5000);
}
//Create a function called startGame
function startGame() {
    // $("div").attr("style", "display: none;");
    $("div").hide();
    
    $("#button").show();

    var startButton = $("<button>");

    startButton.text("Start");

    $("#button").append(startButton);

}
    //

//Create an onClick event for the start button
$("#button").on("click", function() {

    //delete the start button
    $("#button").hide();

    //set timeRemaining to 30
    timeRemaining = 30;
    
    //call questionPage()
    questionPage();
    
});
//Create an onClick event for #answers
$(document).on("click", ".choice", function() {

    //if the button clicked is the correct answer
    if ($(this).val() === questionArray[questionIndex].correctAnswer) {

        //call  winPage()
        winPage();
    }
    //if the button clicked is the incorrect answer
    else {
        
        //call losePage()
        losePage();
    }
});

startGame();