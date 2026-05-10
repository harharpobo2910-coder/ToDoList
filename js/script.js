const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.className = "task-item";

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Button container
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "task-buttons";

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";

  editBtn.addEventListener("click", () => {
    const newTask = prompt("Update task:", span.textContent);

    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append buttons
  buttonDiv.appendChild(editBtn);
  buttonDiv.appendChild(deleteBtn);

  // Append elements
  li.appendChild(span);
  li.appendChild(buttonDiv);

  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}