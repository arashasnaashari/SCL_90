const form_signup = document.querySelectorAll(".form_signup");
const btn_login = document.querySelector(".btn_login");
const btn_signup = document.querySelector(".btn_signup");
const btn_submit_login = document.querySelector(".btn_submit_login");
const btn_submit_signup = document.querySelector(".btn_submit_signup");
const username = document.getElementById("name");
const age = document.getElementById("age");
const selectEl = document.getElementById("gender");
const phone = document.getElementById("phone");
const nationalcode = document.getElementById("nationalcode");
const password = document.getElementById("password");

form_signup.forEach((e) => {
  e.style.display = "none";
});
btn_signup.classList.add("bg-gray-200");
btn_login.classList.remove("bg-gray-200");
btn_submit_login.style.display = "";
btn_submit_signup.style.display = "none";

btn_submit_signup.addEventListener("click", (e) => {
  e.preventDefault();
  fetchSignup();
});
btn_submit_login.addEventListener("click", (e) => {
  e.preventDefault();
  fetchLogin();
});

btn_signup.addEventListener("click", changeToSignup);

btn_login.addEventListener("click", changeToLogin);

function changeToLogin(r) {
  form_signup.forEach((e) => {
    e.style.display = "none";
  });
  btn_signup.classList.add("bg-gray-200");
  btn_login.classList.remove("bg-gray-200");
  btn_submit_login.style.display = "";
  btn_submit_signup.style.display = "none";
}

function changeToSignup(r) {
  form_signup.forEach((e) => {
    e.style.display = "";
  });
  btn_signup.classList.remove("bg-gray-200");
  btn_login.classList.add("bg-gray-200");
  btn_submit_login.style.display = "none";
  btn_submit_signup.style.display = "";
}

function fetchLogin() {
  const body = {
    phone: phone.value,
    password: password.value,
  };
  const string = JSON.stringify(body);
  if (phone.value && password.value) {
    btn_submit_login.disabled = true;
    fetch("/users/login", {
      method: "POST",
      body: string,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          window.location.href = "/dashboard";
        } else if (!data.ok) {
          if (window.confirm("خطا رمز یا تلفن صحیح نیست")) {
            window.location.href = "/users/login";
          }
        } else {
          alert("رفرش کنید");
          saveDataBtn.disabled = false;
        }
      })
      .catch((err) => console.log(err));
  } else {
    alert("همه رو پر کن");
  }
}

function fetchSignup() {
  const body = {
    name: username.value,
    gender: selectEl.value,
    age: age.value,
    phone: phone.value,
    nationalcode: nationalcode.value,
    password: password.value,
  };
  const string = JSON.stringify(body);
  if (
    username.value &&
    selectEl.value &&
    age.value &&
    phone.value &&
    nationalcode.value &&
    password.value
  ) {
    btn_submit_signup.disabled = true;
    fetch("/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: string,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          changeToLogin();
        } else {
          alert("موفق; لاگین کنید");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("ارورررر");
        saveDataBtn.disabled = false;
      });
  } else {
    alert("همه رو پر کن");
  }
}
