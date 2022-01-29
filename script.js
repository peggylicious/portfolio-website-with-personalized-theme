let themeDots = document.querySelectorAll(".theme-dot");
let theme = localStorage.getItem('theme')
if (theme === null){
    localStorage.setItem("theme", 'light')
}else{
    document.querySelector('#theme-style').href = `${theme}.css`
}
themeDots.forEach((el, index, array) => {
  el.addEventListener("click", (x) => {
    let chosenTheme = el.dataset.mode;
    if(el.id.includes(chosenTheme)){
        document.querySelector('#theme-style').href = `${chosenTheme}.css`
        localStorage.setItem("theme", chosenTheme)
    }
    if(el.id.includes('light')){
        document.querySelector('#theme-style').href = `default.css`
        localStorage.setItem("theme", 'light')
    }
  });
  console.log(theme)
});
