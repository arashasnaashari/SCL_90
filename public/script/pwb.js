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

let autonomy = 0;
let environmentalMastery = 0;
let personalGrowth = 0;
let positiveRelations = 0;
let purposeInLife = 0;
let selfAcceptance = 0;

for (var i = 0; i < 90; i++) {
  answers.push(0);
}

let questions = [
  "بيشتر مردم مرا فردی با احساس و دوست داشتنی می‌پندارند",
  " گاهی اوقات رفتار و طرز فکرم را تغيير می‌‌دهم تا بيشتر شبيه افراد دور و برم باشم",
  " به طور کلی احساس می‌‌کنم مسئول شرايطی‌ که در آن زندگی‌ می‌‌کنم هستم",
  " به فعاليت هايی‌ که افق ديد من را گسترش می‌ دهند علاقه ای‌ ندارم",
  " وقتی‌ به کارهايی‌ که در گذشته انجام داده‌ام يا در آينده اميد به انجام آن دارم فکر می‌‌کنم احساس خوبی‌ به من دست می‌‌دهد",
  "وقتی‌ به زندگی‌‌ام می‌‌نگرم از آنچه در زندگی‌‌ام رخ داده است راضی‌ هستم",
  " داشتن روابط نزديک برای‌ من مشکل و نااميد کننده بوده است",
  "من از ابراز عقايدم ترسی‌ ندارم حتی‌ زمانی‌ که آن‌ها با عقايد بيشتر مردم در تناقض است",
  " مطالبات زندگی‌ روزمره غالبا مرا از پای‌ در می‌آورد",
  " به طور کلی‌ احساس می‌کنم با گذر زمان درک بهتری‌ نسبت به خود پيدا می‌کنم",
  "من در زمان حال زندگی‌ می‌ کنم و به آينده فکر نمی‌ کنم",
  "به طور کلی‌ من اعتماد به نفس داشته و طرز فکر مثبتی‌ نسبت به خود دارم",
  " اغلب احساس تنهايی‌ می‌کنم چرا که دوستان نزديک زيادی‌ ندارم تا نگرانی‌هايم را با آن ها در ميان بگذارم",
  " تصميمات من معمولا تحت تأثیر رفتار ديگران قرار نمی‌‌گيرد",
  " من با افراد و محيط اطرافم تناسب زيادی‌ ندارم",
  " از آن دسته افرادی‌ هستم که به دنبال تجارت جديدی‌ هستند",
  "به زمان حال توجه دارم چرا که همواره آينده برای‌ من مشکل ساز است",
  " احساس می‌کنم بيشتر افرادی‌ را که می‌شناسم در زندگی‌ موفق‌تر از من بوده‌اند",
  "از گفت و گوی‌ فردی‌ و دوطرفه با اعضای‌ خانواده يا دوستان لذت می‌‌برم",
  "در مورد طرز فکر ديگران در مورد خودم نگران هستم",
  " من نسبتا در انجام مسئوليت‌های‌ زندگی‌ روزمره موفق هستم",
  "دوست ندارم به راه‌های‌ جديد انجام کارها فکر کنم. زندگی‌ من به صورت کنونی‌ عالی‌ است",
  " احساس من آن است که در زندگی‌ خود هدف و جهت دارم",
  "اگر فرصتی‌ دست بدهد من بسياری‌ از چيزها را در زندگی‌‌ام عوض خواهم کرد",
  " برايم مهم است که وقتی‌ دوستان نزديکم در مورد مشکلاتشان با من حرف می‌ زنند، شنونده خوبی‌ باشم",
  " رضايت از خويش برای‌ من مهم‌تر از رضايت ديگران از من است",
  "اغلب احساس می‌ کنم مسئوليت‌هايم بيشتر از توان من است",
  "فکر می‌ کنم به دست آوردن تجربياتی‌ که طرز فکر انسان در مورد خود و جهان را به چالش بکشد مهم است",
  " اغلب کارهای‌ روزمره به نظرم کم اهميت و جزئی‌ جلوه می‌ کنند",
  "من بيشتر جنبه‌های‌ شخصيتم را دوست دارم",
  "افراد زيادی‌ نيستند که بخواهند به درد و دل من گوش کنند",
  "معمولا تحت تاثير افرادی‌ که عقايد قوی‌ دارند قرار می‌ گيرم",
  " اگر از شرايط زندگی‌ام ناراضی‌ باشم در جهت تغيير آن‌ها تلاش می‌ کنم",
  "وقتی‌ فکر می‌کنم متوجه می‌شوم که در طی‌ اين سال‌ها پيشرفت خاصی‌ نداشته‌ام",
  "در مورد آنچه که در زندگی‌ به دنبال آن هستم احساس خوبی‌ ندارم",
  "در گذشته اشتباهاتی‌ داشته‌ام ولی‌ به طور کلی‌ احساس می‌کنم همه چيز به بهترين صورت بوده است",
  " احساس می‌کنم از دوستی‌ چيزهای‌ زيادی‌ کسب می‌ کنم",
  "مردم به ندرت از من می‌خواهند کارهايی‌ را انجام دهم که دوست ندارم",
  "معمولا من از عهده کنترل امور مالی‌ و شخصی‌ به خوبی‌ بر می‌آيم",
  "به نظر من افراد در هر سنی‌ قابليت رشد و پيشرفت دارند",
  " در گذشته اهدافی‌ را برای‌ خود مشخص می‌کردم ولی‌ حالا اين کار به نظرم اتلاف وقت است",
  "از بسياری‌ جهات از دستاوردهای‌ خود در زندگی‌ نااميد هستم",
  " به نظر می‌آيد افراد ديگر دوستان بيشتری‌ نسبت به من دارند",
  " داشتن تناسب با ديگران برايم مهمتر از تکيه بر اصول خود و تنها بودن است",
  "اينکه نمی‌توانم از عهده کارهای‌ روزمره بربيايم برايم امری‌ نگران کننده است",
  "با گذر زمان آگاهی‌ زيادی‌ نسبت به زندگی‌ کسب کرده‌ام که از من فردی‌ قوی‌تر و لايق‌تر ساخته است",
  " از برنامه ريزی‌ برای‌ آينده وتلاش برای‌ تحقق آن‌ها لذت می‌برم",
  " تا حد زيادی‌ به خود و طرز زندگی‌ام افتخار می‌کنم",
  " مردم من را فردی‌ سخاوتمند توصيف می‌کنند که دوست دارد برای‌ ديگران وقت بگذارد",
  " به عقايدم اعتماد دارم حتی‌ اگر آن‌ها خلاف عقيده جمع باشند",
  " به خوبی‌ می‌ توانم زمان را تنظيم کنم به گونه‌ای‌ که برای‌ هر کار مهمی‌ وقت باشد",
  " احساس می‌کنم که در طول زمان پيشرفت زيادی‌ داشته‌ام",
  " در اجرای‌ طرح و نقشه‌هايی‌ که دارم فعال هستم",
  " به بسياری‌ از مردم به خاطر طرز زندگی‌ آن‌ها غبطه می‌خورم",
  "روابط گرم و مطمئن زيادی‌ با ديگران نداشته‌ام",
  "ابراز عقايد در مورد مسائل بحث برانگيز برای‌ من کار دشواری‌ است",
  " زندگی‌ روزانه من شلوغ است اما از کنار آمدن با همه امور احساس رضايت می‌کنم",
  "از بودن در شرايط جديدی‌ که مستلزم تغيير روش‌های‌ قديمی‌ام است لذت نمی‌برم",
  " بعضی‌ از افراد در زندگی‌ هدفی‌ ندارند ولی‌ من جزء آن‌ها نيستم",
  " نگرش من به خودم احتمالا به مثبتی‌ احساس اکثر مردم به خودشان نيست",
  " در روابط دوستانه اغلب احساس می‌کنم خارج از محدوده هستم",
  "اگر مورد مخالفت دوستان يا خانواده قرار گيرم اغلب نظرم را عوض می‌کنم",
  "وقتی‌ برای‌ کارهای‌ روزمره برنامه ريزی‌ می‌کنم اغلب افسرده می‌شوم چرا که هرگز نمی‌توانم براساس برنامه پيش بروم",
  "برای‌ من زندگی‌ روند مداوم يادگيري، تغيير و رشد بوده است",
  "گاهی‌ اوقات احساس می‌ کنم هرچه در زندگی‌ ممکن بوده است انجام داده‌ام",
  "خيلی‌ از روزها وقتی‌ از خواب بيدار می‌شوم از طرز زندگی‌ام احساس افسردگی‌ به من دست می‌دهد",
  "می‌دانم که می‌توانم به دوستانم اطمينان کنم و آن‌ها هم می‌دانند که من فردی‌ قابل اطمينان هستم",
  "من از افرادی‌ نيستم که تحت فشارهای‌ اجتماعی‌ طرز فکر يا رفتارشان را تغيير می‌دهند",
  "تلاش من برای‌ يافتن فعاليت‌ها و رفتار مورد نياز کاملا موفق بوده‌اند",
  " مشاهده تغييرات و رشد طرز فکرم در طی‌ زمان برايم لذت بخش است",
  " اهداف من در زندگی‌ بيشتر برايم رضايت به همراه داشته‌اند تا نااميدي",
  "گذشته با مشکلات خود همراه بوده است ولی‌ به طور کلی‌ من نخواسته‌ام آن را تغيير دهم",
  " وقتی‌ با ديگران صحبت می‌ کنم نمی‌توانم به راحتی‌ حرف خودم را بزنم",
  " چگونگی‌ ارزيابی‌ مردم از طرز زندگی‌ام برايم مهم است",
  "نمی‌توانم زندگی‌ام را به طرز رضايت بخشی‌ برنامه ريزی‌ کنم",
  "مدت ها پيش دست از تلاش برای‌ ايجاد پيشرفت يا تغييرات بزرگ در زندگی‌ام برداشته‌ام",
  " انديشيدن درباره دستاوردهايم در زندگی‌ برايم رضايت بخش است",
  "وقتی‌ خودم را با دوستان و آشنايان مقايسه می‌کنم در مورد خود احساس خوبی‌ دارم",
  "من و دوستانم با هم در مشکلات همدردی‌ می‌کنيم",
  " براساس معيارهای‌ خودم، خود را می‌سنجم نه براساس معيارهای‌ ديگران",
  "توانسته‌ام برای‌ خود سبک زندگی‌ ايجاد کنم که بسيار دلخواه است",
  "اين گفته درست است که نمی‌توانيم عادات گذشته را تغيير دهيم",
  " در بررسی‌ نهايی‌ خيلی‌ مطمئن نيستم که زندگی‌ام زياد پربار بوده است",
  " هرکس نقطه ضعف‌هايی‌ دارد ولی‌ به نظر من نقطه ضعف‌های‌ من بيشتر است",
];

//CONSTANTS

const MAX_QUESTION = 84;

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

    fetch("/tests/answerDataPWB", {
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
    const question = document.getElementById("question");
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

    if (
      questionCounter == 2 ||
      questionCounter == 4 ||
      questionCounter == 7 ||
      questionCounter == 9 ||
      questionCounter == 11 ||
      questionCounter == 13 ||
      questionCounter == 15 ||
      questionCounter == 17 ||
      questionCounter == 18 ||
      questionCounter == 20 ||
      questionCounter == 22 ||
      questionCounter == 24 ||
      questionCounter == 27 ||
      questionCounter == 29 ||
      questionCounter == 31 ||
      questionCounter == 32 ||
      questionCounter == 34 ||
      questionCounter == 35 ||
      questionCounter == 41 ||
      questionCounter == 42 ||
      questionCounter == 43 ||
      questionCounter == 44 ||
      questionCounter == 45 ||
      questionCounter == 54 ||
      questionCounter == 55 ||
      questionCounter == 56 ||
      questionCounter == 58 ||
      questionCounter == 60 ||
      questionCounter == 61 ||
      questionCounter == 62 ||
      questionCounter == 63 ||
      questionCounter == 66 ||
      questionCounter == 73 ||
      questionCounter == 74 ||
      questionCounter == 75 ||
      questionCounter == 76 ||
      questionCounter == 82 ||
      questionCounter == 83 ||
      questionCounter == 84
    ) {
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
    } else {
      switch (selectedChoice.id) {
        case "choice1":
          answers[questionCounter - 1] = 1;
          break;
        case "choice2":
          answers[questionCounter - 1] = 2;
          break;
        case "choice3":
          answers[questionCounter - 1] = 3;
          break;
        case "choice4":
          answers[questionCounter - 1] = 4;
          break;
        case "choice5":
          answers[questionCounter - 1] = 5;
          break;
        case "choice6":
          answers[questionCounter - 1] = 6;
          break;
      }
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

function calResult() {
  autonomy = calAutonomy();
  environmentalMastery = calEnvironmentalMastery();
  personalGrowth = calPersonalGrowth();
  positiveRelations = calPositiveRelations();
  purposeInLife = calPurposeInLife();
  selfAcceptance = calSelfAcceptance();
}

// function calAutonomy() {
//   return (
//     answers[2 - 1] +
//     answers[8 - 1] +
//     answers[14 - 1] +
//     answers[20 - 1] +
//     answers[26 - 1] +
//     answers[32 - 1] +
//     answers[38 - 1] +
//     answers[44 - 1] +
//     answers[50 - 1] +
//     answers[56 - 1] +
//     answers[62 - 1] +
//     answers[68 - 1] +
//     answers[74 - 1] +
//     answers[80 - 1]
//   );
// }

// function calEnvironmentalMastery() {
//   return (
//     answers[3 - 1] +
//     answers[9 - 1] +
//     answers[15 - 1] +
//     answers[21 - 1] +
//     answers[27 - 1] +
//     answers[33 - 1] +
//     answers[39 - 1] +
//     answers[45 - 1] +
//     answers[51 - 1] +
//     answers[57 - 1] +
//     answers[63 - 1] +
//     answers[69 - 1] +
//     answers[75 - 1] +
//     answers[81 - 1]
//   );
// }

// function calPersonalGrowth() {
//   return (
//     answers[4 - 1] +
//     answers[10 - 1] +
//     answers[16 - 1] +
//     answers[22 - 1] +
//     answers[28 - 1] +
//     answers[34 - 1] +
//     answers[40 - 1] +
//     answers[46 - 1] +
//     answers[52 - 1] +
//     answers[58 - 1] +
//     answers[64 - 1] +
//     answers[70 - 1] +
//     answers[76 - 1] +
//     answers[82 - 1]
//   );
// }

// function calPositiveRelations() {
//   return (
//     answers[1 - 1] +
//     answers[7 - 1] +
//     answers[13 - 1] +
//     answers[19 - 1] +
//     answers[25 - 1] +
//     answers[31 - 1] +
//     answers[37 - 1] +
//     answers[43 - 1] +
//     answers[49 - 1] +
//     answers[55 - 1] +
//     answers[61 - 1] +
//     answers[67 - 1] +
//     answers[73 - 1] +
//     answers[79 - 1]
//   );
// }

// function calPurposeInLife() {
//   return (
//     answers[5 - 1] +
//     answers[11 - 1] +
//     answers[17 - 1] +
//     answers[23 - 1] +
//     answers[29 - 1] +
//     answers[35 - 1] +
//     answers[41 - 1] +
//     answers[47 - 1] +
//     answers[53 - 1] +
//     answers[59 - 1] +
//     answers[65 - 1] +
//     answers[71 - 1] +
//     answers[77 - 1] +
//     answers[83 - 1]
//   );
// }

// function calSelfAcceptance() {
//   return (
//     answers[6 - 1] +
//     answers[12 - 1] +
//     answers[18 - 1] +
//     answers[24 - 1] +
//     answers[30 - 1] +
//     answers[36 - 1] +
//     answers[42 - 1] +
//     answers[48 - 1] +
//     answers[54 - 1] +
//     answers[60 - 1] +
//     answers[66 - 1] +
//     answers[72 - 1] +
//     answers[78 - 1] +
//     answers[84 - 1]
//   );
// }

startTest();

//AMQ
//BISI
//CT
//EQI
//Holland
//MBTI
//NEO FFI
//NEO PI-R
//pwb
//riff
//scl
