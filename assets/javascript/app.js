//Start Game
$("#start").on('click',function(){
    game.start();
})
//Trivia Game Questions
var questions = [ {
    question: "According to Genesis, who were the first two people?",
    answers:["A. Abraham and Sara", "B. Moses and Miriam","C. Adam and Eve", "D. Will and Grace"],
    correctAnswer: "C. Adam and Eve"
}, 
    {
    question: "How many disciples did Jesus choose?",
    answers: ["A. 24", "B. 12", "C. 80", "D. 120"],
    correctAnswer: "B. 12",
},
    {
    question: "Who was the disciple that betrayed Jesus?",
    answers: ["A. Matthew", "B. Judas", "C. Luke", "D. John"],
    correctAnswer: "B. Judas",
},
    {
    question: "Who was the wise King that had 300 wives and 700 concubines?",
    answers: ["A. David", "B. Joseph", "C. Solomon", "D. Nebuchanezzar"],
    correctAnswer: "C. Solomon",
},
    {
    question: "What was the priority that Jesu said we should seek?",
    answers: ["A. Seek first love", "B. Seek first the kingdom of God", "C. Seek first forgiveness", "D. Seek first wisdom and knowledge"],
    correctAnswer: "B. Seek first the kingdom of God",
},
    {
    question: "The kingdom of God is explained in which parable?",
    answers: ["A. The Parable of the Sower", "B. The Beatitude Parables", "C. The Parable of the Talents", "D. The Parable of the 10 Virgins"],
    correctAnswer: "A. The Parable of the Sower",
},


];

//Game Variables

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("Time is up");
            game.done();
        }
    },
    
    start: function(){
        //set timer to decrease by 1 second
        timer = setInterval(game.countdown,1000);
        //Add time remaining to Trivia Game
        $("#game").prepend('<h2>Remaining Time: <span id="counter">120</span> Seconds</h2>');
            //remove start game button
            $("#start").remove();
            //For loop to append each question a name that is equal to a question and a value that is equal to the answer.
            //This will store the value with each button
            for(var i = 0; i < questions.length; i++){
                $("#game").append('<h2>' + questions[i].question+ '</h2>');
                for(var j=0; j<questions[i].answers.length; j++){
                    $("#game").append("<input type='radio' name = 'question - "+i+" ' value = '"+questions[i].answers[j]+"'>"+questions[i].answers[j])
                }
            }
        
        

    },
    
}


