window.addEventListener("load", function () {
  document.querySelector("#theme-style").href = `../${localStorage.getItem(
    "theme"
  )}.css`;
});
