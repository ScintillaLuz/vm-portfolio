const themeButton = document.querySelector('[data-action="toggle-theme"]');

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

themeButton?.addEventListener("click", () => {
  const isDark =
    document.documentElement.getAttribute("data-theme") === "dark";
  setTheme(isDark ? "light" : "dark");
});