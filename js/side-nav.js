function closeSideNav() {
  document.getElementById("side-nav").style.width = "0";
  document.getElementById("side-nav").style.borderLeft = "none";
  document.getElementById("side-nav-back").style.height = "0";
  document.getElementById("side-nav-back").style.width = "0";
}

function openSideNav() {
  document.getElementById("side-nav").style.width = "min(15rem, 100vw)";
  document.getElementById("side-nav").style.borderLeft =
    "4px solid var(--color-primary)";
  document.getElementById("side-nav-back").style.height = "100vh";
  document.getElementById("side-nav-back").style.width = "100vw";
}

window.addEventListener("load", () => {
  document
    .getElementById("open-nav-btn")
    .addEventListener("click", openSideNav);
  document
    .getElementById("close-nav-btn")
    .addEventListener("click", closeSideNav);
  document
    .getElementById("side-nav-back")
    .addEventListener("click", closeSideNav);
});
