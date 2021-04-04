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

for (var i = 0; i < 91; i++) {
  answers.push(0);
}

let questions = [
  "به نظر من برای غلبه بر مشکلات باید گام به گام پیش رفت",
  "لذت بردن از زندگی برایم مشکل است",
  "شغلی را ترجیح می‌دهم که حتی الامکان من تصمیم گیرنده باشم",
  "می‌توانم بدون تنش زیاد با مشکلات مقابله کنم",
  "می‌توانم برای معنی دادن به زندگی تا حد امکان تلاش کنم",
  "نسبت به هیجاناتم آگاهم",
  "سعی می‌کنم بدون خیال پردازی واقعیت امور را در نظر بگیرم",
  "به راحتی با دیگران دوست می‌شوم",
  "معتقدم توانایی تسلط بر شرایط دشوار را دارم",
  "بیشتر مواقع به خودم اطمینان دارم",
  "کنترل خشم برایم مشکل است",
  "شروع دوباره برایم سخت است",
  "کمک‌کردن به دیگران را دوست دارم",
  "به خوبی می‌توانم احساسات دیگران را درک کنم",
  "هنگامی که از دیگران خشمگین می‌شوم نمی‌تونم با آن‌ها در این مورد صحبت کنم",
  "هنگام رویارویی با یک موقعیت دشوار دوست دارم تا حد ممکن در مورد آن اطلاعات جمع کنم",
  "خندیدن برایم سخت است",
  "هنگام کارکردن با دیگران بیشتر پیرو افکار آن‌ها هستم تا فکر خودم",
  "نمی‌توانم به خوبی فشار‌ها را تحمل کنم",
  "در چند سال گذشته کمترکاری را به نتیجه رسانده‌ام",
  "به سختی می‌توانم احساسات عمیقم را با دیگران در میان بگذارم",
  "دیگران نمی‌فهمند که من چه فکری دارم",
  "به خوبی با دیگران همراهی می‌کنم",
  "به اغلب کارهایی که می‌کنم خوش‌بین هستم",
  "برای خودم احترام قائل هستم ",
  "عصبی بودنم مشکل ایجاد می‌کند",
  "به سختی می‌توانم فکرم را در مورد مسائل تغییر دهم",
  "کمک به دیگران مرا کسل نمی‌کند به خصوص اگر شایستگی آن را داشته باشند",
  "دوستانم می‌توانند مسائل خصوصی خودشان را با من در میان بگذارند",
  "می‌توانم مخالفتم را با دیگران ابراز نمایم",
  "هنگام مواجهه با یک مشکل اولین کاری که انجام می‌دهم دست نگه‌داشتن و فکرکردن است ",
  "فرد با نشاطی هستم ",
  "ترجیح می‌دهم دیگران برایم تصمیم بگیرند ",
  "احساس می‌کنم کنترل اضطراب برایم مشکل است",
  "از کارهایی که انجام می‌دهم راضی نیستم",
  "به سختی می‌فهمم چه احساسی دارم",
  "تمایل دارم با آنچه در اطرافم می‌گذرد روبرو نشوم و از برخورد با آن‌ها طفره می‌روم",
  "روابط صمیمی با دوستانم برای هردو طرفمان اهمیت دارد",
  "حتی در موقعیت‌های دشوار معمولا برای ادامه کار انگیزه دارم",
  "نمی‌توانم خودم را این طور که هستم بپذیرم ",
  "دیگران به من می‌گویند هنگام بحث آرام‌تر صحبت کنم",
  "به آسانی با شرایط جدید سازگار می‌شوم",
  "به کودک گمشده فکر می‌کنم حتی اگر همان موقع جای دیگری کار داشته باشم",
  "به اتفاقی که برای دیگران می‌افتد توجه دارم",
  "نه گفتن برایم مشکل است",
  "هنگام تلاش برای حل یک مشکل راه حل‌های ممکن را در نظر می‌آورم سپس بهترین را انتخاب می‌کنم",
  "از زندگی‌ام راضی‌ام",
  "تصمیم‌گیری برایم مشکل است",
  "می‌دانم در شرایط دشوار چگونه آرامشم را حفظ‌کنم",
  "هیچ چیز در من علاقه ایجاد نمی‌کند",
  "از احساساتی که دارم آگاهم",
  "در تصورات و خیال‌پردازی‌هایم غرق می‌شوم",
  "با دیگران رابطه خوبی دارم",
  "معمولا انتظار دارم مشکلات به خوبی ختم شوند هر چند گاهی این طور نمی‌شود",
  "از اندام و ظاهر خود راضی هستم",
  "کم صبر هستم",
  "می‌توانم عادات قبلی‌ام را تغییر دهم",
  "اگر لازم باشد با زیر پا گذاشتن قانون از موقعیتی فرارکنم این کار را انجام می‌دهم",
  "نسبت به احساسات دیگران حساس هستم",
  "می‌توانم به راحتی افکارم را به دیگران بگویم",
  "هنگام حل‌کردن مشکلات، به سختی می‌توانم در مورد انتخاب بهترین راه حل تصمیم‌گیری کنم",
  "اهل شوخی هستم",
  "در انجام کارها و امور مختلف به دیگران وابسته‌ام",
  "رویارویی با مسائل ناخوشایند برایم مشکل است",
  "حتی‌الامکان کارهایی را به عهده می‌گیرم که برایم مشکل است",
  "حتی هنگام آشفتگی از آنچه در من اتفاق می‌افتد آگاهم",
  "تمایل به مبالغه‌گویی دارم",
  "به نظر دیگران من فردی اجتماعی هستم",
  "به توانایی‌ام برای مقابله با دشوارترین مسائل اطمینان دارم ",
  "از شیوه نگرش و فکرم راضی هستم",
  "بدجوری خشمگین می‌شوم ",
  "معمولا تغییر ایجادکردن در زندگی روزانه برایم سخت است",
  "قادر هستم احترام به دیگران را حفظ کنم",
  "دیدن رنج دیگران برایم سخت است",
  "به نظر دیگران من نمی‌توانم احساسات و افکارم را بروز دهم ",
  "هنگام روبرو شدن با شرایط دشوار سعی می‌کنم در مورد راه حل‌های ممکن فکرکنم",
  "افسرده هستم",
  "فکر می‌کنم به دیگران بیشتر احتیاج دارم تا دیگران به من",
  "مضطرب هستم",
  "در مورد آنچه می‌خواهم در زندگی انجام دهم فکر مشخص و خوبی ندارم",
  "به سختی می‌توانم از امور برداشت صحیحی داشته‌باشم",
  "به سختی می‌توانم احساساتم را بیان‌کنم",
  "با دوستانم رابطه صمیمی برقرار می‌کنم",
  "قبل از شروع کارهای جدید معمولا احساس می‌کنم شکست خواهم‌خورد",
  "هنگام بررسی نقاط ضعف و قوتم باز هم احساس خوبی در مورد خودم دارم",
  "هنگام عصبانیت زود از کوره در می‌روم",
  "اگر مجبور به ترک وطنم باشم سازگاری برایم دشوار خواهد بود",
  "به نظر من پایبندی یک شهروند به قانون مهم است",
  "از جریحه‌دار کردن احساسات دیگران خودداری می‌کنم",
  "مشکل می‌توانم از حق خودم دفاع کنم",
];

//CONSTANTS

const MAX_QUESTION = 90;

startTest = () => {
  questionCounter = 0;
  score = 0;
  getNewQuestion();
};

getNewQuestion = () => {
  if (questions.length === 0 || questionCounter >= MAX_QUESTION) {
    const body = {
      answerData: answers,
    };
    const string = JSON.stringify(body);

    fetch("/tests/answerDataEQI", {
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
  if (questionCounter < 1) {
    previousQuestionBtn.style.visibility = "hidden";
  }
  if (questionCounter >= 1) {
    previousQuestionBtn.style.visibility = "visible";
  }

  //filling the progress bar
  let progressBarFullWidth = (questionCounter / MAX_QUESTION) * 100 + "%";
  progressBarFull.style.width = progressBarFullWidth;

  //new text and number
  question.innerText = questions[questionCounter];
  questionNumber.innerText = questionCounter + 1;

  questionCounter++;

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;

    switch (selectedChoice.id) {
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

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove("chosen");
      getNewQuestion();
    }, 250);
  });
});

previousQuestionBtn.addEventListener("click", (e) => {
  questionCounter -= 2;
  getNewQuestion();
});

//calculating results

startTest();
