let myLoginForm = document.querySelector("#loginForm");
let loginBtn = document.querySelector("#login-submit-btn");
let loaderWrapper = document.querySelector(".loader-wrapper");
// let loginView = document.querySelector(".login-view");


function login(datas) {
  // Show loader
  console.log(loaderWrapper)
  loaderWrapper.style.display = "flex";
  loginUser(datas)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
      console.log(data);
      // Hide loader
      loaderWrapper.style.display = "none";
      // loginView.style.display = "none";
      document.location.href = "/"; // Redirect to home page
    })
    .catch((err) => {
      console.log(err);
      loaderWrapper.style.display = "none";
    });
}

async function loginUser(datas) {
  console.log("Data, ", datas);
  let response = await fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(datas),
  });
  // console.log(JSON.stringify(data))
  return response;
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log();
  let loginData = {
    email: document.getElementById("login-email").value,
    password: document.getElementById("login-password").value,
  };
  login(loginData);
});

// function loadTheme(){
//   document.querySelector('#theme-style').href = `../${localStorage.getItem("theme")}.css`
// }
