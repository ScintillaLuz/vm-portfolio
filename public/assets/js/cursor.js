const cursorButton = document.querySelector('[data-action="toggle-cursor"]');

function setCursor(mode) {
  document.documentElement.setAttribute("data-cursor", mode);
  localStorage.setItem("cursor", mode);
}

cursorButton?.addEventListener("click", () => {
  const isCustom =
    document.documentElement.getAttribute("data-cursor") === "custom";
  setCursor(isCustom ? "default" : "custom");
});