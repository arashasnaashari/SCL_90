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

for (var i = 0; i < 90; i++) {
  answers.push(0);
}

let questions = [
  "من اصولا شخص نگرانی نيستم",
  " دوست دارم هميشه افراد زيادی دور و برم باشند",
  " دوست ندارم وقتم را با خيال پردازی تلف كنم",
  " سعی ميكنم در مقابل همه مودب باشم",
  "وسايل متعلق به خود را تميز و مرتب نگاه می‌دارم",
  "اغلب در برابر ديگران احساس حقارت می‌کنم",
  "زود به خنده می‌افتم",
  "هنگامی كه روش صحيح انجام کاری را يافتم آن را همواره دنبال می‌کنم",
  "اغلب با فاميل و همكارانم بگو مگو دارم",
  "به خوبی می‌توانم كارهايم را طوری تنظيم كنم كه درست سر زمان تعيين شده انجام شوند",
  "هنگامی كه تحت فشارهای روحی زيادی هستم، گاه احساس می‌كنم دارم خرد می‌شوم",
  "خودم را فرد خيلی سر حال و سر زنده‌ای نمی‌دانم",
  "نقش‌های موجود در پديده‌های هنری و طبيعت مرا مبهوت می‌كند",
  "بعضی مردم فكر می‌كنند كه من شخصی خود‌خواه و خود‌محور هستم",
  "فرد خيلی مرتب و منظمی نيستم",
  "به ندرت احساس تنهايی و غم می‌كنم",
  "واقعا از صحبت كردن با ديگران لذت می‌برم",
  "فكر می‌كنم گوش دادن دانشجويان به مطالب متناقض فقط به سردرگمی و گمراهی آن‌ها منجر خواهد شد",
  "همكاری را بر رقابت با ديگران ترجيح می‌دهم",
  "سعی می‌كنم همه كارهايم را با احساس مسوليت انجام دهم",
  "اغلب احساس عصبی بودن و تنش می‌كنم",
  "هميشه برای كار آماده‌ام",
  "شعر تقريبا اثری بر من ندارد",
  "نسبت به قصد و نيت ديگران حساس و مشكوك هستم",
  "دارای هدف روشنی هستم و برای رسيدن به آن طبق برنامه كار ميكنم",
  "گاهی كاملا احساس بی‌ارزشی می‌كنم",
  "غالباً ترجيح می‌دهم كار‌ها را به تنهايی انجام دهم",
  "اغلب غذاهای جديد و ناشناخته را امتحان می‌كنم",
  "معتقدم اگر به مردم اجازه دهيد، اكثر آن‌ها از شما سوء استفاده می‌كنند",
  "قبل از شروع هر‌كاری وقت زيادی را تلف می‌كنم",
  "به ندرت احساس اضطراب يا ترس می‌كنم",
  "اغلب احساس می‌كنم سرشار از انرژی هستم",
  "به ندرت به احساسات و عواطفی كه محيط‌های متفاوت به وجود می‌آورند، توجه می‌كنم ",
  "اغلب آشنايانم مرا دوست دارند",
  "برای رسيدن به اهدافم شديداً تلاش می‌كنم",
  "اغلب از طرز برخورد ديگران با خودم عصبانی می‌شوم",
  "فردی خوشحال و بشاش و دارای روحيه خوبی هستم",
  "معتقدم كه هنگام تصميم‌گيری درباره مسائل اخلاقی بايد از مراجع مذهبی پيروی كنيم",
  "برخی فكر می‌كنند كه من فردی سرد و حسابگر هستم",
  "وقتی قول يا تعهدی می‌دهم، همواره می‌توان برای عمل به آن روی من حساب كرد",
  "غالبا وقتی كارها پيش نمی‌روند، دلسرد شده و از كار صرف نظر می‌كنم",
  "شخص با نشاط و خوش بينی نيستم",
  "بعضی اوقات وقتی شعری را می‌خوانم يا يك كار هنری را تماشا می‌كنم، موجی از احساس افسردگی يا هيجان مرا در بر می‌گيرد",
  "در روش‌هايم سرسخت و لجوج هستم",
  "گاهی آن طور كه بايد و شايد قابل اعتماد و اتكاء نيستم",
  "به ندرت غمگين و افسرده می‌شوم ",
  "زندگی و رويدادهای آن برايم سريع می‌گذرند",
  "علاقه‌ای به تامل و تفكر جدی درباره سرنوشت و ماهيت جهان يا انسان ندارم",
  "عموماً سعی می‌كنم شخصی با ملاحظه و منطقی باشم",
  "فرد مولدی هستم كه هميشه كارهايم را به اتمام می‌رسانم",
  "اغلب احساس درماندگی می‌كنم و دنبال كسی می‌گردم كه مشكلاتم را برطرف كند",
  "شخص بسيار فعالی هستم",
  "من كنجكاوی فكری فراوانی دارم",
  "اگر كسی را دوست نداشته باشم، برايم مهم نيست که متوجه شود",
  "فكر نمی‌كنم كه هيچ وقت بتوانم فردی منطقی بشوم",
  "گاهی طوری احساس خجالت کرده‌ام که دلم می‌خواست خود را از ديگران پنهان‌کنم",
  "ترجيح می‌دهم كه براي خودم كار‌كنم تا رهبر ديگران باشم",
  "اغلب از كلنجار رفتن با نظريه‌ها يا مفاهيم انتزاعی لذت می‌برم",
  "اگر لازم باشد می‌توانم براي رسيدن به اهدافم ديگران را به طور ماهرانه‌ای به كار بگيرم",
  "تلاش می‌كنم هركاری را به نحو احسن انجام دهم",
];

//CONSTANTS

const MAX_QUESTION = 60;

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

    fetch("/tests/answerDataNEOFFI", {
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
