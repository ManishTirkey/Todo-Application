// renderer.js

// DOM Elements
const tasksList = document.getElementById("tasks-list");
const newTaskInput = document.getElementById("new-task-input");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

// Render tasks
function renderTasks() {
  tasksList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.className = `task-item ${task.completed ? "completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTaskCompletion(index));

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "×";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteBtn);

    tasksList.appendChild(taskItem);
  });

  // Save to localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add new task
function addTask() {
  const text = newTaskInput.value.trim();
  if (text) {
    tasks.push({
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    });
    newTaskInput.value = "";
    renderTasks();
  }
}

// Toggle task completion
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

newTaskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Initial render
renderTasks();

// Make the entire window draggable
document.addEventListener("mousedown", (e) => {
  // Check if we're clicking on an interactive element
  if (e.target.closest("button") || e.target.closest("input")) {
    return;
  }

  // Make the window draggable
  document.body.style.webkitAppRegion = "drag";
});

document.addEventListener("mouseup", () => {
  document.body.style.webkitAppRegion = "no-drag";
});
