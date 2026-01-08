document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    success.style.display = "block";
    form.reset();

    setTimeout(() => {
      success.style.display = "none";
    }, 5000);
  });
});
function updateClock() {
  const now = new Date();
  const hour = now.getHours();

  document.getElementById("time").textContent =
    now.toLocaleTimeString("pl-PL");

  document.getElementById("date").textContent =
    now.toLocaleDateString("pl-PL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });

  const celestial = document.getElementById("celestial");
  celestial.className = "celestial";

  if (hour >= 6 && hour < 18) {
    celestial.classList.add("sun");
  } else {
    celestial.classList.add("moon");
  }
}

updateClock();
setInterval(updateClock, 1000);
