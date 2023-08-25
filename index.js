// TODO: Create a filter function for the buttons, All, Active, Completed

const form = document.getElementById("form");
const todoInput = document.getElementById("addTodo");
const todoList = document.querySelector(".todoList");
const keepTrack = document.querySelector("track");
const todos = document.querySelectorAll(".todoLi");

let count = [];

form.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodos);
btn.addEventListener("click", clearAll); // TODO: This clear function works, just create a button for it

function clearAll() {
  count = [];

  document.querySelector(".itemCount").innerText = `Items:${count.length}`;

  todoList.textContent = "";
}

function addTodo(e) {
  e.preventDefault();

  const newDiv = document.createElement("div");
  newDiv.classList.add("todoDiv");

  const newLi = document.createElement("li");
  newLi.classList.add("todoLi");
  newLi.innerText = todoInput.value;

  const radioBtn = document.createElement("input");
  radioBtn.classList.add("radio");
  radioBtn.type = "checkbox";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("deleteTodo");

  newLi.appendChild(radioBtn);
  newLi.appendChild(deleteBtn);

  newDiv.appendChild(newLi);

  count.push(newDiv);
  todoList.appendChild(newDiv);

  document.querySelector(".itemCount").innerText = `Items:${count.length}`;

  todoInput.value = "";
}

function deleteTodos(e) {
  const item = e.target;

  if (item.classList == "deleteTodo") {
    const removeTodo = item.parentElement.parentElement;

    count.pop();
    document.querySelector(".itemCount").innerText = `Items:${count.length}`;
    removeTodo.remove();
  } else if (item.classList == "radio") {
    const completeTodo = item.parentElement;

    completeTodo.classList.toggle("active");
    completeTodo.classList.toggle("complete");
  }
}

function filterOptions() {}
