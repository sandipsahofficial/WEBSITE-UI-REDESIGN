const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

if (menuToggle && navigation) {
  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    navigation.classList.toggle("is-open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
    if (!link) return;

    setMenuOpen(false);
    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    const heading = target && (target.matches("h1, h2") ? target : target.querySelector("h1, h2"));
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      window.requestAnimationFrame(() => heading.focus({ preventScroll: true }));
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) setMenuOpen(false);
  });
}

const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
let savedTheme = null;

try {
  savedTheme = window.localStorage.getItem("portfolio-theme");
} catch (error) {
  console.error("Could not read the saved theme preference.", error);
}

const setTheme = (theme, persist = false) => {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    const glyph = themeToggle.querySelector(".theme-glyph");
    if (glyph) glyph.textContent = isDark ? "☀" : "☾";
  }

  if (themeColor) themeColor.setAttribute("content", isDark ? "#121713" : "#f6f5f0");

  if (persist) {
    try {
      window.localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    } catch (error) {
      console.error("Could not save the theme preference.", error);
    }
  }
};

setTheme(savedTheme === "dark" ? "dark" : "light");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    setTheme(isDark ? "light" : "dark", true);
  });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
