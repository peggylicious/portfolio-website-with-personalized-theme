// function signup() {
//   alert("Hello");
let myform = document.querySelector("#signupForm");
let myLoginForm = document.querySelector("#loginForm");
let btn = document.querySelector("#signup-submit-btn");
let loginBtn = document.querySelector("#login-submit-btn");
// let loginData = new FormData(myLoginForm);

// let username = document.getElementById("name-1").value;
// let useremail = document.getElementById("email-1").value;
// let formData = new FormData(myform);
// let data = {}

// function getDetails(datas) {
//   // loginData = new FormData(myform);
//   authenticate(datas)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => {
//       console.log(err);
//     });
// }
// let data;
btn.addEventListener("click", function (event) {
  let username = document.getElementById("name-1").value;
  let useremail = document.getElementById("email-1").value;
  let formData = new FormData(myform);
  // data = {
  //   name: username + "",

  //   email: useremail + "",
  // };

  let signupData = {
    name: document.getElementById("name-1").value,
    email: document.getElementById("email-1").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirmPassword").value,
  };
  event.preventDefault();
  //   event.stopImmediatePropagation();

  // console.log(document.getElementById("email-1").value);
  // console.log(data);

  authenticate(signupData)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
});
// }
async function authenticate(data) {
  // console.log("Data, ", data);
  let response = await fetch("http://localhost:3000/user/signup", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  // console.log(JSON.stringify(data))
  return response;
}

// async function authenticate1(datas) {
//   console.log("Data, ", datas);
//   let response = await fetch("http://localhost:3000/user/signup", {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(datas),
//   });
//   // console.log(JSON.stringify(data))
//   return response;
// }

// loginBtn.addEventListener("click", getDetails(loginData))
