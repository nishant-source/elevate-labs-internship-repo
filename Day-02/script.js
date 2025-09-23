// the full outer container box where tasks will really add after click
const taskListBox = document.querySelector("#myUL");
// task writing inputbox (above in header)
const taskInputBox = document.querySelector("#myInput");
// btn to add the task
const addTaskButton = document.querySelector(".addBtn");

function putNewTaskInsideList() {
  const whatTypedInInputBox = taskInputBox.value.trim();

  // if didn’t type anything, show soemething
  if (whatTypedInInputBox === "") {
    alert("You must write something in title!");
    return;
  }

  const newTaskLine = document.createElement("li");
  newTaskLine.textContent = whatTypedInInputBox; // whatever is written in that taskInputBox will add in the "li" list form in the "ul" container

  // make the small cross button (to remove the task later)
  const crossButtonToRemove = document.createElement("span");
  crossButtonToRemove.textContent = "×";
  crossButtonToRemove.className = "close";

  // put the cross button inside the every new line
  newTaskLine.appendChild(crossButtonToRemove);

  // push (means it will add the new line in the end of the box) the new line into the big task box
  taskListBox.appendChild(newTaskLine);

  // (not required but doing this will make it more better) make the typing box empty so I can type next thing
  taskInputBox.value = "";
}

// whenever click on the task -
taskListBox.addEventListener("click", function (event) {
  // if click on the task line, mark it done and undone (toogle)
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
  // if click on the cross button, remove the line
  else if (event.target.classList.contains("close")) {
    event.target.parentElement.remove();
  }
});

// when press the add button, it will run the function to add task
addTaskButton.addEventListener("click", putNewTaskInsideList);

// also, hitting "Enter" while typing, add the task also
taskInputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    putNewTaskInsideList();
  }
});
