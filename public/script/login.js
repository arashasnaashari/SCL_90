const phone = document.getElementById("phone");
const password = document.getElementById("password");
const saveDataBtn = document.getElementById("saveDataBtn");

saveDataBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const body = {
    phone: phone.value,
    password: password.value,
  };
  const string = JSON.stringify(body);
  if (phone.value && password.value) {
    saveDataBtn.disabled = true;
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
});
