function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

function showText() {
  alert("Book your tickets to Brazil right now for next February!!!");
}

let themeButton = document.querySelector(`.button-theme`);
themeButton.addEventListener("click", changeTheme);

let experienceButton = document.querySelector(".button-experience");
experienceButton.addEventListener("click", showText);
