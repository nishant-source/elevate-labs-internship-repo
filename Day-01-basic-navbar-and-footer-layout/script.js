const hamburger = document.querySelector("#hamburger");
const navIconsDiv = document.querySelector("#navbarlinks");
const closeBtn = document.querySelector("#close");

hamburger.onclick = function () {
  navIconsDiv.classList.add("active"); // show menu
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
};

closeBtn.onclick = function () {
  navIconsDiv.classList.remove("active"); // hide menu
  closeBtn.style.display = "none";
  hamburger.style.display = "block";
};
