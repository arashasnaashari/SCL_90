const btn_submit_login = document.querySelector(".btn_submit_login");
const username = document.getElementById("name");
const age = document.getElementById("age");
const selectEl = document.getElementById("gender");
const phone = document.getElementById("phone");
const nationalcode = document.getElementById("nationalcode");
const password = document.getElementById("password");

btn_submit_login.addEventListener("click", (e) => {
  e.preventDefault();
  fetchLogin();
});

function fetchLogin() {
  const body = {
    name: username.value,
    gender: selectEl.value,
    age: age.value,
    password: password.value,
    nationalcode: nationalcode.value,
  };
  const string = JSON.stringify(body);
  if (username.value && selectEl.value && age.value && password.value) {
    btn_submit_login.disabled = true;
    fetch("/users/update", {
      method: "PATCH",
      body: string,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.ok) {
          window.location.href = "/dashboard";
        } else if (!data.ok) {
          alert("errorr");
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
