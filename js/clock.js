export function initClock() {
  console.log("clock.js działa");

  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");
  const celestial = document.getElementById("celestial");

  if (!timeEl || !dateEl || !celestial) {
    console.error("Brak elementów zegara w HTML");
    return;
  }

  function updateClock() {
    const now = new Date();
    const hour = now.getHours();

    timeEl.textContent = now.toLocaleTimeString("pl-PL");
    dateEl.textContent = now.toLocaleDateString("pl-PL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    celestial.className = "celestial";
    celestial.classList.add(hour >= 6 && hour < 18 ? "sun" : "moon");
  }

  updateClock();
  setInterval(updateClock, 1000);
}
