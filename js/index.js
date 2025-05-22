/**** Page ready functions, no libraries or dependencies. ****/

// Theme
document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }
  const theme = localStorage.getItem("theme");
  const htmlElement = document.documentElement;

  htmlElement.dataset.theme = theme;

  const toggleIcon = document.querySelector("#theme-toggle i");
  if(theme === "light") {
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");
  }
  else {
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
  }
});

const btnToggleTheme = document.getElementById("theme-toggle");
const toggleIcon = btnToggleTheme.querySelector("i");
btnToggleTheme.onclick = () => {
  const theme = localStorage.getItem("theme");
  if(theme == "light") {
    localStorage.setItem("theme", "dark");
    document.documentElement.dataset.theme = "dark";

    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
  }
  else {
    localStorage.setItem("theme", "light");
    document.documentElement.dataset.theme = "light";

    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");
  }
};

