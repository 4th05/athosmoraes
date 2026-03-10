(function () {
  var storageKey = "theme";
  var root = document.documentElement;
  var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      return;
    }
    root.removeAttribute("data-theme");
  }

  function getPreferredTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem(storageKey);
    } catch (e) {
      stored = null;
    }
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return mediaQuery.matches ? "dark" : "light";
  }

  function setTheme(theme) {
    applyTheme(theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#0b1220" : "#f8f9fb");
    }
  }

  function toggleTheme() {
    var isDark = root.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "light" : "dark");
  }

  var initial = getPreferredTheme();
  applyTheme(initial);

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    if (button) {
      button.addEventListener("click", toggleTheme);
    }
  });
})();
