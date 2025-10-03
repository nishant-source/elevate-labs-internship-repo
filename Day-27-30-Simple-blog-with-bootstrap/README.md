# Day-08 — Simple Blog Layout Using Bootstrap 5

🛠 Tools Used
- HTML5
- CSS3 (for small custom styling)
- Bootstrap 5 (CDN)
- VS Code
- Chrome Browser

📌 Project Requirements
- Include Bootstrap 5 CSS & JS via CDN.
- Create a responsive **navbar** with brand and links.
- Build a **container** with multiple blog cards:
  - Each card has an image, title, short description, and "Read More" button.
- Use Bootstrap **grid system** to arrange cards responsively.
- Add a **footer** with social links/icons.
- Customize spacing and colors using Bootstrap utility classes.

✅ Outcome
- Learned how to use **Bootstrap 5** for quick UI development.
- Practiced **responsive design** using grid system and utility classes.
- Understood how to build cards, navbars, and footers with Bootstrap.
- Improved speed in building layouts without writing much custom CSS.

📂 Project Structure
Day-08/
│── index.html        # Blog layout with Bootstrap
│── style.css         # Small custom styles
│── script.js         # (Optional, for future interactivity)
│── README.md         # Project documentation
│── task-8.pdf        # Internship task file

💻 Code Overview
**HTML**  
- Navbar created with Bootstrap `.navbar` and `.nav-link`.  
- Blog posts displayed with Bootstrap `.card` inside a responsive `.row .col-md-4`.  
- Footer styled using `.bg-dark .text-light` with social links.  

**CSS**  
- Small custom tweaks for card hover effect.  

📱 Demo Behavior
- On desktop → 3 cards in a row.  
- On tablet → 2 cards in a row.  
- On mobile → 1 card per row.  

🚀 How to Run
1. Clone or download this folder.
2. Open `index.html` in a browser.
3. Resize window or test on mobile to check responsiveness.

🔮 Future Improvements
- Add pagination or multiple blog pages.
- Use a backend to load posts dynamically.
- Add comment section and categories.
