const username = document.getElementById("name");
const age = document.getElementById("age");
const selectEl = document.getElementById("gender");
const phone = document.getElementById("phone");
const nationalcode = document.getElementById("nationalcode");
const password = document.getElementById("password");

const saveDataBtn = document.getElementById("saveDataBtn");

saveDataBtn.addEventListener("click", (e) => {
  e.preventDefault();
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
    saveDataBtn.disabled = true;
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
          window.location.href = "/users/login";
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
});
