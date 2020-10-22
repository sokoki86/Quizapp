/* eslint-disable strict */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the correct title/name for the main character in the show "Doctor Who"?',
      answers: [
        'Coyote Ugly',
        'The Doctor',
        'Captain Kirk',
        'Soulja Boy',
      ],
      correctAnswer: 'The Doctor',
    },
    {
      question: 'What is the most used motivational phrase used for Barry Allen/The Flash, in the CW show "The Flash"?',
      answers: [
        'Run, Barry, Run!',
        'Run Forest Run',
        'Run around on me',
        'Run for President'
      ],
    },
    {
      question: 'What is a Boggart?',
      answers: [
        'A piece of equipment used in a quidditch match',
        'A shape-shifting being that takes the form of your worst fear',
        'A type of plant from Professor Sprouts class',
        'What Hermione calls Malfoy ',
      ],
      correctAnswer: 'A shape-shifting being that takes the form of your worst fear'
    },
    {
      question: 'Master Chief, mind telling me what you\'re doing on that ship?',
      answers: [
        'Sir, finishing this fight',
        'Step Admiral Hood, what are you doing here?',
        'Hey, Look over there',
        'There is a snake in my boot',
      ],
      correctAnswer: 'Sir, finishing this fight'
    },
    {
      question: 'Name the show this phrase belongs to "Driver picks the music, shotgun shuts his cakehole."',
      answers: [
        'Greys Anatomy',
        'Supernatural',
        'The Walking Dead',
        'Game of Thrones',
      ],
      correctAnswer: 'Supernatural'
    },
    {
      question: 'What Planet is Princess Amadala from?',
      answers: [
        'Uranus',
        'Tatouine',
        'Naboo',
        'Epsalon3',
      ],
      correctAnswer: 'Naboo'
    }
    
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  message: ''
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


//I am creating the render function here






//Makes sure they can't skip question and delivers feedback slide/cards
function scoreQuestion() {
  let answer = getAnswer();
  if(answer === undefined || answer === null) {
    store.message = 'You got this, just pick one!';
    render();
    return;
  }
  if(answer === getCorrect()) {
    store.message = 'Yay!! You did it!! '+ answer + ' is right!';
    store.score += 1;
  } else {
    store.message = 'Oops..! ' + getCorrect() + ' was right!';
  }
  store.questionNumber += 1;
}


//Templates section

//displays start Page
function startPage() {
  return `<div class="card">
  <h2>Entertainment Tonight Presents</h2>
  <p>The Entertainment Quiz</p>
  <button id="start">Let's Play!!</button>`;
}

//displays end Page
function endPage() {
  return `<div class="card">
  <h2>Congratulations!</h2>
  <p>You Did It!! You scored ${store.score} points out of ${store.questions.length}</p>
  <strong>Your score: ${getScore()}%</strong>
  <button id="restart">Play again?</button>`;
}

//allows us to generate score
function getScore() {
  return ((store.score/store.questions.length) * 100).toFixed(2);
}


// gets score
function currentScore() {
  return `<strong>Question ${store.questionNumber} of ${store.questions.length} - ${getScore()}%`;
}

// message card
function templateMessage() {
  return `<div class="card">
  ${currentScore()}
  <h2>${store.message}</h2>
  <button id="close">Close</button>`;
}

//grabs answer based off whether it was selected
function getAnswer() {
  return $('input[name=question' + store.questionNumber + ']:checked').val();
}

//grabs the correct answer
function getCorrect() {
  return store.questions[store.questionNumber].correctAnswer;
} 
// answer comment
function templateAnswer(answer) {
  return `<div class="form-group">
  <input type="radio" name="question${store.questionNumber}" value="${answer}">
  <label for="question${store.questionNumber}">${answer}</label>
  </div>`;
}

//grabs the question based on the question number
function getQuestion() {
  return store.questions[store.questionNumber].question;
}
//generates template for question function
function Question() {
  let template = `<div class="card">
  ${currentScore()}
  <h2>${getQuestion()}</h2>
  <form id="questionform">`;
  for(let i = 0; i < store.questions[store.questionNumber].answers.length; i++) {
    let answer = store.questions[store.questionNumber].answers[i];
    template += templateAnswer(answer);
  }
  template += '<button id="answer">Submit Answer</button></form>';
  return template;
}
function beginQuiz(){
  store.quizStarted = true;
  store.questionNumber = 0;
  store.score = 0;
}

function restart(){
  store.quizStarted = false;
  store.questionNumber = 0;
  store.score = 0;
}



// replaces the main tag
function render() {
  if(store.message !== '') {
    console.log('Showing message', store.message);
    $('main').html(templateMessage());
  } else if(!store.quizStarted) {
    $('main').html(startPage());
  } else if (store.questionNumber === store.questions.length) { 
    $('main').html(endPage());
  } else {
    $('main').html(Question());
  }
}

//starts the quiz
function handleBeginQuiz(event) {
  beginQuiz();
  render();
}

//restarts quiz from endPage
function handleRestart(event) {
  restart();
  render();
}

//Gets Answer for question
function handleAnswerQuestion(event) {
  event.preventDefault();
  scoreQuestion();
  render();
}

// allows for user to click out of answer screen
function handleCloseMessage(event) {
  store.message = '';
  render();
}

//Calls all event listeners
$(() => {
  render();
  $('main').on('click', '#start', handleBeginQuiz);
  $('main').on('click', '#restart', handleRestart);
  $('main').on('click', '#answer', handleAnswerQuestion);
  $('main').on('click', '#close', handleCloseMessage);
});      
