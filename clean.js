/* eslint-disable strict */
/**
 * Example store structure
 */
//I added an id of tests to the questions
//const store = {
    // 5 or more questions are required
    /*questions: [
      {id: 'tests',
        question: 'What is the correct title/name for the main character in the show "Doctor Who"?',
        answers: [
          'Coyote Ugly',
          'The Doctor',
          'Captain Kirk',
          'Soulja Boy'
        ],
        correctAnswer: 'The Doctor'
      },
      {id: 'tests',
        question: 'What is the most used motivational phrase used for Barry Allen/The Flash, in the CW show "The Flash"?',
        answers: [
          'Run, Barry, Run!',
          'Run Forest Run',
          'Run for president',
          'Run around on me'
        ],
        correctAnswer: 'Run, Barry, Run'
      },
    
    
      {id: 'tests',
        question: 'What is a Boggart?',
        answers: [
          'A piece of equipment used in a quidditch match',
          'A shape-shifting being that takes the form of your worst fear',
          'A type of plant from Professor Sprouts class',
          'What Hermione calls Malfoy '
        ],
        correctAnswer: 'A shape-shifting being that takes the form of your worst fear'
      },
    
    
      {id: 'tests',
        question: "Master Chief, mind telling me what you're doing on that ship?",
        answers: [
          'Sir, finishing this fight',
          'Step Admiral Hood, what are you doing here?',
          'Hey, Look over there',
          'There is a snake in my boot'
        ],
        correctAnswer: 'Sir, finishing this fight'
      },
  
      {id: 'tests',
        question: 'Name the show this phrase belongs to "Driver picks the music, shotgun shuts his cakehole."',
        answers: [
          'Greys Anatomy',
          'Supernatural',
          'The Walking Dead',
          'Game of Thrones'
        ],
        correctAnswer: 'Supernatual'
      },
      
      {id: 'tests',
        question: " Where is 'The One Ring' destroyed, in the climax event of the last movie/book in the Lord of the Rings series?",
        answers: [
          'The Lava/Fires of Mt. Doom, in Mordor',
          'the shire',
          'the deathstar',
          'The reading rainbow'
        ],
        correctAnswer: 'The Lava/Fires of Mt. Doom, in Mordor',
      },
      
      {id: 'tests',
          question: "What Planet is Princess Amadala from?",
          answers: [
            'Uranus',
            'Tatouine',
            'Naboo',
            'Epsalon3'
          ],
          correctAnswer: 'Naboo',
        },
        {id: 'tests',
          question: "In which movie is Jason Vorhees the main character?",
          answers: [
            'The Exorcist',
            'Halloween',
            'Nightmare on Elm Street',
            'Friday the 13th'
          ],
          correctAnswer: 'Friday the 13th',
        },
        {id: 'tests',
          question: "Which of these is not a witch in Hocus Pocus?",
          answers: [
            'Sarah Sanderson',
            'Winifred Sanderson',
            'Elizabeth Sanderson',
            'Mary Sanderson'
          ],
          correctAnswer: 'Elizabeth Sanderson',
        },
        {id: 'tests',
          question: "Who is the last Avatar to be born?",
          answers: [
            'Ang',
            'Wan',
            'Korra',
            'Daniel'
          ],
          correctAnswer: 'Korra',
        },
            quizStarted= false,
            questionNumber= 0,
            score= 0,
            wrong= 0,
    ];
}

//generator html funcs
function startPage(){
    return 
    `<div class="startquiz">
        <img src="images/movie-clapper.png" alt="Movie-clapper">
        <h2>Movie & Trivia Quiz</h2>
        <p>They all float down here!!!!</p>
        <button class 'start'>Let's Play</button>
      </div>`;
}

function generateQuestion(store){
    let questionPage =
`<div class="questions">
<h2 id="question">${currentQuestion.question}</h2>
<form class="boxed">
<input type="radio" id="ans1" name="answer" value="${currentQuestion.answer[0]}">
<label for="male">${currentQuestion.answer[0]}</label><br>
<input type="radio" id="ans2" name="answer" value="${currentQuestion.answer[1]}">
<label for="female">${currentQuestion.answer[1]}</label><br>
<input type="radio" id="ans3" name="answer" value="${currentQuestion.answer[2]}">
<label for="other">${currentQuestion.answer[2]}</label><br>
<input type="radio" id="ans4" name="answer" value="${currentQuestion.answer[3]}">
<label for="other">${currentQuestion.answer[3]}</label>
</form>  
<div>
   <button id="submit">Submit Answer</button>
</div>
</div>`;
}

//event listeners/handlers
function handleStart(){
    $('.main').on('click', '.start', ()=>{
        renderQuestion();
        quizStarted=true;
        //renderScore();
    });
}

function handleSubmit(){
    $('main').on('click', '.submit', (evt) =>{
        evt.preventDefault();
        if ($('input[name="answer"]:checked').val() === store.questions[id.correctAnswer].answers){
            
        }

    });
}*/









