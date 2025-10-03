Day-07 — Fetch and Display Data from Public API
🛠 Tools Used
HTML5 (container for displaying user info)

CSS3 (styling user cards)

JavaScript (ES6) (Fetch API, Promises, DOM manipulation, Error handling)

VS Code

Chrome DevTools

📌 Project Requirements
Use JavaScript Fetch API to fetch user data from:
https://jsonplaceholder.typicode.com/users

Parse the JSON response.

Display user information (Name, Email, Address) dynamically on the page.

Show "Loading..." while fetching data.

Handle errors gracefully using .catch() (e.g., no internet).

Add a Reload button to refetch data without reloading the page.

Test by disabling internet to verify error handling.

Apply basic CSS styling to the displayed user cards.

✅ Outcome
Understood how to make API requests with Fetch API.

Learned how to work with Promises (then, catch) and asynchronous JavaScript.

Practiced JSON parsing and DOM manipulation.

Gained experience handling network errors and providing user feedback.

Implemented a Reload button for dynamic data fetching.

📂 Project Structure
Day-07/
│── index.html   # HTML structure (container + reload button)
│── style.css    # CSS styling for user cards
│── script.js    # Fetch API logic, DOM updates, error handling
│── README.md    # Project documentation
💻 Code Overview
HTML:

Contains a container <div id="userContainer"> for user data.

A <button id="reloadBtn">Reload Users</button> for refetching.

CSS:

Styled user data inside .user-card with borders, padding, and spacing.

JavaScript:

Fetches data from API with fetch().

Checks response status and parses JSON.

Loops over users and dynamically creates user cards.

Shows "Loading..." before data arrives.

Displays error messages in red if fetch fails.

Reload button re-triggers the fetch logic.

📱 Demo Behavior
On page load → "Loading..." appears → users are displayed when data arrives.

If internet is disconnected → error message in red shown.

Clicking Reload Users → fetches the data again from the API.

🚀 How to Run
Clone or download the repository.

Open index.html in a browser.

Observe data fetched and displayed.

Try disabling internet to test error handling.

Click Reload Users button to refetch data.

🔮 Future Improvements
Add a loading spinner instead of plain text.

Improve UI with better styling and responsive design.

Use async/await syntax for cleaner code.

Show more user details (phone, website, company).

Cache results in localStorage to support offline use.