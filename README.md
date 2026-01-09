# MD
# 🌐 Mirosław Dworak – Portfolio

Nowoczesna, responsywna strona portfolio stworzona w czystym HTML, CSS i JavaScript.

🔗 **Live demo:**  
https://github.com/MiroslawDworak/MD
---

## ✨ Funkcje

- ⏰ Animowany zegar z datą i dniem tygodnia
- ☀️🌙 Ikona dnia / nocy
- 📱 Pełna responsywność (mobile / tablet / desktop)
- 🎨 Animowany gradient tekstu
- 🧩 Modularny JavaScript (ES Modules)
- 🚀 Gotowe pod GitHub Pages

---

## 🛠 Technologie

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6 Modules)
- Font Awesome
- Git & GitHub

---

## 📂 Struktura projektu

```text
.
├── index.html
├── style.css
├── js/
│   ├── main.js
│   ├── clock.js
│   └── form.js
├── logo.jpg
└── README.md

Nie wyświetla mi się zegar na stronie nie wiem gdzie jest błąd.

❓ Problem

The clock does not appear on the homepage.

✅ Explanation

The issue is not related to HTML or CSS.
The clock is missing because JavaScript modules are not being executed correctly.

Most likely causes:

leftover legacy script.js

incorrect ES module loading

opening the page via file:// instead of a local server

✔ Solution

Remove script.js

Load only js/main.js as a module

Run the project using a local web server (e.g. Live Server)

After these fixes, the clock displays correctly.

✅ PODSUMOWANIE (WAŻNE)

✔ HTML — OK
✔ CSS — OK
✔ zegar — OK
❌ problem = JS modules + sposób uruchamiania
Autor

Mirosław Dworak

GitHub: https://github.com/miroslawdworak

X (Twitter): https://x.com/M_Dworak
