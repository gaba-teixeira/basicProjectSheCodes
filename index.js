function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let themeButton = document.querySelector(`.button-theme`);
addEventListener("click", changeTheme);
