//Start Game
$("#start").on('click', function(){
    game.start();
})

$(document).on('click', '#done', function(){
    game.done();
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
    question: "What was the priority that Jesus said we should seek first?",
    answers: ["A. Seek first love", "B. Seek first the kingdom of God", "C. Seek first forgiveness", "D. Seek first wisdom and knowledge"],
    correctAnswer: "B. Seek first the kingdom of God",
},
    {
    question: "The kingdom of God is explained in which parable?",
    answers: ["A. The Parable of the Sower", "B. The Beatitude Parables", "C. The Parable of the Talents", "D. The Parable of the 10 Virgins"],
    correctAnswer: "A. The Parable of the Sower",
},

    {
    question: "Where did the prophet Elijah instruct Naaman the leper to wash himself?",
    answers: ["A. In the Temple", "B. In the Dead Sea", "C. In the River Nile", "D. In the Jordan River"],
    correctAnswer: "D. In the Jordan River",
},
    {
    question: "What were the sins committed by Samuel's two sons?",
    answers: ["A.They worshipped other gods and disobeyed God", "B. They were dishonest and lustful", "C. They took bribes and perverted justice"], 
    correctAnswer: "C. They took bribes and perverted justice",
},
    {
    question: "What did Solomon as God for?",
    answers: ["A. Wisdom", "B. A Wife", "C. Riches and Honor", "D. Victory in battle"],
    correctAnswer: "A. Wisdom",    
},
    {
    question: "According to I John 4:8, God is _______?",
    answers: ["A. Love", "B. Peace", "C. Light", "D. Mighty"],
    correctAnswer: "A. Love",
    }
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
            $("game").append('<br><button id="done">Done</button>');
    },

    //Function to check for correct answers
    done: function(){
        $.each($('input[name="question - 0]":checked'),function(){
            if($(this).val()==questions[0].correctAnswer) {
            game.correct++;
            } else {
                game.incorrect++;
            }
    })

    $.each($('input[name="question - 1]":checked'),function(){
        if($(this).val()==questions[1].correctAnswer) {
        game.correct++;
        } else {
            game.incorrect++;
        }
})

    $.each($('input[name="question - 2]":checked'), function(){
        if($(this).val()==questions[2].correctAnswer) {
        game.correct++;
        } else {
            game.incorrect++;
        }
})

    $.each($('input[name="question - 3]":checked'), function(){
        if($(this).val()==questions[3].correctAnswer) {
        game.correct++;
        } else {
            game.incorrect++;
        }
})

    $.each($('input[name="question - 4]":checked'), function(){
        if($(this).val()==questions[4].correctAnswer) {
        game.correct++;
        } else {
            game.incorrect++;
        }
})

    $.each($('input[name="question - 5]":checked'), function(){
        if($(this).val()==questions[5].correctAnswer) {
        game.correct++;
        } else {
            game.incorrect++;
        }
})

    $.each($('input[name="question - 6]":checked'), function(){
        if($(this).val()==questions[6].correctAnswer) {
        game.correct++;
        } else {
            game.incorrect++;
        }
})

    $.each($('input[name="question - 7]":checked'), function(){
        if($(this).val()==questions[7].correctAnswer) {
        game.correct++;
        } else {
            game.incorrect++;
        }
})

    $.each($('input[name="question - 8]":checked'), function(){
        if($(this).val()==questions[8].correctAnswer) {
        game.correct++;
        } else {
            game.incorrect++;
        }
})

    $.each($('input[name="question - 9]":checked'), function(){
        if($(this).val()==questions[9].correctAnswer) {
        game.correct++;
        } else {
            game.incorrect++;
        }
})

    $.each($('input[name="question - 10]":checked'), function(){
        if($(this).val()==questions[10].correctAnswer) {
        game.correct++;
        } else {
            game.incorrect++;
        }
})
    this.result();
},
    result: function(){
        clearInterval(timer);
        $("#game h2").remove();
        $("game").html("<h2>You'reDone</h2>");
        $("game").append("<h3>Correct Answers: "+this.correct+"</h3>");
        $("game").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>")
        $("game").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        console.log(result);
    }
}


