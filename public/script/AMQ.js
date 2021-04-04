const question = document.getElementById("question");
const questionNumber = document.getElementById("question-number");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarFull = document.getElementById("progressBarFull");
const progressBar = document.getElementById("progressBar");
const previousQuestionBtn = document.getElementById("previousQuestionBtn");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let answers = [];
var answerCounter = 0;

for (var i = 0; i < 90; i++) {
  answers.push(0);
}

let questions = [
  "کارکردن چیزی است که",
  "در مدرسه فکر می‌کنند که من فردی",
  "دیگران فکر می‌کنند که من",
  "اگر خود را از خیلی قبل برای انجام یک تکلیف آماده‌کنیم این کار",
  "توقعی که از خودم موقع کارکردن دارم",
  "هنگامی که معلم در کلاس درس می‌دهد ",
  "معمولا مقدار کاری که من انجام می‌دهم",
  "هرگاه تکلیفم را خوب انجام نداده و به هدفم نرسیده باشم",
  "به نظر من داشتن پشتکار در مدرسه",
  "شروع‌کردن به انجام تکالیف مدرسه در منزل",
  "هنگامی که در کلاس‌های پایین‌تر بودم معیارها و انتظاراتی که با توجه به میزان مطالعه‌ام از خود داشتم",
  "اگر در حال انجام تکالیفم مرا به تماشای تلویزیون یا گوش‌دادن به رادیو فرا بخوانند بعد از آن",
  "من کاری را که انجام‌دادن آن مستلزم احساس مسئولیت زیادی باشد",
  "آن زندگی که اصلا نیازی به کارکردن نداشته باشد از نظر من",
  "وقتی در کلاس‌های پایین‌تر بودم فکر می‌کردم رسیدن به یک موفقیت بالا در جامعه (مقام و موقعیتی را کسب‌کردن)",
  "موقعی که در برابر انجام کار با مشکلی روبرو می‌شوم",
  "من به طورکلی",
  "به نظر من دانش‌آموزانی که خیلی زیاد مطالعه می‌کنند",
  "در مدرسه کسانی را که به موفقیت‌های بسیار بالایی نائل شده‌اند",
  "برای استفاده از لذت‌ها و تفریحات جانبی زندگی ",
  "برای استفاده از لذت‌ها و تفریحات جانبی زندگی",
  "من معمولا فردی",
  "من بدون اینکه خسته شوم می‌توانم برای",
  "وقتی در کلاس‌های پپایین‌تر بودم برقراری رابطه خوب با معلمانم",
  "پسران شغل پدرشان را به عنوان مدیر یک موسسه دنبال می‌کنند زیرا",
  "وقتی در کلاس‌های پایین‌تر بودم دلم می‌خواست",
  "نظم‌ دادن به امور را",
  "زمانی که کاری را شروع می‌کنم",
  "من",
  "خریدکردن کاری است که آن را",
];

//CONSTANTS

const MAX_QUESTION = 29;

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

    fetch("/tests/answerDataAMQ", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: string,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          // window.location.assign("/dashboard");
          console.log(data);
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

  choice1.innerText = eleven[answerCounter];
  choice2.innerText = eleven[answerCounter + 1];
  choice3.innerText = eleven[answerCounter + 2];
  choice4.innerText = eleven[answerCounter + 3];
  answerCounter += 4;

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
  answerCounter -= 8;
  getNewQuestion();
});

//New Answer
let eleven = [
  "اصلا دوست ندارم آن را انجام دهم",
  "دوست ندارم آن را انجام دهم",
  "دوست دارم آن را انجام دهم",
  "خیلی زیاد دوست دارم آن را انجام دهم",
  "بسیار سخت‌کوش هستم",
  "نسبتا سخت‌کوش هستم",
  "نسبتا راحت‌طلب هستم",
  "خیلی راحت‌طلب هستم",
  "خیلی سخت‌کوش هستم",
  "نسبتا سخت‌کوش هستم",
  "کمی سخت‌کوش هستم",
  "اصلا سخت‌کوش نیستم",
  "کاملا بی‌معنا است",
  "نسبتا بی‌معنا است",
  "قبول واقعیت است",
  "برای موفقیت ضروری است",
  "خیلی بالا است",
  "نسبتا بالا است",
  "نسبتا پایین است",
  "خیلی پایین است",
  "تمام وجودم را به کار می‌گیرم تا کارم را به بهترین وجه انجام داده و تصور خوبی به معلم بدهم",
  "معمولا به درس‌هایی که گفته می‌شود توجه زیادی می‌کنم",
  "افکار من به سوی امور دیگر منحرف می‌شود",
  "بیشتر به اموری که مربوط به مدرسه نیست علاقه مند می‌شوم",
  "خیلی بیشتر از تصمیمی است که قصد انجام آن را داشته‌ام ",
  "بیشتر از تصمیمی است که قصد انجام آن را داشته‌ام",
  "کمتر از تصمیمی است که قصد انجام آن را داشته‌ام",
  "خیلی کمتر از تصمیمی است که قصد انجام آن را داشته‌ام",
  "برای رسیدن به هدف نهایت کوشش خود را می‌کنم",
  "برای رسیدن به هدف یک بار دیگر تلاش می‌کنم",
  "مایلم که از آن صرف نظر کنم",
  "معمولا از آن صرف نظر می‌کنم",
  "خیلی بی‌اهمیت است",
  "نسبتا بی‌اهمیت است",
  "با اهمیت است",
  "خیلی با اهمیت است",
  "تلاش خیلی زیادی لازم دارد",
  "تلاش زیادی لازم دارد",
  "تلاش کمی لازم دارد",
  "تلاش خیلی کمی لازم دارد",
  "خیلی بالا بود",
  "متوسط بود",
  "پایین بود",
  "خیلی پایین بود",
  "همیشه بلافاصله سر کارم بر می‌گردم",
  "توقف کوتاهی می‌کنم و بعد به کارم بر می‌گردم",
  "همیشه قبل از شروع مجدد کار کمی منتظر می‌مانم",
  "برگشتن مجدد به کار را خیلی دشوار می‌بینم",
  "خیلی دوست دارم",
  "تنها در صورتی که پول خوبی بابت آن بپردازید انجام می‌دهم",
  "فکر می‌کنم نتوانم انجام دهم",
  "دوست ندارم",
  "خیلی خوشایند است",
  "خوشایند است",
  "نا‌خوشایند است",
  "خیلی نا‌خوشایند است",
  "اصلا اهمیتی ندارد",
  "کم اهمیت دارد",
  "زیاد اهمیت دارد",
  "خیلی زیاد اهمیت دارد",
  "خیلی سریع از انجام دادن آن صرف نظر می‌کنم",
  "سریع از انجام دادن آن  صرف نظر می‌کنم",
  "تلاش می‌کنم از انجام آن صرف نظر نکنم",
  "معمولا آن را به انجام می‌رسانم",
  "خیلی زیاد آینده‌نگر هستم",
  "زیاد آینده‌نگر هستم",
  "کمی آینده‌نگر هستم",
  "اصلا آینده‌نگر نیستم",
  "افراد خیلی خوبی هستند",
  "افراد خوبی هستند",
  "افراد خوبی نیستند",
  "اصلا افراد خوبی نیستند",
  "خیلی زیاد تحسین می‌کنم",
  "زیاد تحسین می‌کنم",
  "کمی تحسین می‌کنم",
  "اصلا تحسین نمی‌کنم",
  "اصلا وقت ندارم",
  "کمی وقت دارم",
  "معمولا به‌قدر کافی وقت دارم",
  "همیشه وقت دارم",
  "خیلی مشغول هستم",
  "نسبتا مشغول هستم",
  "کمی مشغول هستم",
  "اصلا مشغول نیستم",
  "مدت زمان خیلی زیاد روی امر خاصی کارکنم",
  "مدت زمان زیاد روی امر خاصی کارکنم",
  "مدت زمان کوتاه روی امر خاصی کارکنم",
  "مدت زمان خیلی کوتاه روی امر خاصی کارکنم",
  "خیلی زیاد مورد قدردانی قرار می‌گرفت",
  "مورد قدردانی قرار می‌گرفت",
  "به نظرم مهم نبود",
  "به نظر می‌رسید کاملا بی‌اهمیت باشد",
  "آن‌ها مایلند فعالیت موسسه را توسعه بخشند",
  "از این نظر که پدرشان مدیر است خوشبخت هستند",
  "آن‌ها می‌توانند نظرات جدید خود را به عمل درآورند",
  "این آسانترین راه برای به دست آوردن پول است",
  "آدم خیلی مهمی باشم",
  "آدم مهمی باشم",
  "آدم نسبتا مهمی باشم",
  "آدم معمولی باشم",
  "خیلی زیاد دوست دارم",
  "نسبتا دوست دارم",
  "کمی دوست دارم",
  "اصلا دوست ندارم",
  "هرگز آن را تا رسیدن به یک نتیجه‌ی موفقیت آمیز ادامه نمی‌دهم",
  "خیلی کم آن را تا رسیدن به یک نتیجه‌ی موفقیت آمیز ادامه می‌دهم",
  "گاهی آن را تا رسیدن به یک نتیجه‌ی موفقیت آمیز ادامه می‌دهم",
  "همیشه آن را تا رسیدن به یک نتیجه‌ی موفقیت آمیز ادامه می‌دهم",
  "بیشتر مواقع خسته هستم",
  "اغلب خسته هستم",
  "کمی خسته هستم",
  "هرگز خسته نیستم",
  "خیلی زیاد دوست دارم",
  "دوست دارم",
  "کمی دوست دارم",
  "اصلا دوست ندارم",
];

//calculating results

startTest();
