const paletteButton = document.querySelector('[data-action="toggle-palette"]');
const icons = document.querySelectorAll(".icon-button img");

function setPalette(palette) {
  document.documentElement.setAttribute("data-palette", palette);

  icons.forEach((img) => {
    const variant = palette === "magenta" ? "magenta" : "light";
    img.src = img.src.replace(/(light|magenta)\.svg$/, `${variant}.svg`);
  });

  localStorage.setItem("palette", palette);
}

paletteButton?.addEventListener("click", () => {
  const isMagenta =
    document.documentElement.getAttribute("data-palette") === "magenta";
  setPalette(isMagenta ? "blue" : "magenta");
});

// On load, sync the icons to whatever palette the inline head script already set
const savedPalette = localStorage.getItem("palette");
if (savedPalette === "magenta") {
  icons.forEach((img) => {
    img.src = img.src.replace(/(light|magenta)\.svg$/, "magenta.svg");
  });
}