const themeButton = document.querySelector('[data-action="toggle-theme"]');
const switchIcon = themeButton?.querySelector("img");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Swap only the on/off token, leaving the palette token alone
  if (switchIcon) {
    const state = theme === "dark" ? "off" : "on";
    switchIcon.src = switchIcon.src.replace(/switch_(on|off)_/, `switch_${state}_`);
  }
}

themeButton?.addEventListener("click", () => {
  const isDark =
    document.documentElement.getAttribute("data-theme") === "dark";
  setTheme(isDark ? "light" : "dark");
});

// On load, sync the icon to the theme the head script already applied
if (switchIcon && localStorage.getItem("theme") === "dark") {
  switchIcon.src = switchIcon.src.replace(/switch_(on|off)_/, "switch_off_");
}