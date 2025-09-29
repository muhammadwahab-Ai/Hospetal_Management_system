const username = document.querySelector("#username");
const password = document.querySelector("#password");
const LoginBtn = document.querySelector("#loginBtn");

LoginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("Failed the input");
  } else if (username.value === "wahab" && password.value === "@123") {
    setTimeout(() => {
      window.location.href = "hospetal-M-S.html"

    }, 1000);
  }
});


