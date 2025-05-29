/**** Page ready functions, no libraries or dependencies. ****/

// Slide out sidebar for mobile.
document.addEventListener("DOMContentLoaded", () => {
  const drawer = document.querySelector("#sidebar");
  const overlay = document.querySelector("#overlay");

  const toggleMenuButton = document.querySelector("#menu-toggle");
  console.log(toggleMenuButton);
  toggleMenuButton.addEventListener("click", () => {
    drawer.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
  });

  overlay.addEventListener("click", () => {
    drawer.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  });
});

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

// Additional hover effects.
document.addEventListener("DOMContentLoaded", () => {
  const featuredItems = document.getElementsByClassName("featured_item");
  if(featuredItems) {
    const hoverEffects = [
      "text-sky-500",
      "transition",
      "duration-300",
      "delay-100",
    ];
    Object.values(featuredItems).forEach(featuredItem => {
      const title = featuredItem.querySelector("h2");
      const icon = featuredItem.querySelector("i.featured_item_icon");

      featuredItem.addEventListener("mouseover", () => {
        hoverEffects.forEach(effect => {
          title.classList.add(effect);
          icon.classList.add(effect);
        });
      });
      featuredItem.addEventListener("mouseleave", () => {
        hoverEffects.forEach(effect => {
          title.classList.remove(effect);
          icon.classList.remove(effect);
        });
      });
    });
  }
});
