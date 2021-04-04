const question = document.getElementById("question");
const questionNumber = document.getElementById("question-number");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarFull = document.getElementById("progressBarFull");
const progressBar = document.getElementById("progressBar");
const previousQuestionBtn = document.getElementById("previousQuestionBtn");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let answers = [];

for(var i = 0 ; i < 90 ; i++){
  answers.push(0);
}

let questions = [
  "من در مورد باور‌های مذهبی خودآگاهی دارم",
  "در مورد هدف‌های زندگی‌ام خیلی فکر کرده‌ام",
  "من در مورد آنچه در زندگی انجام میدهم مطمئن نیستم",
  "من با توجه به ارزش‌هایی که بزرگ شده‌ام، عمل می‌کنم",
  "وقت زیادی را به مطالعه و گفتگو با دیگران در مورد عقاید و موضوعات مذهبی صرف می‌کنم",
  "وقتی که راجع به یک موضوع با کسی صحبت میکنم سعی میکنم تا نقطه نظر او را بدانم ",
  "من برای آینده برنامه مشخصی دارم ",
  "در مورد مسائل پیشاپیش نگران نیستم و در مورد همه چیز موقعی که اتفاق می‌افتد تصمیم می‌گیرم",
  "من درست نمیدانم در مورد مذهب چه عقیده‌ای دارم",
  "طوری تربیت شده‌ام که بدانم چه هدف‌هایی را دنبال کنم",
  "من درست نمیدانم که چه ارزش‌هایی را واقعا حفظ کنم",
  "می‌دانم که دولت و کشور چه هدف‌هایی راباید دنبال کنند",
  "اگر من در مورد مشکلاتم نگران نباشم آنها معمولا خودشان بر طرف می‌شوند",
  "اطمینان ندارم که در آینده چه کار یا هدفی را دنبال خواهم کرد",
  "احساس می‌کنم به کاری که الان انجام می‌دهم (یا در گذشته انجام داده‌ام)علاقه دارم",
  "وقت زیادی را صرف مطالعه و فهم مسائل سیاسی کرده‌ام",
  "اکنون در مورد آینده فکر نمی‌کنم هنوز راه درازی در پیش رو است",
  "من وقت زیادی را صرف گفتگو با دیگران کرده‌ام تا به یک سری باور در مورد خودم برسم",
  "هرگز به طور جدی در مورد اعتقادات مذهبی‌ام تردید نداشته‌ام",
  "مطمئن نیستم چه شغلی برایم مناسب است",
  "از وقتی که وارد مرحله نوجوانی شده‌ام می‌دانم که می‌خواهم چه کاره شوم",
  "مجموعه‌ای از اعتقادات محکم دارم که در هنگام تصمیم‌گیری از آنها استفاده می‌کنم",
  "ترجیح می‌دهم اعتقاد‌های ثابت و محکمی داشته‌باشم تا اینکه آماده پذیرش نظر‌های تازه باشم",
  "وقتی مجبورم تصمیم بگیرم تا آنجا که ممکن است صبر می‌کنم تا ببینم چه پیش خواهد آمد",
  "وقتی مشکلی دارم برای فهم آن بسیار فکر می‌کنم",
  "وقتی که مشکلی دارم ترجیح می‌دهم از راهنمایی متخصصان مربوطه (معلم،پزشک و ...)استفاده کنم",
  "من زندگی‌ام را خیلی جدی نمی‌گیرم بلکه سعی می‌کنم از آن لذت ببرم",
  "بهتر است مجموعه معینی از ارزش‌ها داشته باشیم تا آنکه مجموعه مختلفی از ارزش‌ها را در نظر بگیریم",
  "تا جایی که می‌توانم سعی دارم در مورد مشکل‌ها فکر نکنم و با آن‌ها درگیر نشوم",
  "مشکل‌ها معمولا من را به تلاش و کوشش بیشتر بر می‌انگیزند",
  "من از مسائلی که من را به فکر‌کردن وا می‌دارم اجتناب می‌کنم",
  "وقتی راه حل مسئله‌ای را بلد باشم آن را دنبال می‌کنم",
  "وقتی مجبورم تصمیم بگیرم، وقت زیادی را صرف فکرکردن در مورد انتخاب‌هایم می‌کنم",
  "دوست دارم با مسائل همان گونه مقابله کنم که والدینم می‌گویند",
  "دوست دارم در مورد مسائل فکرکنم و به تنهایی با آن‌ها مقابله کنم",
  "وقتی مشکل بالقوه‌ای را نادیده می‌گیرم معمولا خود به خود حل می‌شود",
  "وقتی مجبورم تصمیم مهمی بگیرم دوست دارم تا آنجایی که ممکن است در مورد آن بدانم",
  "وقتی بدانم مسئله‌ای فشار زا خواهد بود از آن دوری می‌کنم",
  "افراد برای یک زندگی پربار به تعهد و مجموعه‌ای از ارزش‌ها نیاز دارند",
  "وقتی مشکلی دارم بهترین راه این است که توصیه‌های دوستان و خانواده را بپذیرم"
  ];

//CONSTANTS

const MAX_QUESTION = 40;

startTest = () => {
  questionCounter = 0;
  score = 0;
  getNewQuestion();
};

getNewQuestion = () => {

    if(questions.length === 0 || questionCounter >= MAX_QUESTION){
      const body = {
        answerData: answers,
      };
      const string = JSON.stringify(body);
  
      fetch("/tests/answerDataBISI", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: string,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            window.location.assign("/dashboard");
          } else {
            alert("اروری اتفاق افتاد ");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("اروری اتفاق افتاد ");
        });
    }
    if(questionCounter < 1){ previousQuestionBtn.style.visibility = "hidden"}
    if(questionCounter >= 1){ previousQuestionBtn.style.visibility = "visible"}
    
  //filling the progress bar
  let progressBarFullWidth = ((questionCounter/MAX_QUESTION)*100) + "%";
  progressBarFull.style.width = progressBarFullWidth ;

  //new text and number
  question.innerText = questions[questionCounter];
  questionNumber.innerText = questionCounter + 1;

  questionCounter++;

  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;

    switch(selectedChoice.id){
      case "choice1":
        answers[questionCounter - 1] = 6;
        break;
      case "choice2":
        answers[questionCounter - 1] = 5;
        break;
      case "choice3":
        answers[questionCounter - 1] = 4;
        break;
      case "choice4":
        answers[questionCounter - 1] = 3;
        break;
      case "choice5":
        answers[questionCounter - 1] = 2;
        break;
        case "choice6":
          answers[questionCounter - 1] = 1;
        break;
      }   
    
    selectedChoice.parentElement.classList.add("chosen");

    setTimeout( () => {
      selectedChoice.parentElement.classList.remove("chosen");
      getNewQuestion();
    }, 250)
  });
})


previousQuestionBtn.addEventListener("click", e => {
  questionCounter -= 2;
  getNewQuestion();
});

//calculating results

startTest();

