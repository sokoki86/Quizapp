/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {id: 'tests',
      question: 'What is the correct title/name for the main character in the show "Doctor Who"?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {id: 'tests',
      question: 'What is the most used motivational phrase used for Barry Allen/The Flash, in the CW show "The Flash"?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
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
      }
    ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
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

//startQuiz function
  function startQuiz(){
    store.quizStarted = true;
    store.questionNumber = 0;
    store.score = 0;
}

function startPage(){
    let startPage=
      `<div class="startquiz">
        <img src="images/movie-clapper.png" alt="Movie-clapper">
        <h2>Movie & Trivia Quiz</h2>
        <p>They all float down here!!!!</p>
        <button id="beginQuiz">Let's Play</button>
        </div>`;
    console.log("startPage ran");
}

//Questions function
function questiontemplate(){
let questionPage =
`<div class="questions">
<h2 id="question">${currentQuestion.question}</h2>
<form class="boxed">
<input type="radio" id="ans1" name="quest" value="${currentQuestion.answer[0]}">
<label for="male">${currentQuestion.answer[0]}</label><br>
<input type="radio" id="ans2" name="quest" value="${currentQuestion.answer[1]}">
<label for="female">${currentQuestion.answer[1]}</label><br>
<input type="radio" id="ans3" name="quest" value="${currentQuestion.answer[2]}">
<label for="other">${currentQuestion.answer[2]}</label><br>
<input type="radio" id="ans4" name="quest" value="${currentQuestion.answer[3]}">
<label for="other">${currentQuestion.answer[3]}</label>
</form>  
<div>
   <button id="submit">Submit Answer</button>
</div>
</div>`;
}
// this is the question template questions function
function loadQuestion(store) {
//questions for loop with if statement
  let currentQuestion = store.questions[store.questionNumber];
  if(store.questionNumber === store.questions.length) {
    return results();
  }
  // this sets a variable that accesses the store.questions in the array
  
  //questions template



  // this is where the click event listener is called
  $('main').html(questionPage);
  $('#submit').on('click', () => {
    loadAnswer(store);
      
  });

 


};

//this is the function that rolls the transition boxes out
function loadAnswer(store) {
  let correctAnswer = store.questions[store.questionNumber].correctAnswer;
  let guess = $('input[type="radio"]:checked').val();
  let templateHTML = '';
  //this is where you get feedback if your answer is correct
  if (guess === correctAnswer) {
    store.score++;
    templateHTML =
       `<div class="questions boxed">
            <h1 id="question" class="smaller">CORRECT!</h2>
            <button id="next">Next Question</button>
            <h5>So far: ${store.score} / 10</h5>
        </div>`;
    //this is where you get feedback if you answer was wrong
  } else {
    store.wrong++;
    templateHTML = 
        `<div class="questions boxed">
            <h1 id="question"></h2>
            <h3>The correct answer is <br> ${correctAnswer}<h3>
            <button id="next">Next Question</button>
            <h5>So far: ${store.score} / 5</h5>
        </div>`;
  }

  //this where the click event listener 
  $('main').html(templateHTML);
  $('#next').on('click', function () {
    store.questionNumber++;
    loadQuestion(store);
  });
}

// thsi belongs to the last div
function results() {
  let templateHTML = `<div class="endSlide">
  <h2>You made it!!!</h2>
  <p>You have completed our quiz</p>
  <p>you got ${store.score}/10 correct!!</p>
  <p>Click below to take this quiz again!!!</p>
  <br>
  <button>Take quiz again!!</button>
</div>`
  
    
  $('main').html(templateHTML);
  $('#again').on('click', function() {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    loadQuestion(store);
  });

  function render(){ 
    if(store.quizStarted ===false){
    $('main').html(startPage()); } 
    else if(store.quizStarted)
    {$('main').html(questionPage());store.questionNumber++;
    }
    render();
  }
  
};

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)