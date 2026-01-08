export function initForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  if (!form || !success) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    success.style.display = "block";
    form.reset();
  });
}
