# 🕰️ Vanilla JS Digital Clock

A clean, responsive, and minimalist digital clock built from scratch using HTML5, CSS3, and modern Vanilla JavaScript. This project serves as a foundational learning tool for mastering real-time DOM manipulation and CSS Flexbox layouts.

![Build Status](https://shields.io)
![License](https://shields.io)

---

## 🚀 Features

*   **Real-Time Tracking:**  Syncs instantly with your computer's local system time.
*   **12-Hour Format:**  Built-in standard clock logic with automatic AM/PM indicators.
*   **Responsive UI:**  Centered viewport layout that scales nicely on mobile, tablet, and desktop screens.
*   **Neon Aesthetics:**  Glow-in-the-dark digital look using modern CSS shadows.

---

## 🧠 Concepts Learned

Building this project introduces several core web development fundamentals:

### ⚙️ JavaScript
*   **The `Date` Object:** Initializing `new Date()` to extract precise hours, minutes, and seconds.
*   **Asynchronous Timing:** Using `setInterval()` to loop code execution exactly every 1000 milliseconds.
*   **String Formatting:** Using `.toString().padStart(2, '0')` to enforce dual-digit formatting for single digits (e.g., turning `5` into `05`).
*   **Ternary Operators:** Writing shorthand conditions (`hours >= 12 ? 'PM' : 'AM'`) for compact code.
*   **DOM Manipulation:** Dynamically rewriting text nodes inside the HTML layer via `document.getElementById().textContent`.

### 🎨 CSS
*   **Flexbox Positioning:**  Centering components cleanly using `display: flex`, `justify-content`, and `align-items`.
*   **Viewport Dimensions:**  Using `100vh` to match the display boundaries perfectly without overflow.
*   **Neon Styling:**  Layering semi-transparent hex codes in `box-shadow` with `rgba()` for a glowing effect.

### 🏗️ HTML
*   **Target Linking:**  Attaching external structural stylesheets and logic scripts to an organized `.html` document.

---

## 🛠️ Project Structure

```text
├── Clock.html   # Page layout & clock container
├── Clock.css    # Typography, flexbox grid, and glowing themes
└── Clock.js    # Time calculations and interval triggers
```

---

## 📦 How to Run Locally

Follow these three simple steps to run the application on your computer:

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```

2. **Navigate to the folder:**
   ```bash
   cd digital-clock
   ```

3. **Launch the project:**
   Double-click the `index.html` file to open it in any web browser, or use a tool like VS Code's **Live Server** extension.

---

## 📝 License

This project is available under the [MIT License](LICENSE)
