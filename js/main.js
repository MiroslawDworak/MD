import { initClock } from "./clock.js";
import { initForm } from "./form.js";

console.log("main.js działa");

document.addEventListener("DOMContentLoaded", () => {
  initClock();
  initForm();
});
