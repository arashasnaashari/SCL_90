const question = document.getElementById("question");
const questionNumber = document.getElementById("question-number");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarFull = document.getElementById("progressBarFull");
const progressBar = document.getElementById("progressBar");
const previousQuestionBtn = document.getElementById("previousQuestionBtn");
const acceptQuestionBtn = document.getElementById("acceptQuestionBtn");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const choice5 = document.getElementById("choice5");
const choice6 = document.getElementById("choice6");
const choice7 = document.getElementById("choice7");
const choice8 = document.getElementById("choice8");
const choice9 = document.getElementById("choice9");
const choice10 = document.getElementById("choice10");
const choice11 = document.getElementById("choice11");
const choice12 = document.getElementById("choice12");
const choice13 = document.getElementById("choice13");
const choice14 = document.getElementById("choice14");
const Choice1 = document.getElementById("Choice1");
const Choice2 = document.getElementById("Choice2");
const Choice3 = document.getElementById("Choice3");
const Choice4 = document.getElementById("Choice4");
const Choice5 = document.getElementById("Choice5");
const Choice6 = document.getElementById("Choice6");
const Choice7 = document.getElementById("Choice7");
const Choice8 = document.getElementById("Choice8");
const Choice9 = document.getElementById("Choice9");
const Choice10 = document.getElementById("Choice10");
const Choice11 = document.getElementById("Choice11");
const Choice12 = document.getElementById("Choice12");
const Choice13 = document.getElementById("Choice13");
const Choice14 = document.getElementById("Choice14");
const table01 = document.getElementById("table01");
const table02 = document.getElementById("table02");

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
  "فعاليت‌ها: هرتعداد از فعاليت‌های زير را که مايليد انجام دهيد، مشخص کنيد(و)",
  "فعاليت‌ها: هرتعداد از فعاليت‌های زير را که مايليد انجام دهيد، مشخص کنيد(ج)",
  "فعاليت‌ها: هرتعداد از فعاليت‌های زير را که مايليد انجام دهيد، مشخص کنيد(ه)",
  "فعاليت‌ها: هرتعداد از فعاليت‌های زير را که مايليد انجام دهيد، مشخص کنيد(الف)",
  "فعاليت‌ها: هرتعداد از فعاليت‌های زير را که مايليد انجام دهيد، مشخص کنيد(م)",
  "فعاليت‌ها: هرتعداد از فعاليت‌های زير را که مايليد انجام دهيد، مشخص کنيد(ق)",
  "تجربه‌ها: هرتعداد از فعاليت‌هايی که تجربه کرده‌ايد و می‌توانيد انجام دهيد، مشخص کنيد(و)",
  "تجربه‌ها: هرتعداد از فعاليت‌هايی که تجربه کرده‌ايد و می‌توانيد انجام دهيد، مشخص کنيد(ج)",
  "تجربه‌ها: هرتعداد از فعاليت‌هايی که تجربه کرده‌ايد و می‌توانيد انجام دهيد، مشخص کنيد(ه)",
  "تجربه‌ها: هرتعداد از فعاليت‌هايی که تجربه کرده‌ايد و می‌توانيد انجام دهيد، مشخص کنيد(الف)",
  "تجربه‌ها: هرتعداد از فعاليت‌هايی که تجربه کرده‌ايد و می‌توانيد انجام دهيد، مشخص کنيد(م)",
  "تجربه‌ها: هرتعداد از فعاليت‌هايی که تجربه کرده‌ايد و می‌توانيد انجام دهيد، مشخص کنيد(ق)",
  "مشاغل: اين فهرست به بررسی احساسات و نگرش‌های شما نسبت به مشاغل گوناگون می‌پردازد. مشاغلی را که به آن علاقه داريد يا برای شما خوشايند است، مشخص کنيد(و)",
  "مشاغل: اين فهرست به بررسی احساسات و نگرش‌های شما نسبت به مشاغل گوناگون می‌پردازد. مشاغلی را که به آن علاقه داريد يا برای شما خوشايند است، مشخص کنيد(ج)",
  "مشاغل: اين فهرست به بررسی احساسات و نگرش‌های شما نسبت به مشاغل گوناگون می‌پردازد. مشاغلی را که به آن علاقه داريد يا برای شما خوشايند است، مشخص کنيد(ه)",
  "مشاغل: اين فهرست به بررسی احساسات و نگرش‌های شما نسبت به مشاغل گوناگون می‌پردازد. مشاغلی را که به آن علاقه داريد يا برای شما خوشايند است، مشخص کنيد(الف)",
  "مشاغل: اين فهرست به بررسی احساسات و نگرش‌های شما نسبت به مشاغل گوناگون می‌پردازد. مشاغلی را که به آن علاقه داريد يا برای شما خوشايند است، مشخص کنيد(م)",
  "مشاغل: اين فهرست به بررسی احساسات و نگرش‌های شما نسبت به مشاغل گوناگون می‌پردازد. مشاغلی را که به آن علاقه داريد يا برای شما خوشايند است، مشخص کنيد(ق)",
  "خودسنجی‌ها: خود را در توانايی‌ها و مهارت‌های زير در مقايسه با همسالانتان درجه‌بندی کنيد. سعی کنيد صحيح ترين برآورد را  در مورد خودتان انجام دهيد. به کمترين توانايی نمره 1 و به بيشترين آن نمره 7 دهيد. تا حد امکان از درجه‌بندی يکسان خود در هر يک از توانايی‌ها بپرهيزيد",
];

//CONSTANTS

const MAX_QUESTION = 19;

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

    fetch("/tests/answerDataHolland", {
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
  if (questionCounter == 18) {
    previousQuestionBtn.style.visibility = "hidden";
  }
  if (questionCounter < 17) {
    acceptQuestionBtn.style.visibility = "hidden";
  }
  if (questionCounter >= 18) {
    acceptQuestionBtn.style.visibility = "visible";
  }

  //filling the progress bar
  let progressBarFullWidth = (questionCounter / MAX_QUESTION) * 100 + "%";
  progressBarFull.style.width = progressBarFullWidth;

  if (questionCounter <= 11) {
    Choice12.style.display = "none";
    Choice13.style.display = "none";
    Choice14.style.display = "none";
    table01.style.display = "none";
    table02.style.display = "none";
    choice1.innerText = eleven[answerCounter];
    choice2.innerText = eleven[answerCounter + 1];
    choice3.innerText = eleven[answerCounter + 2];
    choice4.innerText = eleven[answerCounter + 3];
    choice5.innerText = eleven[answerCounter + 4];
    choice6.innerText = eleven[answerCounter + 5];
    choice7.innerText = eleven[answerCounter + 6];
    choice8.innerText = eleven[answerCounter + 7];
    choice9.innerText = eleven[answerCounter + 8];
    choice10.innerText = eleven[answerCounter + 9];
    choice11.innerText = eleven[answerCounter + 10];
    answerCounter += 11;
  }

  if (questionCounter >= 12 && questionCounter <= 17) {
    Choice12.style.display = "flex";
    Choice13.style.display = "flex";
    Choice14.style.display = "flex";
    table01.style.display = "none";
    table02.style.display = "none";
    choice1.innerText = eleven[answerCounter];
    choice2.innerText = eleven[answerCounter + 1];
    choice3.innerText = eleven[answerCounter + 2];
    choice4.innerText = eleven[answerCounter + 3];
    choice5.innerText = eleven[answerCounter + 4];
    choice6.innerText = eleven[answerCounter + 5];
    choice7.innerText = eleven[answerCounter + 6];
    choice8.innerText = eleven[answerCounter + 7];
    choice9.innerText = eleven[answerCounter + 8];
    choice10.innerText = eleven[answerCounter + 9];
    choice11.innerText = eleven[answerCounter + 10];
    choice12.innerText = eleven[answerCounter + 11];
    choice13.innerText = eleven[answerCounter + 12];
    choice14.innerText = eleven[answerCounter + 13];
    answerCounter += 14;
  }
  if (questionCounter == 18) {
    Choice1.style.display = "none";
    Choice2.style.display = "none";
    Choice3.style.display = "none";
    Choice4.style.display = "none";
    Choice5.style.display = "none";
    Choice6.style.display = "none";
    Choice7.style.display = "none";
    Choice8.style.display = "none";
    Choice9.style.display = "none";
    Choice10.style.display = "none";
    Choice11.style.display = "none";
    Choice12.style.display = "none";
    Choice13.style.display = "none";
    Choice14.style.display = "none";
    table01.style.display = "block";
    table02.style.display = "block";
  }

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
  if (questionCounter <= 10) {
    answerCounter -= 22;
  }
  if (questionCounter == 11) {
    answerCounter -= 25;
  }
  if (questionCounter >= 12) {
    answerCounter -= 28;
  }
  getNewQuestion();
});

//New Answer
let eleven = [
  "نصب وسايل الکتريکی",
  "تعمير اتومبيل",
  "ساختن اشياء چوبی",
  "راندن کاميون يا تراکتور",
  "استفاده از ابزار ماشينی يا فلزکاری",
  "تغيير ابتکاری موتور اتومبيل و موتور سيکلت",
  "گذراندن دوره کارگاه",
  "گذراندن دوره طراحی مکانيکی",
  "گذراندن دوره درودگری (کارهای چوبی)",
  "گذراندن دوره خياطی",
  "گذراندن دوره اتومکانيک (خودرو)",
  "خواندن کتاب‌ها يا مجلات علمی",
  "کار در آزمايشگاه",
  "کار برروی يک پروژه علمی",
  "ساختن مدل‌هايی از هواپيما (ماکت)",
  "کار با وسايل و مواد شيميايی",
  "مطالعه آزاد درباره موضوعات خاص",
  "حل معماهای رياضی و شطرنج",
  "گذراندن دوره فيزيک",
  "گذراندن دوره شيمی",
  "گذراندن دوره هندسه يا مثلثات",
  "گذراندن دوره زيست‌شناسی",
  "طراحی، ترسيم و نقاشی",
  "بازيگری تئاتر و سينما",
  "طراحی داخلی ساختمان‌ها يا دکوراسيون",
  "نوازندگی در گروه موسيقي و سرود",
  "نوازندگی يکی از آلات موسيقی",
  "رفتن به برنامه‌های اجرای موسيقی",
  "خواندن داستان‌های معروف",
  "نقاشی از روی مدل يا عکس",
  "نقد نمايش‌نامه‌ها",
  "خواندن شعر يا سرودن شعر",
  "گذراندن دوره هنری",
  "نامه‌نگاری با دوستان",
  "شرکت در برنامه‌های مذهبی",
  "عضويت در انجمن‌ها و مراکز فرهنگی و اجتماعی",
  "کمک به حل مشکلات شخصی ديگران",
  "مراقبت از کودکان",
  "شرکت در ميهمانی‌ها و مراسم جشن و سرور",
  "بيان مطالب شنيدنی و لطيفه درجمع دوستان",
  "مطالع کتاب‌های روانشناسی",
  "حضور در جلسات و سمينارها",
  "شرکت در کلاس‌های ورزشی",
  "پيدا کردن دوستان و افراد جديد",
  "تاثير‌گذاشتن روی ديگران",
  "فروشندگی اجناس",
  "بحث درباره مسائل سياسی",
  "کارکردن در مغازه يا فروشگاه شخصی",
  "شرکت فعال در سمينارها",
  "سخنرانی",
  "خدمت به عنوان مدير يک گروه",
  "سرپرستی و نظارت برکار ديگران",
  "ملاقات با شخصيت‌های مهم",
  "رهبری يک گروه برای رسيدن به هدف",
  "مشارکت در فعاليت‌های سياسی",
  "دقت در تميز نگه‌داشتن کتاب‌ها و لوازم التحرير خود",
  "ماشين‌نويسی اوراق يا نامه برای خود و ديگران",
  "حسابداری ساده در کسب و کار يا امور دفتری",
  "کار با انواع ماشين‌های اداری (حساب، کامپيوتر و غيره)",
  "ثبت و نگه‌داری اسناد، هزينه‌ها و درآمد‌ها",
  "گذراندن دوره ماشين‌نويسی",
  "گذراندن دوره بازرگانی",
  "گذراندن دوره دفتر‌داری",
  "گذراندن دوره حسابداری مالی",
  "بايگانی نامه‌ها، گزارش‌ها، سوابق و غيره",
  "نوشتن نامه‌های اداری و رسمی",
  "از ابزار‌های برقی کارگاه نجاری مانند اره، ماشين تراش يا ماشين سنباده استفاده کرده‌ام",
  "کارکردن با ولت متر را می‌دانم",
  "می‌توانم کاربراتور را تنظيم کنم",
  "با ابزار‌های برق مانند مته، آسياب، خردکن و چرخ خياطی کار کرده‌ام",
  "کار جلازدن و لکه‌زدايی مبلمان يا کارهای چوبی را می‌توانم انجام دهم",
  "می‌توانم نقشه ساختمان يا طرح ماشين را بخوانم",
  "تعميرات ساده وسايل برقی را می‌توانم انجام دهم",
  "می‌توانم وسايل چوبی (صندلي، ميز و غيره) را تعميرکنم",
  "رسم‌های فنی را می‌توانم بکشم",
  "می‎توانم تعميرات ساده تلويزيون را انجام دهم",
  "تعميرات ساده لوله‌کشی را می‌توانم انجام دهم",
  "طرز کار لامپ خلاء (لوله خالی از هوا) را می‌دانم",
  "می‌توانم سه غذا را که از لحاظ مواد پروتئينی غنی هستند نام ببرم",
  "مفهوم نيمه عمر عنصر راديواکتيو را می‌دانم",
  "می‌توانم جدول مندليف را توضيح دهم",
  "می‌توانم از خط‌کش محاسبه برای ضرب يا تقسيم استفاده کنم",
  "ازميکروسکوپ می‌توانم استفاده کنم",
  "سه نوع صورت فلکی ستارگان را می‌توانم شناسايي کنم",
  "چگونگی عملکرد گلبول‌های سفيد خون را می‌توانم توضيح دهم",
  "فرمول‌های ساده شيمی را می‌توانم تفسيرکنم",
  "می‌دانم که چرا ماهواره‌ها به زمين نمی‌افتند",
  "در سمينار يا مسابقه علمی شرکت کرده‌ام",
  "می‌توانم در نمايش‌نامه نقشی را بازی کنم",
  "می‌توانم شعر يا نوشته‌ای را دکلمه کنم",
  "می‌توانم در نمايش عروسکی بازی کنم",
  "می‌توانم افراد را طوری نقاشی کنم که قابل شناسايی باشند",
  "می‌توانم نقاشی يا مجسمه‌سازی کنم",
  "می‌توانم سفالگری کنم",
  "طراحی لباس، پوستر يا وسايل چوبی را می‌توانم انجام دهم",
  "می‌توانم به خوبی شعر بگويم يا داستان بنويسم",
  "می‌توانم يکی از آلات موسيقی را بنوازم",
  "در سرودهای دو تا چهار نفره می‌توانم شرکت کنم",
  "می‌توانم يکی از آلات موسيقی را در يک جمع رسمی بنوازم",
  "می‌توانم به خوبی مطالب را برای ديگران توضيح دهم",
  "در امور خيريه با جمع‌آوری کمک‌های مردمی شرکت کرده‌ام",
  "با ديگران به خوبی کار و تشريک مساعی می‌کنم",
  "در سرگرم‌کردن افراد بزرگتر از خود مهارت دارم",
  "می‌توانم ميزبان خوبی باشم",
  "به راحتی می‌توانم به کودکان آموزش دهم",
  "می‌توانم براي سرگرمی ديگران در يک مهمانی برنامه‌ريزی کنم",
  "به خوبی می‌توانم به افراد مضطرب يا دارای مشکل کمک کنم",
  "داوطلبانه در بيمارستان، کلينيک يا مراکز امدادرسانی (هلال احمر) کارکرده‌ام",
  "برای امورخيريه مربوط به مدرسه يا مسجد می‌توانم برنامه‌ريزی کنم",
  "درباره شخصيت افراد به خوبی می‎توانم قضاوت کنم",
  "در مدرسه به عنوان نماينده انتخاب شده‌ام",
  "می‌توانم کار ديگران را سرپرستی کنم",
  "اشتياق و انرژی فوق‌العاده‌ای در انجام کارهايم دارم",
  "به خوبی می‌توانم مردم را به انجام کارهای موردعلاقه خودم وادارم",
  "در فروشندگی مهارت دارم",
  "به عنوان نماينده يک گروه در ارائه پيشنهادات و يا شکايات به مقام بالاتر انجام وظيفه کرده‌ام",
  "در کار فروشندگی يا رهبری گروه پاداش گرفته‌ام",
  "باشگاه، گروه يا دسته‌ای را سازمان داده‌ام",
  "اقدام به ايجاد کسب و کار نموده‌ام",
  "می‌دانم چگونه سردسته يا نماينده موفقی باشم",
  "مباحثه‌گر خوبی هستم",
  "در هر دقيقه می‌توانم چهل کلمه تايپ کنم",
  "می‌توانم با دستگاه فتوکپی يا ماشين جمع‌بندي قيمت کالا کار کنم",
  "می‌توانم تند‌نويسی کنم",
  "می‌توانم نامه‌ها وساير اوراق را بايگانی کنم",
  "در امور اداری کار کرده‌ام",
  "می‌توانم زمان‌بندی مشخصی برای انجام کارهايم داشته‌باشم",
  "می‌توانم مقدار زيادی از کارهای دفتری را درمدت کوتاهی انجام دهم",
  "از ماشين حساب می‌توانم استفاده کنم",
  "می‌توانم از کامپيوتر استفاده کنم",
  "می‌توانم بدهي‌ها و طلب‌ها (ترازنامه) را در دفتر کل وارد کنم",
  "می‌توانم گزارش‌های دقيق پرداخت‌ها و فروش‌ها را نگهداری و تنظيم کنم",
  "مکانيک هواپيما",
  "متخصص موجودات آبزی و وحشی",
  "مکانيک اتومبيل",
  "نجار",
  "راننده خاکبرداری برقی (جرثقيل)",
  "نقشه‌بردار",
  "بازرس ساختمان",
  "مهندس مخابرات",
  "جوشکار",
  "پروش‌دهنده گل‌ها و گياهان",
  "راننده تاکسی سرويس (آژانس)",
  "مهندس لوکوموتيو",
  "خياط",
  "برقکار",
  "متخصص هواشناسی",
  "زيست‌شناس",
  "ستاره‌شناس",
  "تکنسين آزمايشگاه پزشکی",
  "مردم‌شناس",
  "دامپزشک",
  "شيميدان",
  "پژوهشگر (محقق)",
  "نويسنده مقالات علمی",
  "سردبير يک مجله علمی",
  "زمين‌شناس",
  "گياه‌شناس",
  "کارمند تحقيقات علمی",
  "فيزيکدان",
  "شاعر",
  "رهبر ارکستر",
  "موسيقيدان",
  "نويسنده",
  "هنرمند آگهی‌های تبليغاتی",
  "نويسنده ادبيات کودکان",
  "بازيگر سينما و تئاتر",
  "خبرنگار",
  "صورتگر (نقاش)",
  "خواننده سرود",
  "آهنگساز",
  "مجسمه‌ساز",
  "نمايشنامه‌نويس",
  "فيلمساز",
  "جامعه‌شناس",
  "دبير دبيرستان",
  "متخصص اصلاح و تربيت رفتار",
  "گفتار درمان",
  "مشاور ازدواج",
  "مدير مدرسه",
  "سرپرست خوابگاه",
  "روانشناس",
  "دبير علوم اجتماعی",
  "مدير امور خيريه",
  "مربی ورزش",
  "مشاور",
  "دستيار امور روانپزشکی",
  "راهنما و مشاور شغلی",
  "معامله‌گر یا واسطه‌گر امور تجاری",
  "مامور خريد",
  "مدير اجرايی آگهی و مسئول تبليغات",
  "نماينده فروش کارخانه توليدی",
  "توليد کننده برنامه‌های تلويزيونی",
  "مدير هتل",
  "مدير شرکت‌های بازرگانی",
  "مدير رستوران",
  "مدير مراسم تشريفات",
  "فروشنده",
  "واسطه‌گر معاملات ملکی يا اتومبيل",
  "مدير تبليغات يا مدير روابط عمومی",
  "موسس باشگاه ورزشی",
  "مدير فروش",
  "دفتردار",
  "معلم درس ماشين نويسی",
  "مسئول برنامه‌های بودجه (ذی حساب)",
  "حسابدار تحصيل کرده",
  "بازرس مالی اداری",
  "تندنويس دادگاه",
  "تحويلدار بانک",
  "کارشناس ماليات",
  "ناظر صورت برداری از موجودات",
  "اپراتور کامپيوتر",
  "ارزياب هزينه‌ها (کاربردار)",
  "کارشناس امور مالی",
  "کارمند امور مالی",
  "بازرس بانک",
];

//calculating results

startTest();
