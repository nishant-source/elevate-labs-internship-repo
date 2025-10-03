const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const form = document.querySelector("form");
const errorMsg = document.getElementById("error-msg");
const submitMsg = document.getElementById("submit-msg");

// Email regex for simple validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from reloading the page

  // hide previous messages
  errorMsg.style.display = "none";
  submitMsg.style.display = "none";

  // check name
  if (nameInput.value.trim() === "") {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Name should not be empty";
    return;
  }

  // check email
  if (emailInput.value.trim() === "") {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Email should not be empty";
    return;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Enter a valid email address";
    return;
  }

  // check message
  if (messageInput.value.trim() === "") {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Message should not be empty";
    return;
  }

  // if all good
  submitMsg.style.display = "block";
  submitMsg.innerHTML = "Form submitted successfully ✅";

  // clear form fields
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});

console.log("If i print, everything is working perfectly fine");
