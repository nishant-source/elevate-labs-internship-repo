const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

// Function to fetch and display users
function fetchUsers() {
  userContainer.innerHTML = "Loading...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((users) => {
      userContainer.innerHTML = ""; // clear "Loading..."
      users.forEach((user) => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user-card");
        userDiv.innerHTML = `
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Address: ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(userDiv);
      });
    })
    .catch((error) => {
      userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

// Load users on page load
fetchUsers();

// Reload button
reloadBtn.addEventListener("click", fetchUsers);
