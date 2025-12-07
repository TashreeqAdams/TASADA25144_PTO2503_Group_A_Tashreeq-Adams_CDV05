// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open");
});

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();
