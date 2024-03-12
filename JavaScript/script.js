// Selectors
const todoInput = document.querySelector(".list-head input");
const addBtn = document.querySelector(".list-head button");
const tasks = document.querySelector(".tasks");

// add btn disabled
todoInput.addEventListener("keyup", () => {
  if (todoInput.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

// add new task
addBtn.addEventListener("click", () => {
  addTask();
});

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (todoInput.value.trim() !== "") {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
      <p>${todoInput.value}</p>
      <div class="task-btns">
        <button class="complete-btn">
          <i class="fa-solid fa-check"></i>
        </button>
        <button class="trash-btn">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `;
    tasks.appendChild(newTask);
    todoInput.value = "";
  } else {
    alert("Please Enter a Task");
  }
}

// delete task from list
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});

// mark task as completed
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.parentElement.parentElement.classList.toggle(
      "completed"
    );
  }
});
