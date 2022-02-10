let myLoginForm = document.querySelector("#loginForm");
let loginBtn = document.querySelector("#login-submit-btn");

function getDetails(datas) {
  authenticate1(datas)
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem("token", data.token)
      console.log(data);
      document.location.href = "/"
    })
    .catch((err) => {
      console.log(err);
    });
}

async function authenticate1(datas) {
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
  getDetails(loginData);
});

// function loadTheme(){
//   document.querySelector('#theme-style').href = `../${localStorage.getItem("theme")}.css`
// }