//Create a variable called questionArray holding all the questions
var questionArray = [{  
       question:  "Who is the lead singer of Queen?",
       answers: ["Freddy Mercury", "answer2", "answer3", "answer4"],
       correctAnswer: "Freddy Mercury" }];
    // },
        // "What is the largest selling album of all time?", "Who is the king of pop?", "Who is the king of rock?",  
        //             "What year did Tupac Shakur die?", "What instrument is Carlos Santana known for?", "Which of these is not one of the judges for America's Got Talent?"
        //             "Which singer used to bite the heads off snakes during his concerts?", "Who is the lead singer of Kiss?", "Which member of the Jackson 5 became a hit solo artist?(Hint: He also made the largest selling album of all time)"];

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

//Create a function called countDown() that displays the time remaining
function countDown() {
    
    //if timeRemaining is less than or equal to 0
    if (timeRemaining <= 0){
        
        //clearInterval

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

    //display each answer in the object in questionArray at questionIndex
    for (var i = 0; i < questionArray[questionIndex].answers.length; i++) {
        
    }

}
//Create a function called questionPage
function questionPage() {

    $("div").show();

    $("#timeRemaining").text(timeRemaining + " seconds");

    //use setInterval to call countDown() every 1 second
    setInterval(countDown, 1000);
    
    //call displayQuestion()
    displayQuestion();
    
    //call displayAnswers()
    displayAnswers();

    //increment questionIndex
    questionIndex++;
    
}
//Create a function called losePage
function losePage() {
    
    //display losing message
    
    //display an image or gif
    
    //increment questionIndex
    questionIndex++;
    
    //use setTimout to call questionPage after 5 sec
    setTimeout(questionPage, 5000);
    
}
//Create a function called winPage
function winPage() {

    //display winning message
    
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
// $("#answers").on("click", function() {

    
//     //if the button clicked is the correct answer
//     if (this.textContent == ) {}
    
//         //call  winPage()
    
//     //if the button clicked is the incorrect answer
    
//         //call losePage()
// });

startGame();