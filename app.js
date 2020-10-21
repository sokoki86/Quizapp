/* eslint-disable strict */
/**
 * Example store structure
 */
//I added an id of tests to the questions
const store = {
  // 5 or more questions are required
  questions: {
      question: 'What is the correct title/name for the main character in the show "Doctor Who"?',
      answers: [
        'Coyote Ugly',
        'The Doctor',
        'Captain Kirk',
        'Soulja Boy'
      ],
      correctAnswer: 'The Doctor'
    },
     {
      question: 'What is the most used motivational phrase used for Barry Allen/The Flash, in the CW show "The Flash"?',
      answers: [
        'Run, Barry, Run!',
        'Run Forest Run',
        'Run for president',
        'Run around on me'
      ],
      correctAnswer: 'Run, Barry, Run'
    },
  
  
    { question: 'What is a Boggart?',
      answers: [
        'A piece of equipment used in a quidditch match',
        'A shape-shifting being that takes the form of your worst fear',
        'A type of plant from Professor Sprouts class',
        'What Hermione calls Malfoy '
      ],
      correctAnswer: 'A shape-shifting being that takes the form of your worst fear'
    },
  
  
    { question: "Master Chief, mind telling me what you're doing on that ship?",
      answers: [
        'Sir, finishing this fight',
        'Step Admiral Hood, what are you doing here?',
        'Hey, Look over there',
        'There is a snake in my boot'
      ],
      correctAnswer: 'Sir, finishing this fight'
    },

    { question: 'Name the show this phrase belongs to "Driver picks the music, shotgun shuts his cakehole."',
      answers: [
        'Greys Anatomy',
        'Supernatural',
        'The Walking Dead',
        'Game of Thrones'
      ],
      correctAnswer: 'Supernatual'
    },
    
    { question: " Where is 'The One Ring' destroyed, in the climax event of the last movie/book in the Lord of the Rings series?",
      answers: [
        'The Lava/Fires of Mt. Doom, in Mordor',
        'the shire',
        'the deathstar',
        'The reading rainbow'
      ],
      correctAnswer: 'The Lava/Fires of Mt. Doom, in Mordor',
    }
  ]
    [
      { question: "What Planet is Princess Amadala from?",
        answers: [
          'Uranus',
          'Tatouine',
          'Naboo',
          'Epsalon3'
        ],
        correctAnswer: 'Naboo',
      },
      { question: "In which movie is Jason Vorhees the main character?",
        answers: [
          'The Exorcist',
          'Halloween',
          'Nightmare on Elm Street',
          'Friday the 13th'
        ],
        correctAnswer: 'Friday the 13th',
      },
      { question: "Which of these is not a witch in Hocus Pocus?",
        answers: [
          'Sarah Sanderson',
          'Winifred Sanderson',
          'Elizabeth Sanderson',
          'Mary Sanderson'
        ],
        correctAnswer: 'Elizabeth Sanderson',
      },
      { question: "Who is the last Avatar to be born?",
        answers: [
          'Ang',
          'Wan',
          'Korra',
          'Daniel'
        ],
        correctAnswer: 'Korra',
      }
    ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  wrong: 0,
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/
//I am creating the render function here


// this is where the start page template should go
function startPage(){ 
return
`<div class="startquiz">
  <img src="images/movie-clapper.png" alt="Movie-clapper">
  <h2>Movie & Trivia Quiz</h2>
  <p>They all float down here!!!!</p>
  <button id="beginQuiz">Let's Play</button>
</div>`}

function questionPage(){
   let questionPage =
     `<div class="questions">
    <h2 id="question">${currentQuestion.question}</h2>
    <form class="boxed">
    <input type="radio" id="ans1" name="quest" value="${currentQuestion.answer[0]}">
    <label for="answer1">${currentQuestion.answer[0]}</label><br>
    <input type="radio" id="ans2" name="quest" value="${currentQuestion.answer[1]}">
    <label for="answer2">${currentQuestion.answer[1]}</label><br>
    <input type="radio" id="ans3" name="quest" value="${currentQuestion.answer[2]}">
    <label for="answer3">${currentQuestion.answer[2]}</label><br>
    <input type="radio" id="ans4" name="quest" value="${currentQuestion.answer[3]}">
    <label for="answer4">${currentQuestion.answer[3]}</label>
    <button id="submit">Submit Answer</button>
    </form> 
    </div>`;
    return questionPage;
  }

  function correctAnswer(){
    let correctAnswer = `<div calss= "correct">
    <h2>You got it right</h2>
    <button class='btn start-button>Next Question</button>
    </div>;`
  }

  function incorrectAnswer(){
    let incorrectAnswer = `<div calss= "incorrect">
    <h2>Oops...You got it wrong</h2>
    <button class='btn start-button</button>
    </div>;`
  }
  }
   

function results() {
  let endOfQuiz = `<div class="endSlide">
  <h2>You made it!!!</h2>
  <p>You have completed our quiz</p>
  <p>you got ${store.score}/10 correct!!</p>
  <p>Click below to take this quiz again!!!</p>
  <br>
  <button>Take quiz again!!</button>
</div>`
}
  
 //REnder functions

 function renderStart(){
   const startHtml = startQuiz();
   $('.main').html(startHtml);
 }

 function renderQuestion() {
   const question = store.questions[store.questionNumber];
   $('.main').html(html);
 }

function renderCorrerct() {
  let html = correctAnswer();
  $('.main').html(html);
}

function renderIncorrect() {
  let html = incorrectAnswer();
  $('.main').html(html);
}
function renderResults() {
  let html = results();
  $('.main').html(html);

}



