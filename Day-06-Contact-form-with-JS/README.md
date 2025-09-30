# Day-06 — Contact Form with JavaScript Validation

🛠 Tools Used

- HTML5
- CSS3 (Form Styling, Flexbox)
- JavaScript (Form Validation, DOM Manipulation)
- VS Code
- Chrome DevTools

📌 Project Requirements

- Build a contact form with fields: **Name, Email, Message**.
- Validate inputs on submit:
  - No field should be empty.
  - Email must follow a valid format using regex.
- Show error messages below the form if validation fails.
- Prevent form submission if invalid.
- Show a success message when form is valid (no actual sending).
- Test edge cases like empty inputs, wrong email, and special characters.

✅ Outcome

- Learned how to handle **form events** in JavaScript.
- Understood **regex usage** for validating email.
- Practiced **preventing default behavior** with `event.preventDefault()`.
- Built a clean UI that gives real-time feedback to the user.

📂 Project Structure
Day-06/
│── index.html
│── style.css
│── script.js
│── README.md

💻 Code Overview

- **HTML**: Basic form with Name, Email, Message fields and Submit button.
- **CSS**: Styled the form with centered layout, colors, and hover effects.
- **JavaScript**:
  - Checks if fields are empty.
  - Validates email with regex.
  - Displays error messages in red and success message in green.
  - Prevents page reload with `event.preventDefault()`.

📱 Demo Behavior

- If you click **Submit** with empty fields → error shown.
- If email is not valid → error shown.
- If everything is correct → success message shown.

🚀 How to Run

1. Clone or download the files.
2. Open `index.html` in a browser.
3. Fill the form and test different cases.

🔮 Future Improvements

- Add live validation while typing.
- Add server-side validation with backend.
- Add animations for error and success messages.
