window.addEventListener("load", () => {
  document.getElementById("open-nav-btn").addEventListener("click", () => {
    document.getElementById("my-side-nav").style.width = "min(15rem, 100vw)";
    document.getElementById("my-side-nav").style.borderLeft =
      "4px solid var(--color-primary)";
  });

  document.getElementById("close-nav-btn").addEventListener("click", () => {
    document.getElementById("my-side-nav").style.width = "0";
    document.getElementById("my-side-nav").style.borderLeft = "none";
  });
});
