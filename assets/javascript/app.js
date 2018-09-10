$('#start').on('click', function(){

  game.start();
})

$(document).on('click', '#end', function(){
  game.done();
})
  

var questions = [{
  question: "This show was aired on ABC at 9:00 AM. It featured those furry creatures from the Return Of The Jedi movie released in 1983. What was the show called?",
  choices: ["Ewoks","Droids", "The Smurfs", "Snorks"],
  correctAnswer: "Ewoks"
}, {
  question: "This show also aired on ABC, but at 9:30 AM. It featured C-3PO, and R2-D2. What was the name of the show?",
  choices: ["Droids", "Ewoks", "The Thirteen Ghosts Of Scooby-Doo", "Mr. T"],
  correctAnswer: "Droids"
}, {
  question: "The Muppet Babies were on Saturday mornings. Which American network originally aired them?",
  choices: ["ABC", "FOX", "NBC", "CBS"],
  correctAnswer: "CBS"
}, {
  question: "Superman, Batman, Firestorm, Cyborg, Wonder Woman, Samurai, Green Lantern, and Robin were some of the characters from which show?",
  choices: ["The Super: Friends The Legendary Super Powers Show", "The All New Super Friends Hour", "The Challenge Of The Super Friends", "The Super Powers Team: Galactic Guardians"],
  correctAnswer: "The Super Powers Team: Galactic Guardians"
}, {
  question: "NBC aired this cartoon at 8:00 AM. The show had those lovable creatures from the sea. What was the name of the show?",
  choices: ["Land Of The Lost", "The Smurfs", "Snorks", "Littles"],
  correctAnswer: "Snorks"
}, {
    question: "Which characters were used in the series 'The Thirteen Ghosts Of Scooby-Doo'?",
    choices: [("Scooby-Doo, Scrappy-Doo, Shaggy, Daphne, Flim Flam, Vincent Van Ghoul"), 
        ("Scooby-Doo, Scrappy-Doo, Scooby-Dumb, Shaggy, Daphne, Fred"), 
        ("Scooby-Doo, Scrappy-Doo, Shaggy, Fred, Velma, Daphne"), 
        ("Scooby-Doo, Shaggy, Fred, Daphene, Velma")],
    correctAnswer: "'Scooby-Doo', 'Scrappy-Doo', 'Shaggy', 'Daphne', 'Flim Flam', 'Vincent Van Ghoul'"
}, {
    question: "This show was about those little blue creatures that were constantly in peril of the evil 'Gargamel', and his cat 'Azrael'. What was the name of the show?",
    choices: ["The Gummi Bears", 
        "Snorks",
        "The Smurfs",
        "The Wuzzles"],
    correctAnswer: "The Smurfs"
}, {
    question: "Mr. T had his own cartoon 1983-1985.",
    choices: ["True", "False"],
    correctAnswer: "True"
}, {
    question: "What show had the characters named 'Hank The Ranger', 'Eric The Cavalier', 'Diana The Acrobat', 'Presto The Magician', 'Shelia The Thief', 'Bobby The Barbarian', 'Uni The Unicorn', and the 'Dungeon Master'?",
    choices: ["The Gummi Bears",
        "Land of the Lost",
        "Dungeons and Dragons",
        "Spider-Man and his Amazing Friends"],
    correctAnswer: "Dungeons and Dragons"
}, {
    question: "These rock n' roll rodents were a standard on Saturday mornings in the 1980's. You can't mention the 1985 season without them. What was the name of the show?",
    choices: ["The Smurfs",
        "Littles",
        "The Wuzzles",
        "Alvin And The Chipmunks"],
    correctAnswer: "Alvin And The Chipmunks"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 90,
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<= 0) {
            console.log("Your out of time!");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
          $('#start').remove();
          for (var i= 0; i < questions.length; i++) {
              $('#subwrapper').append('<h2>'+questions[i].question+'</h2');
              for (var j = 0; j < questions[i].choices.length; j++) {
                  $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].choices[j]+"'>"+questions[i].choices[j]);
              }
          }
          $('#subwrapper').append('<br><br><button id="end">FINISHED</button>')

      },
    done: function() {
        $.each($("input[name='question-0']:checked"),function(){
              if($(this).val() == questions[0].correctAnswer){
                  game.correct++;
              }else {
                  game.incorrect++; 
            }
        });

        $.each($("input[name='question-1']:checked"),function(){
              if($(this).val() == questions[1].correctAnswer){
                  game.correct++;
              }else {
                  game.incorrect++; 
          }
      });

        $.each($("input[name='question-2']:checked"),function(){
              if($(this).val() == questions[2].correctAnswer){
                  game.correct++;
              }else {
                  game.incorrect++; 
          }
      });

      $.each($("input[name='question-3']:checked"),function(){
              if($(this).val() == questions[3].correctAnswer){
                  game.correct++;
              }else {
                  game.incorrect++; 
          }
      });

      $.each($("input[name='question-4']:checked"),function(){
              if($(this).val() == questions[4].correctAnswer){
                  game.correct++;
              }else {
                  game.incorrect++; 
          }
      });

      $.each($("input[name='question-5']:checked"),function(){
              if($(this).val() == questions[5].correctAnswer){
                  game.correct++;
              }else {
                  game.incorrect++; 
          }
      });

      $.each($("input[name='question-6']:checked"),function(){
              if($(this).val() == questions[6].correctAnswer){
                  game.correct++;
              }else {
                  game.incorrect++; 
          }
      });

      $.each($("input[name='question-7']:checked"),function(){
              if($(this).val() == questions[7].correctAnswer){
                  game.correct++;
              }else {
                  game.incorrect++; 
          }
      });

      $.each($("input[name='question-8']:checked"),function(){
              if($(this).val() == questions[8].correctAnswer){
                  game.correct++;
              }else {
                  game.incorrect++; 
          }
      });

      $.each($("input[name='question-9']:checked"),function(){
              if($(this).val() == questions[9].correctAnswer){
                  game.correct++;
              }else {
                  game.incorrect++; 
          }
      });

      this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    } 
}