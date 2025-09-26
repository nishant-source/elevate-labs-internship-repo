# 🛠 Tools Used
- HTML5

- CSS3 (Flexbox, Media Queries)

- JavaScript (Hamburger menu toggle)

- VS Code

- Chrome DevTools (Device Toolbar)

##  📌 Project Requirements
- Open an existing HTML page in VS Code.

- Identify fixed-width elements or large images that break on small screens.

- Add media queries targeting max-width: 768px (tablet) and max-width: 600px (mobile).

## Adjust layout:

- Stack columns vertically.

- Reduce font sizes.

- Collapse navigation menu into a hamburger.

- Test responsiveness with Chrome DevTools.

- Fix scrolling/overflow issues.

- Ensure images scale within containers.

## Outcome
- Website works smoothly on desktop, tablet, and mobile.

- Learned mobile-first design principles.

- Understood flexible layouts with CSS units (%, rem, em, vw).

- Improved navbar with hamburger toggle menu on mobile.

##  Key Concepts Practiced
- Media Queries (@media (max-width: ...))

- Responsive Web Design

- Viewport meta tag

- CSS Units (%, rem, em, vw)

- Flexbox for layout

## 📂 Project Structure
Day-04-Responsive-Website/
│── index.html
│── style.css
│── script.js
💻 Code Overview
🔹 Navbar & Hamburger Menu
Navbar shows inline links on desktop.

On mobile (max-width: 600px), menu collapses into a hamburger icon.

JavaScript toggles the nav with .active class.

🔹 Hero Section
- Full-screen hero image.

- Uses object-fit: contain on desktop.

- Switches to object-fit: cover on mobile for better fit.

🔹 Text Section
- Responsive font sizes (h1, h2, h3, h4) adapt with media queries.

- Uses flexbox for vertical centering.

## 📱 Responsive Design Demo
Desktop View
✅ Horizontal navbar
✅ Full-screen hero image
✅ Centered text section

## Tablet / Mobile View
✅ Hamburger menu toggle
✅ Images scale properly
✅ Fonts shrink dynamically
✅ Layout stacks vertically

## 🚀 How to Run
- Clone the repo or download files.

- Open index.html in a browser.

- Use Chrome DevTools (Ctrl+Shift+I → Toggle Device Toolbar) to test mobile view.

## 🔮 Future Improvements
- Smooth slide-in animation for navbar.

- Dark/Light mode toggle.

- More responsive breakpoints (like 1024px for tablets).
