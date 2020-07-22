// -------------------Questions Array---------------------//

const STORE = {
    questions: [// #1
      {
        question: "This test is absolutely necessary for the well-being of this country and it's citizens.",
        options: [
          "True", 
          "False", 
        ],
        answer: "True"
      },
      // #2
      {
        question: "Which of the following is permitted behavior when using the internet?",
        options: [
          "Using anonymous accounts to delegitimize current legislation",
          "Researching banned subjects listed by the UGC (Union of Global Corporations)", 
          "Networking with dissidents",
          "Using social media sites to 'like', 'share', and speak positively of celebrity opinions"
        ],
        answer: "Using social media sites to 'like', 'share', and speak positively of celebrity opinions"
      },
      // #3
      {
        question: "What should you do if you sense dissident behavior from a family member or loved one?",
        options: [
          "Pretend not to notice", 
          "Become interested and participate", 
          "Report them to local correctional enforcement", 
          "Talk them out of their current behavior"
        ],
        answer: "Report them to local correctional enforcement"
      },
      // #4
      {
        question: "Correctional enforcement may enter my home, take my children (if any), search/confiscate my devices, and use any other necessary force against me if dissident behavior is suspect?", 
        options: ["True", 
        "False"],
        answer: "True"
      },
      // #5
      {
        question: "Owning firearms, unregistered devices, and having negative opinions about company CEOs and politicians are all examples of dissident behavior. What else would be considered dissident behavior?",
        options: [
          "Volunteering in re-education centers", 
          "Flying an airplane into your local IRS office",
          "Working overtime without additional pay", 
          "Watching movies and television series"
        ],
        answer: "Flying an airplane into your local IRS office"
      },
      // #6
      {
        question: "How often should citizens express their gratitude to their company CEOs, their politicians, and their local correctional enforcement?",
        options: [
          "At the beginning of the week", 
          "On Holidays", 
          "At their earliest convenience  ", 
          "Everyday"
        ],
        answer: "Everyday"
      },
      // #7
      {
        question: 'Celebrities and permitted news media are always trustworthy.',
        options: [
          "True", 
          "False", 
        ],
        answer: "True"
      },
      // #8
      {
        question: "This nation's motto: Adherence, Obediance, and ...", 
        options: [
          "Compliance", 
          "Independence", 
          "Liberty", 
          "Dissidence"
        ],
        answer: "Compliance"
      },
      // #9
      {
        question: "The more bureaucracy, the better.",
        options: [
          "True", 
          "False", 
        ], 
        answer: "True"
      },
      // #10
      {
        question: "A dissident from an unmarked rural location travels into your safe and secure metropolitan area. He/she begins to rant about nonsensical ideas like, 'freedom' and 'living amongst nature.' What should you do?",
        options: [
          "Have a discussion about their ideas", 
          "Dismiss their nonsense, report them to the nearest correctional officer, and spend enough time in a re-education center for cognitive cleansing", 
          "Grant them a 'Good Day', and share your experience on social media", 
          "Join them"
        ],
        answer: "Dismiss their nonsense, report them to the nearest correctional officer, and spend enough time in a re-education center for cognitive cleansing"
      },
      // #11
      {
        question: "Why are rural outsiders not to be trusted or taken seriously?",
        options: [
          "They were/are rebels", 
          "Their ideas seek to undermine the legitimacy of our great, secure, and safe country", 
          "They are the enemies of corporations, bureaus, and obediance", 
          "All of the above"
        ],
        answer: "All of the above"
      },
      // #12
      {
        question: "What year was our country's name, The United Global Bureaus and Co. changed from the United States of America? ", 
        options: [
          "2050", 
          "2052", 
          "2051", 
          "2056"
        ],
        answer: "2056"
      },
      // #13
      {
        question: "Why was our country's name changed?",
        options: [
          "War", 
          "Out of the love and care of The Administrators TM", 
          "Corruption and profit", 
          "Fear of rebellious behavior"
        ],
        answer: "Out of the love and care of The Administrators TM"
      },
      // #14
      {
        question: "Who are NOT to be trusted?",
        options: [
          "Dissidents", 
          "Rural Seperatists", 
          "Foreign Infiltrators", 
          "All of the above"
        ],
        answer: "All of the above"
      },
      // #15
      {
        question: "Compliance to all legislation passed by bureaucracy, trust in corporations, and submission to correctional offficers will guarentee you a safe and worriless life inside the walls of the Metropolitan areas.",
        options: [
          "True", 
          "False", 
        ],
        answer: "True"
      }
    ],
    currentQuestion: 0,
    score: 0
  };
  
  //--Functions----------------------------//
  
  function startQuiz() {
    $('#start').on('click', function(event){
      renderAQuestion();
    }
    );
  }
  
  /* --Provides question number and score--------- */
  function updateQuestionAndScore() {
    const html = $(`<ul class="question-score">
        <li id="js-answered">Questions Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
        <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
      </ul>`);
    $(".question-and-score").html(html);
  }
  
  /* --Provides the options for current question--------- */
  function updateOptions()
  {
    let question = STORE.questions[STORE.currentQuestion];
    for(let i=0; i<question.options.length; i++)
    {
      $('.js-options').append(`
          <input type = "radio" name="options" id="option${i+1}" value= "${question.options[i]}" tabindex ="${i+1}"> 
          <label for="option${i+1}"> ${question.options[i]}</label> <br/>
          <span id="js-r${i+1}"></span>
      `);
    }
    
  }
  
  /* --Provides the actual question----------*/
  function renderAQuestion() {
    let question = STORE.questions[STORE.currentQuestion];
    updateQuestionAndScore();
    const questionHtml = $(`
    <div>
      <form id="js-questions" class="question-form">
        
       
          <div class="row question">
            <div class="col-12">
              <h2> ${question.question}</h2>
            </div>
          </div>
  
          <div class="row options">
            <div class="answer-options">
              <div class="js-options"> </div>
          </div>
        </div>
      
  
        <div class="row">
          <div class="col-12">
            <button type = "submit" id="answer" tabindex="5">Submit</button>
            <button type = "button" id="next-question" tabindex="6"> Next >></button>
          </div>
        </div>
   
      </form>
    </div>`);
  $("main").html(questionHtml);
  updateOptions();
  $("#next-question").hide();
  }
  
  /* --Provides results and a restart button-------------- */
  function displayResults() {
    let resultHtml = $(
      `<div class="results">
        <form id="js-restart-quiz">
            <div class="row">
              <div class="col-12">
                
  
            <p>The exam is complete. If you scored 10 or greater, you passed. Please, continue to study the exam material for next year. If you scored less than 10, please visit the nearest re-education center for cognitive cleansing.</p>
            <p>Any non-compliance will result in a justly fine or banishment to an unmarked rural location.</p>
          
          
            <div class="row">
              <div class="col-12">
                <button type="button" id="restart"> Restart Quiz </button>
              </div>
            </div>
      </form>
      </div>`);
      STORE.currentQuestion = 0;
      STORE.score = 0;
    $("main").html(resultHtml);
  }
  
  /*--Monitors the length of the questions---------- */
  function handleQuestions() {
    $('body').on('click','#next-question', (event) => {
      STORE.currentQuestion === STORE.questions.length?displayResults() : renderAQuestion();
    });
  }
  
  
  /*--Provides a notification whether the question is correct or incorrect--------------------------*/ 
  function handleSelectOption() {
    $('body').on("submit",'#js-questions', function(event) {
      event.preventDefault();
      let currentQues = STORE.questions[STORE.currentQuestion];
      let selectedOption = $("input[name=options]:checked").val();
      if (!selectedOption) {
        alert("Avoidance of a selection will result in a justly fine or time in the nearest re-education center");
        return;
      } 
      let id_num = currentQues.options.findIndex(i => i === selectedOption);
      let id = "#js-r" + ++id_num;
      $('span').removeClass("right-answer wrong-answer");
      if(selectedOption === currentQues.answer) {
        STORE.score++; 
        $(`${id}`).append(`Correct. Your adherence will see  positive results.<br/>`);
        $(`${id}`).addClass("right-answer");
      }
      else {
        $(`${id}`).append(`Incorrect. <br/> The answer is "${currentQues.answer}"<br/> Your dissidence will be noted.`);
        $(`${id}`).addClass("wrong-answer");
      }
  
      STORE.currentQuestion++;
      $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
      $('#answer').hide();
      $("input[type=radio]").attr('disabled', true);
      $('#next-question').show();
    });
  }
  
  function restartQuiz() {
    $('body').on('click','#restart', (event) => {
      renderAQuestion();
    });
  }
  
  function handleQuizApp() {
    startQuiz();
    handleQuestions();
    handleSelectOption();
    restartQuiz();
  }
  
  $(handleQuizApp);