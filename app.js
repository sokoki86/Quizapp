/* eslint-disable strict */
/**
 * Example store structure
 */
//I added an id of tests to the questions
const store = [
  // 5 or more questions are required
    {
      question: 'What is the correct title/name for the main character in the show "Doctor Who"?',
      answer1: 'Coyote Ugly',
      answer2: 'The Doctor',
      answer3: 'Captain Kirk',
      answer4: 'Soulja Boy',
      correctAnswer: 'The Doctor',
    },
    {
      question: 'What is the most used motivational phrase used for Barry Allen/The Flash, in the CW show "The Flash"?',
      answer1: 'Run, Barry, Run!',
      answer2: 'Run Forest Run',
      answer3: 'Run for president',
      answer4: 'Run around on me',
      correctAnswer: 'Run, Barry, Run',
    },


    {
      question: 'What is a Boggart?',
      answer1: 'A piece of equipment used in a quidditch match',
      answer2: 'A shape-shifting being that takes the form of your worst fear',
      answer3: 'A type of plant from Professor Sprouts class',
      answer4: 'What Hermione calls Malfoy ',
      correctAnswer: 'A shape-shifting being that takes the form of your worst fear',
    },
    // eslint-disable-next-line quotes
    {
      question: 'Master Chief, mind telling me what you\'re doing on that ship?',
      answer1: 'Sir, finishing this fight',
      answer2: 'Step Admiral Hood, what are you doing here?',
      answer3: 'Hey, Look over there',
      answer4: 'There is a snake in my boot',
      correctAnswer: 'Sir, finishing this fight',
    },

    {
      question: 'Name the show this phrase belongs to "Driver picks the music, shotgun shuts his cakehole."',
      answer1: 'Greys Anatomy',
      answer2: 'Supernatural',
      answer3: 'The Walking Dead',
      answer4: 'Game of Thrones',
      correctAnswer: 'Supernatual',
    },

    {
    // eslint-disable-next-line quotes
      question: " Where is 'The One Ring' destroyed, in the climax event of the last movie/book in the Lord of the Rings series?",
      answer1: 'The Lava/Fires of Mt. Doom, in Mordor',
      answer2: 'the shire',
      answer3: 'the deathstar',
      answer4: 'The reading rainbow',
      correctAnswer: 'The Lava/Fires of Mt. Doom, in Mordor'
    },
    {
    // eslint-disable-next-line quotes
      question: "What Planet is Princess Amadala from?",
      answer1: 'Uranus',
      answer2: 'Tatouine',
      answer3: 'Naboo',
      answer4: 'Epsalon3',
      correctAnswer: 'Naboo'
    },
    {
<<<<<<< HEAD
      
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  wrong: 0,
};
=======
      question: 'In which movie is Jason Vorhees the main character?',
      answer1: 'The Exorcist',
      answer2: 'Halloween',
      answer3: 'Nightmare on Elm Street',
      answer4: 'Friday the 13th',
      correctAnswer: 'Friday the 13th',
    },
    {
      question: 'Which of these is not a witch in Hocus Pocus?',
      answer1: 'Sarah Sanderson',
      answer2: 'Winifred Sanderson',
      answer3: 'Elizabeth Sanderson',
      answer4: 'Mary Sanderson',
      correctAnswer: 'Elizabeth Sanderson'
    },
    {
      question: 'Who is the last Avatar to be born?',
      answer1: 'Ang',
      answer2: 'Wan',
      answer3: 'Korra',
      answer4: 'Daniel',
      correctAnswer: 'Korra'
    },
  ],

  scoreStore = {
    quizStarted: false,
    questionNumber: 0,
    score: 0,
    wrong: 0,
  };
>>>>>>> 37eef9ceea2b5f959b149563e36bb6b32859c8c4

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
function startPage() {
  let StartPage =
    `<div class="startquiz">
  <img src="images/movie-clapper.png" alt="Movie-clapper">
  <h2>Movie & Trivia Quiz</h2>
  <p>They all float down here!!!!</p>
  <button class="beginQuiz">Let's Play</button>
</div>`;
  return StartPage;
}

// this is the question template
function questionPage(store) {
  let questionPage =
    `<div class="questions">
    <h2 id="question">${store.question}</h2>
    <form class="boxed">
    <input type="radio" id="ans1" name="quest" value="${store.answer1}">
    <label for="answer1">${store.answer1}</label><br>
    <input type="radio" id="ans2" name="quest" value="${store.answer2}">
    <label for="answer2">${store.answer2}</label><br>
    <input type="radio" id="ans3" name="quest" value="${store.answer3}">
    <label for="answer3">${store.answer3}</label><br>
    <input type="radio" id="ans4" name="quest" value="${store.answer4}">
    <label for="answer4">${store.answer4}</label>
    <br><br>
    <button id="submit">Submit Answer</button>
    </form> 
    </div>`;
  return questionPage;
}
// correct answer box
function correctAnswer() {
  let rightAnswer = `<div calss= "correct">
    <h2>You got it right</h2>
    <button class='trans-button'>Next Question</button>
    </div>`;
  return rightAnswer;
}

function incorrectAnswer() {
  let IncorrectAnswer = `<div calss= "incorrect">
    <h2>Oops...You got it wrong</h2>
    <button class='trans-button'>Next Question</button>
    </div>`;
  return IncorrectAnswer;
}



function results() {
  let endOfQuiz = `<div class="endSlide">
  <h2>You made it!!!</h2>
  <p>You have completed our quiz</p>
  <p>you got ${scoreStore.score}/10 correct!!</p>
  <p>Click below to take this quiz again!!!</p>
  <br>
  <button class="restart-quiz-btn">Take quiz again!!</button>
</div>`;
  return endOfQuiz;
}

//Render functions

function renderStart() {
  const startHtml = startPage();
  $('.main').html(startHtml);
  $('.beginQuiz').on('click', function(){
    renderQuestion();
  })
}


function renderQuestion() {
  const question = store[scoreStore.questionNumber];
  const html = questionPage(question);
  $('.main').html(html);
  $('.main').submit('#submit', (event) => {
    event.preventDefault();
    if ($('input[name="quest"]:checked').val() === question.correctAnswer){
      scoreStore.score++;
      renderCorrect();  
    }else {
      renderIncorrect();
    }
  });
}
  

function renderCorrect() {
  const html = correctAnswer();
  $('.main').html(html);
  $('.main').on('click', '.trans-button', () => {
		if (store.question >= 9) {
			renderResults();
		} else {
			renderQuestion(store.question++);
		}
	});
}

function renderIncorrect() {
  let html = incorrectAnswer();
  $('.main').html(html);
  $('.main').on('click', '.trans-button', () => {
		if (store.question >= 9) {
			renderResults();
		} else {
			store.question++;
			renderQuestion(store.question++);
		}
	});
}
function renderResults() {
  let html = results();
  $('.main').html(html);

}



//event functions





renderStart();