(function () {
  var root = document.documentElement;

  var themeBtn = document.getElementById("theme-btn");
  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }
  function paintThemeButton() {
    if (!themeBtn) { return; }
    var light = currentTheme() === "light";
    themeBtn.textContent = light ? "Dark theme" : "Light theme";
    themeBtn.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
  }
  if (themeBtn) {
    paintThemeButton();
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paintThemeButton();
    });
  }

  var board = document.getElementById("board");
  var reveal = document.getElementById("reveal");
  var live = document.getElementById("board-live");
  if (board && reveal) {
    reveal.addEventListener("click", function () {
      var on = board.classList.toggle("revealed");
      reveal.setAttribute("aria-expanded", on ? "true" : "false");
      reveal.textContent = on
        ? "Hide the honest check"
        : "Show what an honest check would catch";
      if (live) {
        live.textContent = on
          ? "Honest check shown. The clean stage dropped some records and raised no error. Verdict: green but lying."
          : "Honest check hidden. The dashboard shows all green.";
      }
    });
  }
})();
